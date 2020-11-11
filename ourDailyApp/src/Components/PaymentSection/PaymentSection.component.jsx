import React from "react";
import { useStripe } from '@stripe/react-stripe-js';
import {fetchFromAPI} from "../../utils/stripeApi";
import S from "./PaymentSection.styles";


const PaymentSection = ({ cartItemsQuantity, totalPrice, cartItems }) => {
  const stripe = useStripe();

  const onHandleClick = async (event) => {
    const line_items = cartItems.map(cartItem => {return {name: cartItem.name, 
      amount: cartItem.price * 100, 
      currency: "nzd", quantity: 1, images: ["https://i.ibb.co/pPTQXLB/todolist-Demo.png"]}})
      // const body = { line_items: [product] };
      const body = { line_items };
      const { data: {id: sessionId} } = await fetchFromAPI('stripe/checkouts', body);
      
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });
      if (error) {
      console.log(error);
    } else {
      console.log("payment success")
    }
  };

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
          onClick={onHandleClick}
          disabled={cartItemsQuantity === 0}
        >
          Checkout
        </S.BtnCheckout>
      </S.PaymentContainer>
      <hr />
    </S.PaymentSection>
  );
};

export default PaymentSection;
