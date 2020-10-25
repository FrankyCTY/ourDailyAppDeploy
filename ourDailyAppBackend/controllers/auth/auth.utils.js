const jwt = require("jsonwebtoken");
const S3 = require("../../helpers/S3");

const signToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN, // 90d
    }
  );
};

exports.createSendToken = (user, statusCode, res, otherData) => {
  // console.log("createSendToken activated", otherData)
  const token = signToken(user._id);
  const cookieOptions = {
    // 90
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRIES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      overwrite: true,
    };
    
    // Token will only be sent via HTTPS
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
    
    // Send cookie -> server to client
    res.cookie("jwt", token, cookieOptions);
    
  // Get rid of sensitive data
  user.password = undefined;
  user.passwordChangedAt = undefined;

  // if user provides the avatarBuffer than we will use it for the
  // front end avatar state
  if (otherData) {
    console.log({otherData})
    return res.status(statusCode).json({
      status: "success",
      token,
      data: {
        user,
        ...otherData,
      },
    });
  }
  else {
    return res.status(statusCode).json({
      status: "success",
      token,
      data: {
        user,
      },
    });
  }
};

exports.getUserBackground = async(bgId) => {
  try {
    console.log("before try catch");
    const S3Instance = new S3(bgId);
    return await S3Instance.getFromS3((imgBuffer) => imgBuffer);
    
  } catch (error) {
    return "default";
  }
}

exports.getUserImage = async (imageId, next) => {
  let retry = false;
  // 1) Get image using my aws confidentials
  try {
        console.log("before try catch");
        const S3Instance = new S3(imageId);
        return await S3Instance.getFromS3((imgBuffer) => imgBuffer);
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
          return await S3Instance.getFromS3((imgBuffer) => imgBuffer);
        } catch (error) {
          console.log(error);
          return next(new OperationalErr("Error getting image from aws", 500, "local"));
        }
      }
    }
}
