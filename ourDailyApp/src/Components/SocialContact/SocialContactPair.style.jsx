import styled from "styled-components";

const S = {};

S.SocialContactPair = styled.a`
  background: 0;
  border: 0;
  display: flex;
  align-items: center;
  font-size: 0.6em;
  color: ${(props) => props.theme.SocialContactPair.text};
  margin-right: 0.8em;
  cursor: pointer;
  transition: opacity 250ms linear;

  & .styled-svg {
    fill: ${(props) => props.theme.SocialContactPair.svg};
    width: 2em;
    margin-right: 0.6em;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export default S;
