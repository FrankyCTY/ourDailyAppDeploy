const Stripe = require("stripe");

const webapp_url = process.env.NODE_ENV === "development" ? `http://localhost:3000` : `http://ourdailyapps.com/`;

stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: '2020-03-02',
});

// ================= Stripe Checkout =================
async function createStripeCheckoutSession(
  line_items,
  customer_email,
) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    success_url: `${webapp_url}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${webapp_url}/payment/failed`,
    customer_email,
  });

  return session;
}

module.exports = {
  createStripeCheckoutSession
}