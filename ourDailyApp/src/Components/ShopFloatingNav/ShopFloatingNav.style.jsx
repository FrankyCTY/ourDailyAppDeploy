import styled, { css } from "styled-components";

const S = {};

const optionStyles = css`
  position: absolute;
  padding: 0.5em 2em;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 20px;

  transition: all 250ms;

  &:hover {
    color: var(--gray2);
  }
`;

S.ShopNavWrapper = styled.div`
  position: fixed;

  bottom: 10%;
  right: 12vw;
  z-index: 5;

  @media screen and (min-width: 850px) {
    right: 3vw;
  }
`;

// ====================== Shop Nav Toggler ======================

S.ToggleContainer = styled.div`
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  --size: 50px;
  width: var(--size);
  height: var(--size);
  display: grid;
  place-items: center;
  border-radius: 100%;

  background-color: ${(props) => props.theme.shopNav.toggler_bg};
  cursor: pointer;

  transition: all 250ms;

  &:hover {
    background: ${(props) => props.theme.shopNav.toggler_bg_hover};
  }
`;

S.IconShop = styled.i`
  color: white;
  font-size: 1.2rem;
`;

// ====================== In Opened Shop Nav ======================
S.MenuContainer = styled.div`
  position: absolute;
  display: grid;
  place-content: center;
  top: 0;
  left: 0;

  --size: 500px;
  width: var(--size);
  height: var(--size);
  background: rgba($color: #000000, $alpha: 0);
  overflow: hidden;
  pointer-events: none;

  transform: translate(-50%, -50%);
`;

S.MenuWrapper = styled.div`
  --size: 100px;
  width: var(--size);
  height: var(--size);
  border-radius: 100%;
  box-shadow: 0px 0px 0 200px ${(props) => props.theme.shopNav.menuWrapper_bg};
  transform: scale(0.05);
  position: relative;
  pointer-events: initial;
  opacity: 0;

  color: white;

  transition: transform 300ms cubic-bezier(0.42, 0, 0.58, 1),
    opacity 300ms cubic-bezier(0.42, 0, 0.58, 1);

  &.active {
    transform: scale(1);
    opacity: 1;
  }
`;

S.OptionCart = styled.div`
  ${optionStyles}
  left: -170%;
  bottom: 20%;
`;

S.Icon = styled.i`
  font-size: 2rem;
`;

S.CartItemsQuantityText = styled.span`
  font-size: 0.8rem;
  position: absolute;
  top: 22px;
  left: 47px;
`;

S.OptionCheckout = styled.div`
  ${optionStyles}
  left: -130%;
  bottom: 130%;
`;

S.Text = styled.span`
  display: inline;
  margin: 0;
  margin-left: 1.2rem;
  font-size: 1.2rem;
  font-weight: 700;
`;

export default S;
