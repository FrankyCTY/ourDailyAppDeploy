import { keyframes, css } from "styled-components";

export const fadeInAnimation = {};

fadeInAnimation.fadeIn = (fadeinfrom, fadedistance) => {
  return keyframes`
    from {
      opacity: 0;
      transform: translate${fadeinfrom}(${fadedistance}px);
    }
  
    to {
      opacity: 1;
    }
  `;
};

fadeInAnimation.fadeInStyle = css`
  animation: ${({ fadeinfrom, fadedistance }) =>
      fadeInAnimation.fadeIn(fadeinfrom, fadedistance)}
    1.6s ease-in-out ${({ delay }) => (delay ? `${delay}ms` : "")} forwards;
`;
