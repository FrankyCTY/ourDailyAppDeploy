const jwt = require("jsonwebtoken");

class AuthService {
  constructor() {}

  signToken = (id) => {
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
  
  createSendToken = (user, res) => {
    // console.log("createSendToken activated", otherData)
    const token = this.signToken(user._id);
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
      
    // Get rid of sensitive data
    user.password = undefined;
    user.passwordChangedAt = undefined;
    
    // set cookie
    res.cookie("jwt", token, cookieOptions);

    // new return
    console.log({user})
    return {user, res};
  };
}

module.exports = AuthService;