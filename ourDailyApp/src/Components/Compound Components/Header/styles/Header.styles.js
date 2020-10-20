import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const buttonStyle = css`
  color: white;
  border-radius: 50px;
  background: 0;
  outline: 0;
  border: 2px solid white;
  font-weight: bold;
  cursor: pointer;

  transition: all 250ms ease-in;

  &:hover {
    color: white;
    background: #5678af;
    border: 2px solid #5678af;
  }
`;

const groupStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const S = {};

S.Background = styled.section`
  background: black;
  background: url(${({ src }) =>
      src ? `${src}` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;
`;
S.Frame = styled.div`
  padding-bottom: 300px;
  max-height: 750px;

  @media screen and (min-width: 320px) {
    max-height: 650px;
  }

  @media screen and (min-width: 851px) {
    max-height: 898px;
  }
`;
S.Group = styled.div`
  ${groupStyle}
`;

S.Hero = styled.div`
  ${groupStyle}
  font-size: clamp(0.5rem, 1vw, 1rem);
  padding: 6em 25px 15px;
`;

S.HeroTextWrapper = styled.div`
  flex-basis: 100%;
  align-self: center;

  @media screen and (min-width: 550px) {
    padding: 0 15%;
  }

  @media screen and (min-width: 650px) {
    flex-basis: 65%;
    padding: 0;
  }
  @media screen and (min-width: 851px) {
    align-self: center;
    padding: 0;
    flex-basis: 48%;
  }
`;

S.Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
S.ToSectionSpan = styled.span`
  text-transform: capitalize;
  color: #f8f8f8;
  font-size: 1rem;
  margin-left: 5em;
  white-space: nowrap;
  cursor: pointer;
`;
S.LinkButton = styled(Link)`
  ${buttonStyle}
  padding: 0.5em 2em;
  margin-left: 2em;
  font-size: 0.9rem;
`;

S.HeroButton = styled(Link)`
  ${buttonStyle}
  padding: 1em 2.2em;
  letter-spacing: 1px;
  font-size: 1rem;
`;

S.HeroImage = styled.img`
  object-fit: cover;

  position: absolute;
  bottom: -22em;

  animation: imgInit 2s ease-in-out;

  @media screen and (min-width: 650px) {
    opacity: 0.2;
    right: 0;
    width: 50em;
    height: auto;
  }

  @media screen and (min-width: 851px) {
    opacity: 0.4;
    width: 35em;
    font-size: clamp(1rem, 1.6vw, 1.3rem);
    bottom: -18em;
  }
  @media screen and (min-width: 1000px) {
    opacity: 1;
    width: 30em;
  }

  @keyframes imgInit {
    0% {
      transform: translateY(100%) scale(0.6);
      opacity: 0;
    }

    40% {
      transform: translateY(10%) rotate(-10deg) scale(1);
      opacity: 0.2;
    }

    60% {
      transform: translateY(0%) rotate(10deg);
    }

    100% {
      transform: translateY(0%) rotate(0deg);
    }
  }
`;

S.Title = styled.h1`
  color: #f8f8f8;
  margin: 0 0 0.6rem;
  font-size: clamp(2rem, 5.3vw, 3.5rem);
`;
S.Subtitle = styled.h2`
  color: #f8f8f8;
  font-size: clamp(1.2rem, 4.5vw, 2.8rem);
  font-weight: 300;
  margin: 0 0 0.6rem;
`;

S.Text = styled.p`
  color: #f8f8f8;
  margin: 0 0 2rem;
  line-height: 1.6rem;
  font-size: clamp(0.8rem, 1.2vw, 1rem);
`;

S.DropDownTogglerWrapper = styled.div`
  width: 26px;
  height: 16px;
  display: grid;
  place-items: center;
  position: relative;
  cursor: pointer;

  visibility: visible;

  &.active > span {
    & {
      visibility: hidden;
    }

    &::before,
    &::after {
      visibility: visible;
    }

    &:before {
      transform: translateY(8px) rotate(225deg);
    }

    &:after {
      transform: translateY(-8px) rotate(-225deg);
    }
  }
`;

S.DropDownToggler = styled.span`
  height: 2px;
  width: 100%;
  background: #849dc5;
  transition: all 100ms ease-in;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #849dc5;
    transition: all 200ms ease-in;
  }

  &::before {
    top: -1px;
  }

  &::after {
    bottom: -1px;
  }
`;

S.DropDownMenu = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #848484;
  overflow: hidden;

  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

  transition: all 350ms ease-in-out;

  z-index: 10;

  &.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    // max-height: 600px;
  }
`;

S.ul = styled.ul`
  list-style: none;
  padding: 0;
`;

S.DropDownItem = styled.li`
  text-transform: capitalize;
  color: white;
  border-bottom: 1px solid #dbe1e8;
  padding: 1em 1em;
  cursor: pointer;

  position: relative;

  &:hover {
    // color: #849dc5;
    // outline: 1px solid #f8f8f8;
    background: #849dc5;
  }
`;

export default S;
