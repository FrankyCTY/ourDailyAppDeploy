import styled from "styled-components";
import { fadeInAnimation } from "../../../../utils/styled/styleKeyframes";

const S = {};

S.Container = styled.section`
  padding: 106px 25px 90px;
`;

S.Frame = styled.div`
  margin-bottom: 40px;
  max-width: 1200px;
  ${({ startAnimate }) => {
    return startAnimate && fadeInAnimation.fadeInStyle;
  }}
`;

S.Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

S.Item = styled.div`
  color: white;
  margin-bottom: 10px;
  padding: 0.5rem;
  background: #849dc5;

  &:first-of-type {
    margin-top: 3em;
  }
`;

S.Title = styled.h1`
  font-size: 2rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }

  ${({ startAnimate }) => {
    return startAnimate && fadeInAnimation.fadeInStyle;
  }}
`;

S.Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 26px;
  font-weight: normal;
  background: #849dc5;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 1.2rem;
    }
  }

  @media (min-width: 600px) {
    font-size: 1.4rem;
  }
`;

S.Body = styled.div`
  max-height: 0px;
  overflow: hidden;

  transition: max-height 350ms ease-in-out;
  font-size: 0.9rem;
  font-weight: normal;
  line-height: 1.7em;
  // background: #848484;
  user-select: none;
  align-items: center;
  margin: 0 auto;

  color: #f6f6f6;

  position: relative;

  box-sizing: border-box;

  p {
    padding: 0.6em 1em 0.6em 1em;
  }

  &:before {
    content: "";
    position: absolute;
    width: 0.6rem;
    height: 100%;

    top: 50%;
    left: 0;

    transform: translateY(-50%);
    background-color: #8fc460;
  }

  @media (min-width: 600px) {
    font-size: 1.1rem;
  }

  &.active {
    max-height: 300px;
  }
`;

S.BodyWrapper = styled.div`
  max-width: 1200px;
  background: #849dc5;
`;

S.Image = styled.img`
  ${({ startAnimate }) => {
    return startAnimate && fadeInAnimation.fadeInStyle;
  }}
`;

export default S;
