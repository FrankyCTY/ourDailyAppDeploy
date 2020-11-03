const User = require("../../models/user/user.model");
const S3 = require("../../helpers/S3");
const withCatchErrAsync = require("../../utils/error/withCatchErrorAsync");
const OperationalErr = require("../../helpers/OperationalErr");
const { filterObj, upload, uploadAvatarToS3, uploadBgToS3 } = require("./user.utils");
// const sharp = require("sharp");
const Sharp = require("../../helpers/Sharp");
const sharp = require("sharp");
const factory = require("../controllerFactory");
const UserService = require("../../services/User.service");
const AuthService = require("../../services/Auth.service");

exports.uploadUserAvatar = upload.single("avatar");
exports.uploadUserBg = upload.single("uploadedBg");

exports.resizeUserPhoto = withCatchErrAsync(async (req, res, next) => {
  // Multer's upload middleware puts the file into req
  if (!req.file) {
    return next();}

  const { id } = req.user;

  req.file.filename = `user-${id}-${Date.now()}.jpeg`;

  // Resize and reformat user photo
  req.file.resizedImgBuffer = await new Sharp(req.file.buffer).formatAvatar();

  return next();
});

// @desc    Allow admin to get all user info with queryString filtering
// @private
// @restrictTo only admin
exports.getAllUsers = factory.getAll(User);

exports.getUserBg = withCatchErrAsync(async(req, res, next) => {
  const {bg} = req.user;
  // const userBg = await User.findById(id).select("bg");

  const userService = new UserService();
  const userBg = await userService.getUserBg(bg);
  // return
  return res.status(200).json({
    status: "success",
    data: {
      bg: userBg,
    }
  })
})

exports.changeUserTheme = withCatchErrAsync(async(req, res, next) => {
  const {id} = req.user;
  const {theme} = req.body;

  const updatedUserDoc = await User.findByIdAndUpdate(id, {theme}, {new: true});

  return res.status(200).json({
    status: "success",
    theme: updatedUserDoc.theme,
  })
})

exports.updateUserBg = withCatchErrAsync(async (req, res, next) => {
  const {bgUrl} = req.body;
  const {id} = req.user;
  const userService = new UserService();

  console.log({bgUrl})
  console.log({file: req.file})

  // if user update with default background with url
  if(bgUrl) {
    // 1) get url
    const bg = bgUrl;

    // 2b) save changes to user
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {bg},
      {
        new: true,
        // runValidators: true,
      }
    );
    
    // 3b) return
    return res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
        // s3 bg can only be buffer
        bg,
      }
    })
  }
  else if (req.file) {
    // else if user uploaded custom background
    // 1) Delete old BG from s3 bucket
    const S3Instance = new S3(`user-background-${id}.jpeg`);
    await S3Instance.deleteFromS3();

    const {buffer} = req.file;
    // 2b) create unique filename for bg
    const bgName = `user-background-${id}.jpeg`;

    // 3b) reformat background into jpeg
    const bg = await sharp(buffer).toFormat("jpeg").jpeg({ quality: 30 }).toBuffer();

    // 4b) upload to s3
    await uploadBgToS3(bgName, bg);

    // 5b) save changes to user
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {bg: bgName},
      {
        new: true,
        // runValidators: true,
      }
    );

    // 6b) return
    return res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
        // s3 bg can only be buffer
        bg,
      }
    })

  // delete all background
  } else {
    // else if user uploaded custom background
    // 1) Delete old BG from s3 bucket
    const S3Instance = new S3(`user-background-${id}.jpeg`);
    await S3Instance.deleteFromS3();

    // 2) return
    return res.status(200).json({
      status: "success",
      data: {
        // s3 bg can only be buffer
        background: "default",
      }
    })
  }


})

// Please use updateMe wit
// updateMe itself will not return any response
exports.updateMe = withCatchErrAsync(async (req, res, next) => {
  const {id} = req.user;
  const filteredReqBody = filterObj(req.body, ["name", "email", "birthday", "bio", "personalWebsite", "gender", "imgName"]);
  const userService = new UserService();

  // 1) Create designed error if user POST password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new OperationalErr(
        "Please use /users/changePassword to change password",
        400,
        "local"
      )
    );
  }

  // 2a) If user is upload his own photo to update
  if(req.file) {
    // Resize user photo
    const {filename, resizedImgBuffer} = await userService.resizeUserPhoto(id, req.file.buffer);
    // add into req.user
    console.log({resizedImgBuffer})
    req.file.filename = filename;
    req.file.resizedImgBuffer = resizedImgBuffer;


    // Only update aws s3 if req.file exists
    const s3 = new S3(filename);
    await s3.uploadToS3(resizedImgBuffer);

    // Preparing the response body and update in db
    filteredReqBody.photo = filename;

    // Delete old avatar from s3 bucket
    const oldAvatarName = req.user.photo;
    // some photos are not allowed to be deleted from s3'
    if(oldAvatarName !== "default.jpeg" && oldAvatarName !== "male.jpeg" && oldAvatarName !== "female.jpeg") {
      console.log("will delete old avatar")
      const S3Instance = new S3(oldAvatarName);
      await S3Instance.deleteFromS3();
    }
  }
  // 2b) Operate if user is updating avatar with provided images
  // Which can only happen when user first register the account, so no need
  // to delete old avatar from S3
  else if (req.body.imgName) {
    filteredReqBody.photo = `${req.body.imgName}.jpeg`;
  }

  // 3) Update the db with user data
  const updatedUserDoc = await userService.updateUser(filteredReqBody, id);

  // return
  return res.status(200).json({
    status: "success",
    data: {
      user: updatedUserDoc,
    },
  });
});

exports.changePassword = withCatchErrAsync(async(req, res, next) => {
  const {password, newPassword} = req.body;
  const {_id} = req.user;
  const authService = new AuthService();

  const userDoc = await User.findById(_id).select("+password");
  // 1) Check if user password is correct
  if (!(await userDoc.correctPassword(password, userDoc.password))) {
    return next(
      new OperationalErr(
        "password{SEPERATE}Incorrect password",
        401,
        "local"
      )
    );
  }
  
  // 2) After validation, update user password
  userDoc.password = newPassword;

  await userDoc.save();

  // 3) update user jwt
  const {user, res: response} = authService.createSendToken(userDoc, res);

  return response.status(200).json({
    status: "success",
    data: {
      user,
    },
  }); 
})


exports.getS3Image = withCatchErrAsync(async (req, res, next) => {
    const {imageId} = req.params;
    console.log("get S3 Image", imageId);
    
    let retry = false;
    // 1) Get image using my aws confidentials
    try {
        const S3Instance = new S3(imageId);
        const avatarBuffer = await S3Instance.getFromS3();
        // If everything goes fine, send token to client
        return res.status(200).json({
          status: "success",
          data: {
            avatar: avatarBuffer,
          },
        }); 

      
    } catch (error) {
      // 2a) If error is "can't find the avatar with that Key provided"
      // then we want to retry later
      if (error.statusCode === 404) {
        console.log("CAUGHT NO SUCH KEY ERROR!")
        retry = true;
      }
      // 2b) If error is other error, then we throw error respond
      if(!retry)
      {
        console.log(error);
        return next(new OperationalErr("Error getting image from aws", 500, "local"));
      } else {
        // 3) if can't find the specific avatar, then we retry with the default jpeg
        try {

          const S3Instance = new S3(imageId);
          const avatarBuffer = await S3Instance.getFromS3();
          // If everything goes fine, send token to client
          return res.status(200).json({
            status: "success",
            token,
            data: {
              avatar: avatarBuffer,
            },
          }); 
        } catch (error) {
          console.log(error);
          return next(new OperationalErr("Error getting image from aws", 500, "local"));
        }
      }
    }
})

exports.getAppInCart = withCatchErrAsync(async (req, res, next) => {
  const {_id} = req.user;
  const userDoc = await User.findById(_id).populate({path: 'applicationsInCart', select: {'name': 1, 'createdAt': 1, 'imgSrc': 1, 'price': 1, 'route': 1, 'creator': 1}});


  // 2) Only calculate the total price if there is app in the user's cart
  let totalPriceInCart = 0;
  if(userDoc.applicationsInCart.length !== 0) {
    totalPriceInCart = userDoc.applicationsInCart.reduce((totalPrice, app) => totalPrice + app.price, 0);
  }

  console.log({totalPriceInCart})

  const appInCartDocs = userDoc.applicationsInCart;

  return res.status(200).json({
    status: "success",
    result: appInCartDocs.length,
    data: {
      apps: appInCartDocs,
      totalPrice: totalPriceInCart
    }
  })
})

exports.getAppInWishlist = withCatchErrAsync(async (req, res, next) => {
  const {_id} = req.user;
  const userDoc = await User.findById(_id).populate({path: 'wishlistApplications', select: {'name': 1, 'createdAt': 1, 'imgSrc': 1, 'price': 1, 'route': 1, 'creator': 1}});

  const appInWishlistDocs = userDoc.wishlistApplications

  return res.status(200).json({
    status: "success",
    result: appInWishlistDocs.length,
    data: {
      apps: appInWishlistDocs
    }
  })
})

exports.deleteMe = withCatchErrAsync(async(req, res, next) => {
  const {_id} = req.user;

  const deletedUserName = `user-${_id}`;

  // 1) deny action if target account is already inactive
  const userDoc = await User.findById(_id).select("+active");
  console.log(userDoc)
  if(!(userDoc.active)) {
    return next(new OperationalErr("Target account is inactive.", 401, "local"));
  }

  // 2) Update target user doc ot inactive and other stuff
  userDoc.active = false;
  userDoc.name = deletedUserName;
  userDoc.photo = "default.jpeg";

  await userDoc.save();


  // 3) delete user cookie
  res.clearCookie("jwt");

  return res.status(200).json({
    status: "success",
    data: {
      user: userDoc,
    }
  })
})

exports.getDataForUser = withCatchErrAsync(async(req, res, next) => {
  const {_id, bg, photo} = req.user;
  console.log({photo})

  const userDoc = await User.findById(_id).populate([{path: 'applicationsInCart', select: {'name': 1, 'createdAt': 1, 'imgSrc': 1, 'price': 1, 'route': 1, 'creator': 1}}, 
  {path: 'wishlistApplications', select: {'name': 1, 'createdAt': 1, 'imgSrc': 1, 'price': 1, 'route': 1, 'creator': 1}}]);
  
  
  // 1) get cart
  // Only calculate the total price if there is app in the user's cart
  let totalPriceInCart = 0;
  if(userDoc.applicationsInCart.length !== 0) {
    totalPriceInCart = userDoc.applicationsInCart.reduce((totalPrice, app) => totalPrice + app.price, 0);
  }

  const appInCartDocs = userDoc.applicationsInCart

  
  // 2) get wishlist
  const appInWishlistDocs = userDoc.wishlistApplications

  // 3. get background
  const userService = new UserService();
  const userBg = await userService.getUserBg(bg);

  // 4. get avatar
  const userAvatar = await userService.getUserImage(photo, next);
  console.log(userAvatar);
  // const S3Instance = new S3("default.jpeg");

  // const avatarBuffer = await S3Instance.getFromS3();
  
  
  return res.status(200).json({
    status: "success",
    data: {
      cartItems: appInCartDocs,
      totalPriceInCart,
      wishlistItems: appInWishlistDocs,
      bg: userBg,
      avatar: userAvatar,
    }
  })
}); 

// @desc Allow admin to see the birthday data of the users
// @private
// @restrictTo only admin

exports.getBirthdayData = withCatchErrAsync(async (req, res, next) => {
  const birthdayStats = await User.aggregate([
    {
      $group: {
        _id: {
          $month: "$birthday",
        },
        totalUsers: {
          $sum: 1,
        }, // group every users in one statObj
        users: {
          $push: "$name",
        },
      },
    },
    {
      $addFields: {
        month: "$_id",
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
    {
      $sort: {
        month: 1,
      },
    },
  ]);

  return res.status(200).json({
    status: "success",
    results: birthdayStats.length,
    data: {
      birthdayStats,
    },
  });
});
