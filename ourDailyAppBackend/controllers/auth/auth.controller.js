// const { s3 } = require("../../config/AWS");
const S3 = require("../../helpers/S3");
const withCatchErrAsync = require("../../utils/error/withCatchErrorAsync");
const User = require("../../models/user/user.model");
const authUtils = require("./auth.utils");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const OperationalErr = require("../../helpers/OperationalErr");
const Email = require("../../utils/mailer");
const { promisify } = require("util");
const UserService = require("../../services/User.service");
const AuthService = require("../../services/Auth.service");

const client = new OAuth2Client(
  `${process.env.REACT_APP_GOOGLE_CLIENTID}`
);

exports.protect = withCatchErrAsync(async (req, res, next) => {
  // 1) Getting token and check if it exists
  let token;
  const { authorization } = req.headers;


  if (authorization && authorization.startsWith("Bearer")) {
    token = authorizations.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (token === null || token === undefined) {
    
    return next(
      new OperationalErr(
        "You are not logged in! Please log in to get access.",
        401,
        "global"
      )
    );
  }

  // 2) Verify the token
  const decodedPayload = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  // 3) Check if user still exists @error [can check if user still active]
  const currentUser = await User.findById(decodedPayload.id);
  console.log(decodedPayload.id)

  if (currentUser === null) {
    return next(
      new OperationalErr(
        "You are not logged in! Please log in to get access.",
        401
      )
    );
  }

  // 4) Check if user changed password after the token was issued
  if (currentUser.isPasswordChanged(decodedPayload.iat)) {
    return next(
      new OperationalErr(
        "User recently changed password! Please log in again.",
        401
      )
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  console.log("I am in the protect middleware");
  req.user = currentUser;
  next();
});

//@desc Allow users to log in
//@public
exports.logIn = withCatchErrAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const userService = new UserService();
  const authService = new AuthService();

  // DATABASE - check if the user email is in the database
  const user = await User.findOne({ email }).select("+password").select("+active");

  // if account doesn't exist
  if (!user) {
    return next(
      new OperationalErr(
        "form{SEPERATE}Incorrect email or password",
        401,
        "local"
      )
    );
  }

  // Only active user to log in
  if(!user.active) {
    return next(
      new OperationalErr(
        "form{SEPERATE}This account has been deleted, please contact us via email for more details.",
        401, "local"
      )
    )
  }

  // Compare user password to see if valid
  if (!(await user.correctPassword(password, user.password))) {
    return next(
      new OperationalErr(
        "form{SEPERATE}Incorrect email or password",
        401,
        "local"
      )
    );
  }

  // Get user avatar from S3
  const userAvatar = await userService.getUserImage(user.photo, next);

  // If everything goes fine, send token to client
  const {user: userDoc, token, cookieOptions} = authService.createSendToken(user);
  res.cookie("jwt", token, cookieOptions);

  return res.status(200).json({
    status: "success",
    token,
    data: {
      user: userDoc,
      avatar: userAvatar,
    },
  });  
});

// @desc    Allow users to sign up
// @public
exports.signUp = withCatchErrAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm, gender, birthday } = req.body;
  const authService = new AuthService();

  const newUser = await User.create({
    name,
    email,
    password,
    passwordConfirm,
    gender,
    birthday,
  });

  // Get the default jpeg from s3 and send it back to user for react state
  try {
    // Send email to user to welcome them
    // @planToImplement url should point to change avatar page
    const url = `${req.protocol}://${req.get('host')}/mainPage`;
    console.log(url);
    // await new Email(newUser, url).sendWelcome();


    const S3Instance = new S3("default.jpeg");

    const avatarBuffer = await S3Instance.getFromS3();
    // If everything goes fine, send token to client
    const {user: userDoc, token, cookieOptions} = authService.createSendToken(newUser);
    res.cookie("jwt", token, cookieOptions);

    return res.status(201).json({
      status: "success",
      token,
      data: {
        user: userDoc,
        avatar: avatarBuffer,
      },
    }); 

  } catch (error) {
    console.log(error);
    return next(new OperationalErr("Error getting image from aws", 500, "local"));
  }
      
});

exports.logOut = withCatchErrAsync(async (req, res, next) => {
  res.clearCookie("jwt");

  return res.status(200).json({
    status: "success"
  })
})

exports.googleLogIn = withCatchErrAsync(async (req, res, next) => {
  const { tokenId } = req.body;
  const authService = new AuthService();

  const { payload } = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.REACT_APP_GOOGLE_CLIENTID,
  });

  const { email_verified, email, name, } = payload;
  if (email_verified) {
    const userDoc = await User.findOne({ email, isOauthAccount: true });

    if (userDoc) {
      // If everything goes fine, send token to client
      const {user, token, cookieOptions} = authService.createSendToken(userDoc);
      res.cookie("jwt", token, cookieOptions);

      return res.status(200).json({
        status: "success",
        token,
        data: {
          user,
        },
      });  
    } else {
      // else User email not created in database
      const password = email + process.env.RANDOM_HASH;

      const newUser = await User.create({
        name,
        email,
        password,
        // set isOauthAccount to true
        isOauthAccount: true
      });

      const {user: userDoc, token, cookieOptions} = authService.createSendToken(newUser);
      res.cookie("jwt", token, cookieOptions);

      return res.status(200).json({
        status: "success",
        token,
        data: {
          user: userDoc,
        },
      })
    }
  }
});

exports.forgotPassword = withCatchErrAsync(async (req, res, next) => {
  // 1) check if user exists based on POSTED email
  const { email } = req.body;
  const user = await User.findOne({ email }).select("+active");

  // 2) Error user does not exist
  if (!user) {
    return next(
      new OperationalErr("Email{SEPERATE}No User with this email address found.", 404, "local")
    );
  }

  // 3) Error if target user is inactive (deleted)
  if(!user.active) {
    return next(new OperationalErr("Email{SEPERATE}Target account is inactive.", 400, "local"));
  }

  // 4) Generate the random reset token
  // * Also added the passwordResetToken and passwordResetExpires into the doc.
  const resetToken = user.createPasswordResetToken();
  console.log({resetToken})
  await user.save();

  try {
    //5) Send reset token via email
    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/users/resetPassword/${resetToken}`;
    await new Email(user, resetURL).sendPasswordReset();

  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save({
      validateBeforeSave: false,
    });

    return next(
      new OperationalErr(
        "There was an error sending the reset password email. Try again later!",
        500,
        "local"
      )
    );
  }

  res.status(200).json({
    status: "success",
    message: "Token sent to email!",
  });
});

exports.resetPassword = withCatchErrAsync(async (req, res, next) => {  
  const {token} = req.params;
  const userService = new UserService();
  const authService = new AuthService();

  const userDoc = await userService.checkMatchedUserToResetPw(token);

  // If token has not expired, and there is a user, set the new password
  // No user, throw error
  if (userDoc === null) {
    return next(
      new OperationalErr(
        "Your token is invalid or has expired, please try again.",
        400,
        "local"
      )
    );
  }

  // Return err if target user is inactive
  if(!userDoc.active) {
    return next(
      new OperationalErr(
        "Invalid Target.",
        400,
        "local"
      )
    );
  }

  // If everything goes fine, prepare data for response
  // and clean up the passwordReset data for user
  const { newPassword, confirmPassword } = req.body;
  userDoc.password = newPassword;
  userDoc.passwordConfirm = confirmPassword;
  userDoc.passwordResetToken = undefined;
  userDoc.passwordResetExpires = undefined;

  await userDoc.save();

  // 3) Update JWT and changedPasswordAt property for the user
  // 4) Log the user in , send JWT to the client
  const {token: jwtToken, cookieOptions} = authService.createSendToken(userDoc);
  res.cookie("jwt", jwtToken, cookieOptions);
  return res.status(200).json({
    status: "success"
  })

});
