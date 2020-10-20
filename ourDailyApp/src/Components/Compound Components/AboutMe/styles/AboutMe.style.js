import styled from "styled-components";
import { fadeInAnimation } from "../../../../utils/styled/styleKeyframes";

const S = {};

S.Background = styled.section`
  background: #848484;
`;

S.Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  z-index: 2;

  @media screen and (min-width: 730px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

S.CardContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 5px 15px 0px rgba(256, 256, 256, 0.2);
  position: relative;

  max-width: 320px;

  margin-bottom: 3rem;
  align-self: center;
  align-items: flex-start;

  @media screen and (min-width: 730px) {
    max-width: 332px;
  }

  @media screen and (min-width: 1300px) {
    width: 50%;
    max-width: 400px;
  }

  ${({ startAnimate }) => {
    return startAnimate && fadeInAnimation.fadeInStyle;
  }}
`;

S.TopPart = styled.div`
  height: 150px;
  width: 100%;
  position: relative;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: url("/images/assets/thePigGame/back.jpg");
  background-position: bottom;
  background-size: cover;

  img {
    position: absolute;
    top: 100%;
    left: 10%;
    transform: translate(0, -60%);
    --size: 7rem;
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    border: 3px solid white;
    box-shadow: 0 0 10px rgba(255, 255, 255, 1),
      0 2px 10px -5px rgba(0, 0, 0, 1);
    z-index: 2;
  }
`;

S.CardName = styled.h1`
  margin-bottom: 0.6rem;
  font-size: 1.1rem;
  transform: translateX(7.5rem);
  display: inline-block;
  color: #848484;

  @media screen and (min-width: 1300px) {
    margin-top: 3rem;
  }
`;

S.BottomPart = styled.div`
  height: 180px;
  width: 100%;
  border-radius: 0 0 5px 5px;
  background: #f8f8f8;

  padding: 1rem 1rem;
  position: relative;

  @media screen and (min-width: 1300px) {
    height: 280px;
  }
`;

S.CardText = styled.p`
  text-align: center;
  color: #848484;
  transform: translateY(80%);
`;

S.SocialMediaWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
`;

S.SocialMediaBtn = styled.a`
  --size: 2.5rem;
  width: var(--size);
  height: var(--size);
  background: white;
  border-radius: 100%;
  display: grid;
  place-items: center;

  box-shadow: -3px -3px 2px 0px rgba(256, 256, 256, 1),
    inset -4px -4px 2px 0px rgba(256, 256, 256, 0.8),
    1px 1px 2px 0px rgba(256, 256, 256, 0.5),
    1px 1px 5px -2px rgba(0, 0, 0, 0.4);
  background: #f8f8f8;

  cursor: pointer;

  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: -4px -4px 3px 0 rgba(256, 256, 256, 0.5),
      inset 2px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 1px 5px 0 rgba(0, 0, 0, 0.2);

    span {
      transform: scale(0.96);
    }
  }

  &:last-of-type {
    margin-left: 2rem;
  }

  span {
    color: black;
    font-size: 1.2rem;
    transition: all 200ms ease-in-out;
    transform: scale(1);
  }
`;

S.TextWrapper = styled.div`
  @media screen and (min-width: 730px) {
    flex-basis: 50%;
    align-self: center;
    width: 100%;
  }
`;

S.Text = styled.p`
  color: rgba(256, 256, 256, 0.5);
  font-size: 0.9rem;
  line-height: 1.5em;
  color: #e5e5e5;

  @media screen and (min-width: 730px) {
    font-size: 1rem;
  }

  ${({ startAnimate }) => {
    return startAnimate && fadeInAnimation.fadeInStyle;
  }}
`;

S.WorkingManImg = styled.img`
  position: absolute;
  width: 60px;
  height: 150px;
  object-fit: cover;
  top: 0;
  left: 50%;
  transform: translate(-50%, -60%);

  @media screen and (min-width: 1300px) {
    width: 90px;
    height: 220px;
  }
`;

export default S;
