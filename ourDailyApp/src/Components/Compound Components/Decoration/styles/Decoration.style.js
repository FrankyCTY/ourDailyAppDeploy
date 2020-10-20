import styled from "styled-components";
const S = {};

S.Container = styled.div``;

S.DividerDivSkew = styled.div`
  height: 5rem;
  background: ${({ direction, firstColor, secodColor }) =>
    `linear-gradient(${direction}, ${firstColor} 49%, ${secodColor} 50%)`};
`;

S.EditorialDividerSvg = styled.svg`
  display: block;
  width: 100%;
  max-height: 40px;
  margin: 0;
  z-index: 5;
  bottom: 0;
  position: absolute;
  left: 0px;
  float: left;

  @media screen and (min-width: 500px) {
    max-height: 60px;
  }

  @media screen and (min-width: 800px) {
    max-height: 80px;
  }

  .parallax1 > use {
    animation: move-forever1 10s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
  }
  .parallax2 > use {
    animation: move-forever2 8s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
  }
  .parallax3 > use {
    animation: move-forever3 6s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
  }
  .parallax4 > use {
    animation: move-forever4 4s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
  }
  @keyframes move-forever1 {
    0% {
      transform: translate(85px, 0%);
    }
    100% {
      transform: translate(-90px, 0%);
    }
  }
  @keyframes move-forever2 {
    0% {
      transform: translate(-90px, 0%);
    }
    100% {
      transform: translate(85px, 0%);
    }
  }
  @keyframes move-forever3 {
    0% {
      transform: translate(85px, 0%);
    }
    100% {
      transform: translate(-90px, 0%);
    }
  }
  @keyframes move-forever4 {
    0% {
      transform: translate(-90px, 0%);
    }
    100% {
      transform: translate(85px, 0%);
    }
  }
`;

export default S;
