import styled from "styled-components";

const S = {};

S.OauthBtn_rounded = styled.button`
  font-size: clamp(0.5rem, 1vw, 0.8rem);
  border: 0;
  outline: 0;
  width: 100%;
  max-width: 18em;

  @media only screen and (min-width: 850px) {
    max-width: 20em;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8em 0.8em;

  border-radius: 30px;

  cursor: pointer;

  transition: transform 150ms linear;

  &:hover {
    transform: translateX(-0.2em);
  }

  margin-bottom: ${(props) => {
    if (props.styled_provider !== "Apple") {
      return ".8rem";
    }
  }};

  background: ${(props) => {
    if (props.styled_provider === "Google") {
      return props.theme.OauthBtns.googleBtn_bg;
    } else if (props.styled_provider === "Facebook") {
      return props.theme.OauthBtns.facebookBtn_bg;
    } else if (props.styled_provider === "Apple") {
      return props.theme.OauthBtns.appleBtn_bg;
    }
  }};

  color: ${(props) => {
    if (props.styled_provider === "Google") {
      return props.theme.OauthBtns.googleBtn_text;
    } else if (props.styled_provider === "Facebook") {
      return props.theme.OauthBtns.facebookBtn_text;
    } else if (props.styled_provider === "Apple") {
      return props.theme.OauthBtns.appleBtn_text;
    }
  }};

  & .styled-svg {
    width: 2em;
  }
`;

export default S;
