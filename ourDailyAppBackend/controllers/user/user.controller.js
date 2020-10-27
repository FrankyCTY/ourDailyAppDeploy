const User = require("../../models/user/user.model");
const S3 = require("../../helpers/S3");
const withCatchErrAsync = require("../../utils/error/withCatchErrorAsync");
const OperationalErr = require("../../helpers/OperationalErr");
const { filterObj, upload, uploadAvatarToS3, uploadBgToS3 } = require("./user.utils");
// const sharp = require("sharp");
const Sharp = require("../../helpers/Sharp");
const sharp = require("sharp");
const factory = require("../controllerFactory");
const authUtils = require("../auth/auth.utils");

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

  let userBg = undefined;

  // Check if background is url or is a beffer that needed to get from S3
  if(bg === "default") {
    userBg = "default";
  }
  else if(bg.startsWith("https")) {
    userBg = bg;
  } else {
    userBg = await authUtils.getUserBackground(bg);
    // userBg: {type, buffer}, we only need buffer from S3
  }
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

  // 2) Only update aws s3 if req.file exists
  if(req.file) {
    const { filename, resizedImgBuffer } = req.file;
    const imgBuffer = resizedImgBuffer;

    await uploadAvatarToS3(filename, imgBuffer);
  }
  
    const filteredReqBody = filterObj(req.body, ["name", "email", "birthday", "bio", "personalWebsite", "gender", "imgName"]);
    // 3) Apply if user choose one of the default avatar

    let isUpdateAvatar = false;
    if(req.body.imgName)
    {
      filteredReqBody.photo = `${req.body.imgName}.jpeg`;
      isUpdateAvatar = true;
    }
    // 4) Apply if user upload his own avatar
    if (req.file) {
      filteredReqBody.photo = req.file.filename;
      isUpdateAvatar = true;
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      filteredReqBody,
      {
        new: true,
        // runValidators: true,
      }
    );

    // 3A) Delete old avatar from s3 bucket
    if(isUpdateAvatar) {
      const oldAvatarName = req.user.photo;
      if(oldAvatarName !== "default.jpeg" || oldAvatarName !== "male.jpeg" || oldAvatarName !== "female.jpeg") {
        const S3Instance = new S3(oldAvatarName);
        await S3Instance.deleteFromS3();
      }
    }

    // 3B) Send Response
    return res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  // }
});

exports.changePassword = withCatchErrAsync(async(req, res, next) => {
  const {password, newPassword} = req.body;
  const {_id} = req.user;

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
  return authUtils.createSendToken(userDoc, 200, res);
})


exports.getS3Image = withCatchErrAsync(async (req, res, next) => {
    const {imageId} = req.params;
    console.log("get S3 Image", imageId);
    
    let retry = false;
    // 1) Get image using my aws confidentials
    try {
        const S3Instance = new S3(imageId);
        await S3Instance.getFromS3((imgBuffer) => res.status(200).json({
          status: "success",
          data: {
            image: imgBuffer,
          }
        }));
      
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
          const S3Instance = new S3("default.jpeg");
          await S3Instance.getFromS3((imgBuffer) => res.status(200).json({
              status: "success",
              data: {
                image: imgBuffer,
              }
            }));
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

  const appInCartDocs = userDoc.applicationsInCart

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
