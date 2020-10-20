import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import { fadeInAnimation } from "../../../../utils/styled/styleKeyframes";

const scaleOut = keyframes`
    from {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    to {
        opacity: 0;
        transform: translate(-50%, -50%) scale(6);
    }
`;

const S = {};

S.Background = styled.div`
  background: linear-gradient(90deg, #6ca0fc 0%, rgba(117, 38, 215, 1) 100%);
`;

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;

  @media screen and (min-width: 990px) {
    justify-content: space-between;
    flex-direction: row;
    padding: 0;
  }
`;

S.PreviewVideoFrame = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 2rem;

  @media screen and (min-width: 990px) {
    max-width: 520px;
    transform: translateY(152px);
  }

  @media screen and (min-width: 1080px) {
    max-width: 600px;
    transform: translateY(152px);
  }
`;

S.Video = styled.video``;

S.PreviewVideoImg = styled.img`
  border-radius: 6px;
`;

S.AnimateCircle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  display: block;
  --size: 2rem;
  width: var(--size);
  height: var(--size);
  background: white;
  border-radius: 100%;

  animation: ${scaleOut} 3s infinite ${({ delay }) => delay}ms;
`;

S.TextAndBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 589px) {
    align-items: flex-start;
  }

  @media screen and (min-width: 990px) {
    flex-basis: 40%;
    align-self: center;
  }
`;

S.Title = styled.h1`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.3em;
  margin-bottom: 2rem;

  @media screen and (min-width: 589px) {
    text-align: left;
    font-size: 2.2rem;
  }
  @media screen and (min-width: 820px) {
    text-align: left;
    font-size: 2.5rem;
  }

  ${({ startAnimate }) => {
    return startAnimate && fadeInAnimation.fadeInStyle;
  }}
`;

S.SignUpBtn = styled(Link)`
  border: 0;
  outline: 0;
  padding: 1.4rem 2.8rem;
  background: linear-gradient(
    90deg,
    rgba(117, 38, 215, 1) 0%,
    rgba(242, 105, 253, 1) 45%,
    rgba(242, 105, 256, 1) 50%,
    rgba(117, 38, 215, 1) 100%
  );
  background-size: 200%;
  background-position: left;
  color: white;
  font-size: 1rem;
  border-radius: 40px;
  font-weight: 700;
  cursor: pointer;

  transition: all 800ms ease-in-out;

  &:hover {
    background-position: right;
    color: white;
  }

  ${({ startAnimate }) => {
    return startAnimate && fadeInAnimation.fadeInStyle;
  }}
`;

export default S;
