import React from "react";
import "./stripe-button.style.scss";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = `pk_test_51H0werGFSNHgdavm3WCB176eqacPDJm12M2XNjxpMKVjqTvPCJDCXOMZ0mLDgwcp9NMafHSTtas4QZpTaCvW5wzF00OrRn9Ke3`;

  const onToken = (token) => {
    console.log(token);
    alert(`Payment Successful`);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Franky Venus Ltd"
      billingAddress
      shippingAddress
      image="/images/assets/logo.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      currency="NZD"
      alipay
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
