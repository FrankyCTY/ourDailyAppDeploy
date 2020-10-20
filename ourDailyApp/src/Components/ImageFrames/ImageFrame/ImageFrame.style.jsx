import styled from "styled-components";

const S = {};

S.ImageFrame = styled.div`
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
  --size: 10em;
  width: var(--size);
  height: var(--size);
  border: 5px solid white;

  border-radius: 100%;
  background-position: center;
  background-size: cover;

  position: relative;

  ${(props) =>
    props.styled_halo && `box-shadow: 0 0 10px rgba(255, 255, 255, 1);`}

  margin-bottom: 1em;
`;

S.Img = styled.img`
  object-fit: cover;
  border-radius: 100%;

  cursor: pointer;

  transition: filter 250ms ease-in-out;

  &:hover {
    filter: blur(3px) brightness(0.5);
  }
  &:hover + .styled_editProfileSpan {
    opacity: 1;
    transform: translate(-50%, -20%);
  }
`;

S.EditProfileText = styled.span`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 10%);
  font-size: 0.7em;
  font-weight: 300;
  opacity: 0;
  pointer-events: none;

  transition: opacity 250ms ease-in-out, transform 250ms;

  color: ${(props) => props.theme.mainPage.editProfileText};
`;

S.ExtraImgSpan = styled.span`
  color: ${(props) => props.theme.mainPage.username};
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
`;

export default S;
