import styled, { css } from "styled-components";

const S = {};

const face = css`
  font-size: clamp(0.7rem, 1.4vw, 1.4rem);
  background-color: white;
  height: 10em;
  width: 10em;
  border: 7px solid ${(props) => props.theme.pigGamePage.preloader_bg};
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  & > div {
    font-size: clamp(0.7rem, 1.4vw, 1.4rem);
    background-color: ${(props) => props.theme.pigGamePage.preloader_bg};
    height: 1em;
    width: 1em;
    position: absolute;
    border-radius: 50%;
  }
`;

S.Container = styled.div`
  min-height: calc(100vh - var(--nav-height));
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  background: ${(props) => props.theme.pigGamePage.preloader_bg};
`;

S.Dice = styled.div`
  font-size: clamp(0.7rem, 1.4vw, 1.4rem);
  height: 10em;
  width: 10em;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 3s infinite;

  @keyframes rotate {
    100% {
      transform: rotateY(360deg);
    }
  }
`;

S.Face_front = styled.div`
  ${face}
  font-size: clamp(0.7rem, 1.4vw, 1.4rem);
  transform: translateZ(5em);

  & > div {
    top: 45%;
    left: 45%;
  }
`;
S.Face_left = styled.div`
  ${face}
  font-size: clamp(0.7rem, 1.4vw, 1.4rem);
  transform: rotateY(270deg) translateX(-5em);
  transform-origin: center left;

  & > div:nth-child(1) {
    top: 10%;
    left: 10%;
  }
  & > div:nth-child(2) {
    top: 45%;
    left: 45%;
  }
  & > div:nth-child(3) {
    bottom: 10%;
    right: 10%;
  }
`;
S.Face_right = styled.div`
  ${face}
  font-size: clamp(0.7rem, 1.4vw, 1.4rem);
  transform: rotateY(-270deg) translateX(5em);
  transform-origin: top right;
  & > div:nth-child(1) {
    top: 10%;
    left: 10%;
  }
  & > div:nth-child(2) {
    top: 45%;
    left: 45%;
  }
  & > div:nth-child(3) {
    top: 10%;
    right: 10%;
  }
  & > div:nth-child(4) {
    bottom: 10%;
    left: 10%;
  }
  & > div:nth-child(5) {
    bottom: 10%;
    right: 10%;
  }
`;
S.Face_back = styled.div`
  ${face}
  font-size: clamp(0.7rem, 1.4vw, 1.4rem);
  transform: translateZ(-5em) rotateY(180deg);

  & > div:nth-child(1) {
    top: 10%;
    left: 10%;
  }

  & > div:nth-child(2) {
    bottom: 10%;
    right: 10%;
  }
`;

export default S;
