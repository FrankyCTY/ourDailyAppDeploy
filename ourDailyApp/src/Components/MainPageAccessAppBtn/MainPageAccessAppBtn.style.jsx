import styled, { keyframes } from "styled-components";
import {rgba} from "polished";

const S = {};

// Animation
const appear = keyframes`
0% {
  transform: scale(.8);
  opacity: 0;
}
100% {
  transform: scale(1);
  opacity: 1;
}
`;

// ==================== Container ====================

S.ApplicationItemContainer = styled.div`
  cursor: pointer;

  display: grid;
  place-items: center;

  font-size: 0.8em;
  font-weight: 700;

  height: 100%;
  width: 100%;

  animation: 600ms ${appear} backwards ${(props) => props.stagger}s;
  -webkit-perspective: 1000;
  -webkit-backface-visibility: hidden;
`;

S.Image = styled.img`
  --img-size: 5em;

  border-radius: 100%;
  object-fit: cover;
  height: var(--img-size);
  width: var(--img-size);

  &:hover {
    border: 1px solid white;
    box-shadow: ${({theme}) => `0 0 10px ${rgba(theme.general_text, 1)}`};


  }
`;

S.AppLinkText = styled.span`
  text-overflow: ellipsis;

  color: ${({theme}) => theme.general_text};
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);

  text-decoration: none;
`;

export default S;
