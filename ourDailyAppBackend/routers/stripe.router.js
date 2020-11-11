const express = require('express');
const {createStripeCheckoutSession, handleStripeWebhook, createSetupIntent, listPaymentMethods} = require("../helpers/stripe");
const withCatchErrAsync = require("../utils/error/withCatchErrorAsync");
const authController = require("../controllers/auth/auth.controller");

const router = express.Router();

// ================= Handle checkouts =================
router.route('/checkouts').post(authController.protect, withCatchErrAsync(async (req, res, next) => {
  console.log('i am here')
  const {line_items} = req.body;
  const user = req.user;
  console.log({line_items})
    res.send(await createStripeCheckoutSession(line_items, user));
  })
);

// ================= Handle webhooks =================
router.post('/hooks',  withCatchErrAsync(handleStripeWebhook));

// ================= Handle Customers =================

// Save a card on the customer record with a SetupIntent
router.post(
  '/wallet',
  authController.protect, 
  withCatchErrAsync(async (req, res) => {
    const user = req.user;
    const setupIntent = await createSetupIntent(user);
    res.send(setupIntent);
  })
);

// Retrieve all cards attached to a customer
router.get(
  '/wallet',
  authController.protect, 
  withCatchErrAsync(async (req, res) => {
    const user = req.user;

    const wallet = await listPaymentMethods(user);
    res.send(wallet.data);
  })
);


module.exports = router;