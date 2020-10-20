import styled from "styled-components";

const S = {};

S.Pixels = styled.div`
  height: ${(props) => props.size}em;
  width: ${(props) => props.size}em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  * {
    box-sizing: border-box;
  }
  .pixel-spinner-inner {
    width: ${(props) => props.pixelSize}em;
    height: ${(props) => props.pixelSize}em;
    background-color: ${(props) => props.color};
    color: ${(props) => props.color};
    box-shadow: ${(props) => props.pixelSize * 1.5}em
        ${(props) => props.pixelSize * 1.5}em 0 0,
      ${(props) => props.pixelSize * -1.5}em
        ${(props) => props.pixelSize * -1.5}em 0 0,
      ${(props) => props.pixelSize * 1.5}em
        ${(props) => props.pixelSize * -1.5}em 0 0,
      ${(props) => props.pixelSize * -1.5}em
        ${(props) => props.pixelSize * 1.5}em 0 0,
      0 ${(props) => props.pixelSize * 1.5}em 0 0,
      ${(props) => props.pixelSize * 1.5}em 0 0 0,
      ${(props) => props.pixelSize * -1.5}em 0 0 0,
      0 ${(props) => props.pixelSize * -1.5}em 0 0;
    animation: pixel-spinner-animation ${(props) => props.animationDuration}ms
      linear infinite;
  }
  @keyframes pixel-spinner-animation {
    50% {
      box-shadow: ${(props) => props.pixelSize * 2}em
          ${(props) => props.pixelSize * 2}em 0 0,
        ${(props) => props.pixelSize * -2}em
          ${(props) => props.pixelSize * -2}em 0 0,
        ${(props) => props.pixelSize * 2}em ${(props) => props.pixelSize * -2}em
          0 0,
        ${(props) => props.pixelSize * -2}em ${(props) => props.pixelSize * 2}em
          0 0,
        0 ${(props) => props.pixelSize}em 0 0,
        ${(props) => props.pixelSize}em 0 0 0,
        ${(props) => props.pixelSize * -1}em 0 0 0,
        0 ${(props) => props.pixelSize * -1}em 0 0;
    }
    75% {
      box-shadow: ${(props) => props.pixelSize * 2}em
          ${(props) => props.pixelSize * 2}em 0 0,
        ${(props) => props.pixelSize * -2}em
          ${(props) => props.pixelSize * -2}em 0 0,
        ${(props) => props.pixelSize * 2}em ${(props) => props.pixelSize * -2}em
          0 0,
        ${(props) => props.pixelSize * -2}em ${(props) => props.pixelSize * 2}em
          0 0,
        0 ${(props) => props.pixelSize}em 0 0,
        ${(props) => props.pixelSize}em 0 0 0,
        ${(props) => props.pixelSize * -1}em 0 0 0,
        0 ${(props) => props.pixelSize * -1}em 0 0;
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default S;
