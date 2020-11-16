const Stripe = require("stripe");
const User = require("../models/user/user.model");

const env = "prod";
const webapp_url = env === "dev" ? `http://localhost:3000` : `https://ourdailyapps.com/`;

stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: '2020-03-02',
});

// ================= Stripe Checkout =================
async function createStripeCheckoutSession(
  line_items,
  user,
) {
  console.log("Dfoidsfhgjofbhgosb")
  const customer = await getOrCreateCustomer(user);
  console.log({customerId: customer.id})
  // const customer_email = user.email;
  const prodIds = line_items.map(item => item.id).join(" ");
  // delete prod id from line_item to fit the required format for stripe
  line_items.forEach(item => delete item.id);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    success_url: `${webapp_url}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${webapp_url}/payment/failed`,
    // customer_email,
    customer: customer.id,
    metadata: {
      //string
      prodIds: prodIds
    }
  });

  console.log({session})

  return session;
}



// ================= Webhooks =================
const webhookHandlers = {
  'checkout.session.completed': async (session) => {
    console.log("checkout session completed");
    console.log("session")
    console.log(session)

    const prodIdArray = session.metadata.prodIds.split(" ");

    // Get the user id from stripe customer id metadata
    const stripeCustomerId = session.customer;
    // const stripeCustomerId = "cus_IN2OYcHWFCPSs5";
    const customer = await stripe.customers.retrieve(
      stripeCustomerId
    );

    const userMongoId = customer.metadata.mongoUID;

    // 1) map the items objs and populate applications user has bought into user doc
    // 2) and Clear the cart items in User Doc
    await User.findByIdAndUpdate(userMongoId, {$push: {ownedApplications: {$each: prodIdArray}}, applicationsInCart: []});
  },
  'checkout.session.async_payment_failed': async (data) => {
    console.log('checkout session failed');
  },
  'checkout.session.async_payment_succeeded': async (data) => {
    console.log('checkout session succeeded');
    console.log("data")
    console.log(data)
  },
  'payment_intent.succeeded': async (data) => {
    // Add your business logic here
    console.log("payment_intent.succeeded");
    console.log("data")
    console.log(data)
  },
  'payment_intent.payment_failed': async (data) => {
    // Add your business logic here
    console.log("payment_intent.payment_failed");
  },
}

/**
 * Validate the stripe webhook secret, then call the handler for the event type
 */
const handleStripeWebhook = async(req, res) => {
  // Make sure the request is sent from stripe
  const sig = req.headers['stripe-signature'];
  const event = stripe.webhooks.constructEvent(req['rawBody'], sig, process.env.STRIPE_WEBHOOK_SECRET);
  const type = event.type;

  try {
    await webhookHandlers[type](event.data.object);
    res.send({received: true});
  } catch (err) {
    console.error(err);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
}

// ================= Customers =================

/**
 * Creates a SetupIntent used to save a credit card for later use
 */
async function createSetupIntent(user) {
  const customer = await getOrCreateCustomer(user);

  return stripe.setupIntents.create({ 
      customer: customer.id,
  })
}

/**
 * Returns all payment sources associated to the user
 */
async function listPaymentMethods(user) {
  const customer = await getOrCreateCustomer(user);

  return stripe.paymentMethods.list({
      customer: customer.id,
      type: 'card',
  });
}

/**
 * Gets the exsiting Stripe customer or creates a new record
 */
async function getOrCreateCustomer(user, params) {
  const {stripeCustomerId, email, id} = user;
  console.log({stripeCustomerId})
  // If missing customerId, create it
  if(!stripeCustomerId) {
    // CREATE new customer in stripe
    // and add metadata(db userId) to customer in stripe
    const customer = await stripe.customers.create({
      email,
      metadata: {
        mongoUID: id
      },
      ...params
    });

    // Grab the stripe customer id and save it into the db user doc
    await User.findByIdAndUpdate(id, {stripeCustomerId: customer.id});
    return customer;
  } else {
    return await stripe.customers.retrieve(stripeCustomerId);
  }
}
module.exports = {
  createStripeCheckoutSession,
  handleStripeWebhook,
  getOrCreateCustomer,
  createSetupIntent,
  listPaymentMethods,
}