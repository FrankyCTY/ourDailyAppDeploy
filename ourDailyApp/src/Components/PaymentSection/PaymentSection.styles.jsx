import styled from "styled-components";

const S = {};

S.PaymentSection = styled.div`
  order: -1;
  @media screen and (min-width: 800px) {
    order: initial;
    width: 30%;
  }
`;

// ============== Payment Info ==============
S.PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.cartPage.text};
`;

S.TotalPriceText = styled.span`
  margin-bottom: 1em;
`;

S.DollarText = styled.span`
  font-size: 2rem;
  font-weight: 700;
  @media screen and (min-width: 800px) {
    display: block;
  }
`;

S.PriceText = styled.span`
  padding-left: 0.1em;
`;

/* ============== Checkout btns with Stripe ============= */
S.BtnCheckout = styled.button`
  border: 0;
  text-align: center;
  background: var(--blue-light);

  color: white;
  font-weight: 700;
  padding: 0.7em 0;
  cursor: pointer;
  margin-bottom: 0.5em;

  &:hover {
    background: var(--blue-dark);
  }

  &:disabled {
    background: var(--gray2);
  }

  & ~ .StripeCheckout {
    display: none !important;
  }
`;

export default S;
