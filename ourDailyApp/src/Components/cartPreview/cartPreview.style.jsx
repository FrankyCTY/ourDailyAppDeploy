import styled, { css } from "styled-components";
import { rgba } from "polished";

const S = {};

//for MoreItemText and TotalItemText
const textStyles = css`
  font-weight: 700;
  margin: 0 auto;
`;

const btnStyles = css`
  all: unset;
  border-radius: 15px;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  backface-visibility: hidden;

  transition: all 250ms;
  &:hover {
    transform: scale(1.04);
  }
`;

S.CartPreviewContainer = styled.div`
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 0);

  pointer-events: none;
  opacity: 0;
  transition: opacity 300ms;
  z-index: 3;
  @media (max-height: 710px) and (orientation: landscape) {
    z-index: 20;
  }

  border-radius: 10px;
  height: 28em;
  width: 20em;

  font-size: clamp(0.8rem, 1vw, 1rem);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  padding: 0 1em 1em;

  background: ${rgba("#12181b", 0.9)};
  color: white;

  &.active {
    opacity: 1;
    pointer-events: initial;
  }

  @media screen and (min-width: 450px) {
    top: 10%;
    right: 2%;
    left: initial;
    opacity: 1;
    transform: translateX(450px);
    transition: transform 300ms;
    &.active {
      transform: translateX(0);
    }
  }
`;

//   ======================= empt cart text =======================
S.EmptyCartText = styled.h1`
  font-size: clamp(1rem, 2vw, 1.6rem);
  align-self: center;
  margin: auto 0;

  & ~ .btn--closePreview {
    flex-basis: initial;
  }
`;

//   ======================= Cart Items Part =======================
S.CartItemsWrapper = styled.div`
  height: 80%;
  width: 100%;
`;

S.CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  padding: 1em 0;
`;

//   ======================= Cart Item Left  =======================

S.LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

S.ImageWrapper = styled.image`
  width: 50px;
  height: 50px;
  margin-right: 0.5em;
`;

S.CartItemImage = styled.img`
  border-radius: 100%;
`;

S.ItemNameText = styled.span`
  font-weight: 700;
`;

//   ======================= Cart Item Right  =======================
S.IconRemoveItem = styled.i`
  font-size: 0.8rem;
  margin-left: 1em;
  cursor: pointer;
  padding: 0.4em;
  &:hover {
    background: var(--red);
    border-radius: 100%;
  }
`;

//   ======================= More and Total items Text  =======================
// This will be rendered base on the quantity of the cart items
S.MoreItemsText = styled.span`
  ${textStyles}
`;

S.TitleItemsText = styled.span`
  ${textStyles}
`;

//   ======================= Total Price Text  =======================
S.TotalPriceText = styled.span`
  font-weight: 700;
  font-size: clamp(1.3rem, 1.5vw, 1.5rem);
  margin: 0.5em 0;
`;

// ======================= Buttons on bottom  =======================
S.ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

S.BtnToCart = styled.button`
  ${btnStyles}
  background: var(--blue-light);
  color: white;

  flex-basis: 65%;
`;

S.BtnClosePreview = styled.button`
  ${btnStyles}

  border: 1px solid white;
  flex-basis: 30%;
`;

export default S;
