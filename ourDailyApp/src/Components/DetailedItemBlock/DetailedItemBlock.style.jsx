import styled, { css } from "styled-components";

const S = {};

const textStyles = css`
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => props.theme.cartPage.cartItemTitleCreatorText};
`;

const btnStyles = css`
  border: 0;
  background: 0;
  cursor: pointer;
  color: ${(props) => props.theme.cartPage.cartItemBtns};
  font-size: 0.8rem;
  margin-right: 1rem;

  &:hover {
    color: ${(props) => props.theme.cartPage.cartItemBtns_Hover};
  }
`;

S.CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 70px 1fr 1fr;
  grid-template-areas:
    "img info"
    "img price"
    "btns btns";

  column-gap: 1rem;

  padding: 0.5rem;
`;

// ============== cartItems img ==============
S.ImgWrapper = styled.div`
  grid-area: img;
  cursor: pointer;
`;

// ============== cartItems info ==============
S.TitleText = styled.span`
  ${textStyles}
  grid-area: info;
`;

S.CreatorText = styled.span`
  ${textStyles}
  grid-area: info;
  font-size: 0.8rem;
  display: block;
`;

S.PriceText = styled.span`
  grid-area: price;
  color: ${(props) => props.theme.cartPage.cartItemPriceText};
`;

/* ============= Items - btns ============= */
S.ButtonsWrapper = styled.div`
  grid-area: btns;
`;

S.BtnRemove = styled.button`
  ${btnStyles}
`;
S.BtnToWishList = styled.button`
  ${btnStyles}
`;
S.BtnToCartList = styled.button`
  ${btnStyles}
`;

export default S;
