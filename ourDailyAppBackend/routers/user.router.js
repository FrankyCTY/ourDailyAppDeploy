const express = require("express");
const validate = require("../validators/validate");
const authController = require("../controllers/auth/auth.controller");
const userController = require("../controllers/user/user.controller");
// const multer = require("multer");

const {
  signUpValidation,
  logInValidation,
  resetPasswordValidation,
  changePasswordValidation,
} = require("../validators/user.validator");

const router = express.Router();

// Client Routes
router.get("/", userController.getAllUsers);
router.post("/forgotPassword", authController.forgotPassword);
router.patch(
  "/resetPassword/:token",
  resetPasswordValidation,
  validate,
  authController.resetPassword
);

router.get("/birthdayData", userController.getBirthdayData);
router.post("/signup", signUpValidation, validate, authController.signUp);
router.post("/login", logInValidation, validate, authController.logIn);
router.get("/logout", authController.logOut);
router.post("/googlelogin", authController.googleLogIn);

// @private get s3 bucket image
router.get('/images/:imageId', authController.protect, userController.getS3Image);

// @private
// @body: avatar, name, email, birthday
router.patch(
  "/updateMe",
  authController.protect,
  userController.uploadUserAvatar,
  userController.resizeUserPhoto,
  // Please use updateMe with deleteOldAvatarFromS3
  // updateMe itself will not return any response
  userController.updateMe,
);

router.get("/getUserBg", authController.protect, userController.getUserBg);

router.patch("/updateBg", authController.protect, userController.uploadUserBg, userController.updateUserBg);

// @desc Logged in user change their password
// @access private
router.patch('/changePassword', authController.protect, changePasswordValidation, validate, userController.changePassword);

// @desc User delete his own account
// @access private
router.patch('/deleteMe', authController.protect, userController.deleteMe);

// @Private
router.get("/getAppInCart", authController.protect, userController.getAppInCart);
router.get("/getAppInWishlist", authController.protect, userController.getAppInWishlist);

module.exports = router;
