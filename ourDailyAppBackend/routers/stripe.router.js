const express = require('express');
const {createStripeCheckoutSession} = require("../helpers/stripe");
const withCatchErrAsync = require("../utils/error/withCatchErrorAsync");
const authController = require("../controllers/auth/auth.controller");

const router = express.Router();

router.route('/checkouts').post(authController.protect, withCatchErrAsync(async (req, res, next) => {
  console.log('i am here')
  const {line_items} = req.body;
  const {email} = req.user;
  // console.log({email})
  console.log({line_items})
    res.send(await createStripeCheckoutSession(line_items, email));
  })
);


module.exports = router;