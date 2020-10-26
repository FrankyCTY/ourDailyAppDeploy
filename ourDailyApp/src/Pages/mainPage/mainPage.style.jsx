import styled, { keyframes } from "styled-components";

const S = {};

// Animation
const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// ==================== Container ====================

S.MainPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  font-size: clamp(0.8rem, 1.7vw, 1.7rem);

  display: grid;
  grid-template-rows: minmax(1em, 18em) minmax(1em, 1fr);
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (min-width: 680px) {
    grid-template-rows: minmax(1em, 15em) minmax(1em, 1fr);
  }

  grid-template-areas:
    ". imageFrame ."
    "accessAppWrapperBtn accessAppWrapperBtn accessAppWrapperBtn";
`;

// ======================= profile Pic and name ===========================
S.ImageFrameWrapper = styled.div`
  grid-area: imageFrame;

  align-self: flex-end;

  display: grid;
  place-items: center;

  animation: ${appear} 350ms;
  z-index: 2;
`;

S.Username = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);

  ${({theme, backgroundluminosity}) => {
    if (backgroundluminosity === 0)
    {
      return `color: ${theme.mainPage.username};`;
    }
    if(backgroundluminosity <= 0.4) {
      return `color: white; text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);`;
    } else if (backgroundluminosity > 0.4) {
      return `color: black; text-shadow: 2px 2px 10px rgba(255, 255, 255, 1);`;
    } 
  }}
`;

S.AccessAppBtnWrapper = styled.div`
  grid-area: accessAppWrapperBtn;
  width: 100%;

  max-width: 1000px;
  justify-self: center;
  align-self: flex-start;

  margin-top: 3em;
  z-index: 2;

  @media (orientation: landscape) {
    margin-bottom: 2em;
  }
`;

S.CustomizedBg = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
pointer-events: none;
background-size: cover;
background-position: center;
`;

export default S;
