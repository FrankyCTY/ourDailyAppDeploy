import styled, {keyframes} from "styled-components";

const defaultFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const S = {};

S.ContextMenuContainer = styled.div`
  width: 200px;
  position: absolute;
  left: ${({xpos}) => xpos};
  top: ${({ypos}) => ypos};
  background: ${({theme}) => theme.body};
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.2);
  z-index: 200;
  padding: .4rem 0;
  animation: ${defaultFadeIn} 150ms ease-in;
`;

S.ContextMenuOptions = styled.div`
  padding: .4rem .8em;
  font-size: 0.7rem;
  transition: 50ms background ease-in-out;
  cursor: context-menu;
  &:hover {
    background: ${({theme}) => theme.secondary_bg};
  }
  color: ${({theme}) => theme.general_text};
`;

export default S;