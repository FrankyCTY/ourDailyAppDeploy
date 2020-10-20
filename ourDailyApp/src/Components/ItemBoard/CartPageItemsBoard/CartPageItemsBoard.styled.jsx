import styled, { css } from "styled-components";

const S = {};

const CartAndWishlistWrapperStyles = css`
  border: ${(props) => props.theme.cartPage.cartWishlistBorder};
  margin-top: 1em;
  margin-bottom: 1em;
  color: ${(props) => props.theme.cartPage.text};
`;

// ============================ Left side ============================
S.CartPageItemsBoard = styled.div`
  @media screen and (min-width: 800px) {
    width: 70%;
    margin-right: 2em;
  }
`;
/* ============= Cart Items ============= */
S.NumOfAppInCartSpan = styled.span`
  font-size: 1.1rem;
  color: ${(props) => props.theme.cartPage.text};
`;

S.CartItemBlockWrapper = styled.div`
  ${CartAndWishlistWrapperStyles}
`;

S.EmptyCartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 0 1em;
`;

S.IconCart = styled.i`
  font-size: 6rem;
`;

/* ============= WishList ============= */
S.WishlistWrapper = styled.div`
  ${CartAndWishlistWrapperStyles}
`;

S.EmptyWishlistText = styled.p`
  margin-top: 1em;
  font-size: 0.9rem;
  color: ${(props) => props.theme.cartPage.text};
`;

S.RecentlyWishlistedText = styled.span`
  font-size: 1.1rem;
  color: ${(props) => props.theme.cartPage.text};
`;

export default S;
