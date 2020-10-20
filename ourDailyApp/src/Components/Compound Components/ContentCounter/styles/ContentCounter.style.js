import styled from "styled-components";
import { fadeInAnimation } from "../../../../utils/styled/styleKeyframes";

const S = {};

S.Container = styled.div`
  @media screen and (min-width: 1180px) {
    height: auto;
    display: flex;
    justify-content: space-between;
  }
`;

S.TextAndCardWrapper = styled.div`
  @media screen and (min-width: 1180px) {
    flex-basis: 45%;
  }
`;

// ================== Company Wall =================

S.WallContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 600px;

  user-select: none;

  @media screen and (min-width: 515px) {
    width: 568px;
  }
  @media screen and (min-width: 1180px) {
    position: initial;
    transform: none;
  }

  ${({ startAnimate }) => {
    return startAnimate && fadeInAnimation.fadeInStyle;
  }}
`;

S.WallRowOne = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 84px);
  column-gap: 30px;
  justify-content: center;
`;

S.WallRowTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 84px);
  justify-content: center;
  column-gap: 30px;

  width: 80%;
  margin: 0 auto;
`;

S.WallImage = styled.img`
  width: 84px;
  height: 94.2px;
  background: transparent;
`;

S.WallPlaceHolderDiv = styled.div`
  width: 200px;
  height: 330px;

  @media screen and (min-width: 550px) {
    height: 520px;
  }
`;

// ================== Card =================

S.CardContainer = styled.div`
  @media screen and (min-width: 450px) {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  ${({ startAnimate }) => {
    return startAnimate && fadeInAnimation.fadeInStyle;
  }}
`;

S.CardPane = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #5e5e5e;
  padding: 1.5rem 0;
  border-radius: 3px;
  margin: 2rem 0;

  user-select: none;

  transition: all 250ms ease-in;

  transition: background 250ms ease-in-out;

  &:hover {
    background: #849dc5;
  }

  @media screen and (min-width: 450px) {
    max-width: 190px;
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

S.CardIcon = styled.span`
  color: white;
  font-size: 2rem;
  transition: color 250ms ease-in-out;
  ${S.CardPane}:hover & {
    color: gray;
  }
`;

S.CardNumber = styled.span`
  color: #849dc5;
  font-size: 2.5rem;
  font-weight: bold;

  transition: color 250ms ease-in-out;

  ${S.CardPane}:hover & {
    color: white;
  }
`;

S.CardName = styled.span`
  color: rgba(256, 256, 256, 0.6);
  transition: color 250ms ease-in-out;
  ${S.CardPane}:hover & {
    color: white;
  }
`;

export default S;
