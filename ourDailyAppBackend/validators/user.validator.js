const { body } = require("express-validator");
const User = require("../models/user/user.model");

exports.signUpValidation = [
  body("name")
    .trim()
    .isLength({
      min: 2,
      max: 20,
    })
    .withMessage("name{SEPERATE}Name must between 2 to 20 chars long"),
  body("email")
    .isEmail()
    .withMessage("email{SEPERATE}Please provide an email.")
    .bail()
    .custom((value) => {
      console.log("custom email validator being ran");
      return User.find({
        email: value,
      }).then((user) => {
        if (user.length !== 0) {
          return Promise.reject("email{SEPERATE}E-mail already in use");
        }
      });
    }),
  body("password")
    .isLength({
      min: 8,
    })
    .withMessage("password{SEPERATE}Password must be at least 8 chars long"),
  body("passwordConfirm").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error(
        "password{SEPERATE}Password confimation does not match password"
      );
    }
    return true;
  }),
  body("gender")
    .isIn(["Male", "Female"])
    .withMessage(`gender{SEPERATE}Gender must be "Male" or "Female" only`),
  body("birthday")
    .not()
    .isEmpty()
    .withMessage("birthday{SEPERATE}Please provide your birthday"),
];

exports.logInValidation = [
  body("email")
    .isEmail()
    .withMessage("email{SEPERATE}Please provide an email."),
  body("password")
    .isLength({
      min: 8,
    })
    .withMessage("form{SEPERATE}Incorrect email or password."),
];

exports.resetPasswordValidation = [
  body("newPassword")
    .isLength({
      min: 8,
    })
    .withMessage("password{SEPERATE}Password must be at least 8 chars long"),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.newPassword) {
      throw new Error(
        "password{SEPERATE}Password confimation does not match password"
      );
    }
    return true;
  }),
];

exports.changePasswordValidation = [
  body("password").not().isEmpty().withMessage("password{SEPERATE}Password must be provided."),
  body("newPassword").not().isEmpty().withMessage("newPassword{SEPERATE}New password must be provided.").isLength({
    min: 8,
  }).withMessage("newPassword{SEPERATE}New Password must be at least 8 chars long")
  .custom((value, {req}) => {
    // new password must match confirm new password
    if(value !== req.body.confirmNewPassword) {
      throw new Error (
        "newPassword{SEPERATE}New password confimation does not match confirm password."
      );
    }
    // user's new password is same as password
    if (value === req.body.password) {
      throw new Error (
        "newPassword{SEPERATE}You are updating with the current password."
      );
    }
    return true;
  }),
  body("confirmNewPassword").not().isEmpty().withMessage("confirmNewPassword{SEPERATE} Confirm New Password must be provided.").isLength({
    min:8
  })
]
