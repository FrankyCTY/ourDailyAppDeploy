import React from "react";
import S from "./PaymentSection.styles";

import StripeCheckoutButton from "../../Components/stripe-button/stripe-button.component";

const PaymentSection = ({ cartItemsQuantity, totalPrice }) => {
  return (
    <S.PaymentSection className="right-side">
      {/* ============== Payment Block ============== */}
      <S.PaymentContainer className="payment-info">
        <S.TotalPriceText className="total-price-text">
          Total:{" "}
          <S.DollarText className="dollar-price-text">
            $<S.PriceText className="price-text">{totalPrice}</S.PriceText>
          </S.DollarText>
        </S.TotalPriceText>
        {/* ============== Checkout btns with Stripe ============= */}
        <S.BtnCheckout
          className={`btn--checkout`}
          onClick={() => {
            const stripeCheckOutBtn = document.querySelector(".StripeCheckout");
            // Triggering click to the stripe button
            if (stripeCheckOutBtn !== null) {
              stripeCheckOutBtn.click();
            }
          }}
          disabled={cartItemsQuantity === 0}
        >
          Checkout
        </S.BtnCheckout>
        <StripeCheckoutButton price={totalPrice} />
      </S.PaymentContainer>
      <hr />
    </S.PaymentSection>
  );
};

export default PaymentSection;
