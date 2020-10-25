import styled, {css} from "styled-components";

// import TooltipWrapper from "../TooltipWrapper/TooltipWrapper.component";
import ReactToolTip from "react-tooltip";
import { ReactComponent as NavIcon } from "../../assets/nav.svg";

import { rgba } from "polished";
const S = {};

const iconStyles = css`
${({theme, backgroundLuminosity}) => {
  if (backgroundLuminosity === 0)
  {
    return `color: ${theme.cartIcon}; text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);`;
  }
  if(backgroundLuminosity <= 0.4) {
    return `color: white; text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);`;
  } else if (backgroundLuminosity > 0.4) {
    return `color: black; text-shadow: 2px 2px 10px rgba(255, 255, 255, 1);`;
  } 
}}
opacity: 0.8;
font-size: 1.4rem;
cursor: pointer;
transition: all 250ms ease;
&:hover {
  opacity: .5;
}
`;

/* ============================== Header ================================= */

S.HeaderContainer = styled.header`
  height: var(--nav-height);

  width: 100vw;
  background-color: ${(props) => props.theme.header};

  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

S.HeaderNavContainer = styled.nav`
  height: 100%;
  width: calc(100% - 4vw);
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0 2vw;
  // border-bottom: 1px solid white;

  ${({backgroundLuminosity}) => {
    if (backgroundLuminosity === 0)
    {
      return `border-bottom: 1px solid white;`;
    }
    if(backgroundLuminosity <= 0.4) {
      return `border-bottom: 1px solid white;`;
    } else if (backgroundLuminosity > 0.4) {
      return `border-bottom: 1px solid black;`;
    } 
  }}
`;

/* ============================== Logo Wrapper ================================= */
S.LogoWrapper = styled.div`
  width: 3rem;
  cursor: pointer;
`;

/* ============================== Nav List ================================= */

S.NavListContainer = styled.div`
  width: 6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

/* ====================== Cart Icon ====================== */

S.CartIconWrapper = styled.div`
  position: relative;
`;

S.CartIcon = styled.i`
  ${iconStyles}
`;

/* ====================== Cart Icon -- > 1 notification ====================== */

S.CartItemsQuantityContainer = styled.div`
  position: absolute;
  top: -5px;
  right: -12px;
  background: red;

  --size: 20px;
  height: var(--size);
  width: var(--size);
  border-radius: 100%;

  display: grid;
  place-items: center;
`;

S.CartItemsQuantityText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
`;

/* ====================== SVG btn -> Float Nav ====================== */

S.NavIconContainer = styled.div`
  all: unset;
  --size: 40px;
  width: var(--size);
  height: var(--size);

  display: grid;
  place-items: center;

  border-radius: 100%;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: ${rgba("#b2becd", 0.2)};
  }

  &.active {
    background: ${rgba("#b2becd", 0.2)};
  }
`;

S.NavIcon = styled(NavIcon)`
  /* fill: var(--gray1); */
  ${({backgroundLuminosity}) => {
    if (backgroundLuminosity === 0)
    {
      return `fill: white;`;
    }
    if(backgroundLuminosity <= 0.4) {
      return `fill: white;`;
    } else if (backgroundLuminosity > 0.4) {
      return `fill: black;`;
    } 
  }}
`;

S.LogoutBtnContainer = styled.div``;

S.LogoutIcon = styled.i`
${iconStyles}`;

// ============================= ToolTips =========================
S.LanguageToolTip = styled(ReactToolTip)`
  background: var(--gray4) !important;
`;

export default S;
