import styled, { css } from "styled-components";

// import { Link } from "react-router-dom";
import PreloadLink from "../Molecules/Links/PreloadLink/PreloadLink.component";

const S = {};

const textStyles = css`
  color: ${(props) => props.theme.NavigationMenu.NavigationMenuText};
`;

S.NavMenuContainer = styled.div`
  ${textStyles}

  user-select: none;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.NavigationMenu.NavigationMenuBg};

  z-index: 8;
  display: flex;
  flex-direction: column;

  align-content: center;

  justify-content: center;

  opacity: 0;

  clip-path: circle(20px at 100% -20%);

  transition: all 1s ease-in-out, opacity 100ms 1s;

  &.active {
    clip-path: circle(160% at 100% -10%);
    transition: all 1s ease-in-out, opacity 100ms;
    opacity: 1;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;

    justify-content: space-evenly;
    align-items: center;
  }
`;

// ==================== Nav left side =====================
S.NavigationList = styled.ul`
  text-align: center;
`;

S.NavigationItems = styled.li`
  padding: 1rem 0;
  margin: 0;
  font-size: clamp(2rem, 3.5vw, 3.5rem);
  display: block;

  &:nth-child(3) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 600px) {
    padding: 2rem 0;
  }
`;

S.NavLink = styled(PreloadLink)`
  ${textStyles}
  &:hover {
    color: ${(props) => props.theme.NavigationMenu.NavigationMenuText_Hover};
  }
`;

export default S;
