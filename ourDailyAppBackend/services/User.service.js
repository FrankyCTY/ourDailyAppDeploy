const authUtils = require("../controllers/auth/auth.utils");
const Sharp = require("../helpers/Sharp");
const User = require("../models/user/user.model");
const crypto = require("crypto");
const OperationalErr = require("../helpers/OperationalErr");
const S3 = require("../helpers/S3");

class UserService {
  getUserBg = async (bg) => {
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

    return userBg;
  }

  getUserImage = async (imageId, next) => {
    console.log({imageId})
    let retry = false;
    // 1) Get image using my aws confidentials
    try {
          console.log("before try catch");
          const S3Instance = new S3(imageId);
          return await S3Instance.getFromS3();
          // return ;
        
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
            return await S3Instance.getFromS3();
          } catch (error) {
            console.log(error);
            return next(new OperationalErr("Error getting image from aws", 500, "local"));
          }
        }
      }
  }


  resizeUserPhoto = async (userId, photoBuffer) => {
    // Multer's upload middleware puts the file into req

    const filename = `user-${userId}-${Date.now()}.jpeg`;

    // Resize and reformat user photo
    const resizedImgBuffer = await new Sharp(photoBuffer).formatAvatar();
    console.log("get resized img")
    console.log("resizedImgBuffer", resizedImgBuffer)
    return {filename, resizedImgBuffer};
  }

  updateUser = async (data, userUd) => {
    const updatedUser = await User.findByIdAndUpdate(
      userUd,
      data,
      {
        new: true,
        // runValidators: true,
      }
    );

    return updatedUser;
  }

  checkMatchedUserToResetPw = async(token) => {
  // 1) Get user based on the token
    const hashToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

      console.log({hashToken})

    const user = await User.findOne({
      passwordResetToken: hashToken,
      passwordResetExpires: { $gt: Date.now() },
    }).select("+active");

    console.log({user})

    return user;
  }

  
  
}

module.exports = UserService;