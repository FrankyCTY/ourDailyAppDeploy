import styled from "styled-components";
import { Link } from "react-router-dom";

const S = {};

S.FormContainer = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 750px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.4rem;
  }
`;

S.LogInFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  margin-bottom: 1rem;

  @media screen and (min-width: 750px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.4rem;
  }
`;

S.SignUpFormContainer = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  justify-content: space-between;
  &::before {
    content: "Sign Up";

    color: ${(props) => props.theme.SignUpPage.SignUpTitle};
    font-weight: 500;

    position: absolute;
    left: 0em;
    top: -3em;

    font-size: 0.8em;
  }

  @media screen and (min-width: 750px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.4rem;
  }
`;

S.FormGroup = styled.div`
  border-bottom: 1px solid white;

  display: flex;
  align-items: center;
  padding: 0.4em 0.2em;
  position: relative;

  transition: all 250ms linear background 0;

  @media screen and (min-width: 700px) {
    margin-bottom: 1.2rem;
  }
`;

S.Block = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
`;

S.RadioInputGroup = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: flex-end;
`;

S.InputSvg = styled.div`
  & svg {
    --size: 1.2em;
    width: var(--size);
    height: var(--size);
    margin-right: 0.6em;
    fill: ${(props) => props.theme.FormInput.svg};
  }
`;

S.FormInput = styled.input`
  width: 80%;
  align-self: flex-end;
  border: 0;
  background: 0;
  outline: 0;

  position: relative;

  font-size: ${(props) => (props.hasSvgComponent ? "0.9em;" : "0.6em;")};
  color: ${(props) => props.theme.FormInput.text};

  &:focus + .styled_label,
  &.active + .styled_label {
    font-size: 0.6em;
    padding-left: 0em;
    ${(props) => props.hasSvgComponent && "padding-left: 1em;"};
    transform: translateY(-1.4em);
  }

  &:required {
    box-shadow: none;
  }
`;

S.FormLabel = styled.label`
  position: absolute;
  ${(props) => props.hasSvgComponent && "left: 2.2em"};
  color: ${(props) => props.theme.FormInput.placeHolder};
  opacity: 1;
  font-weight: 300;

  transition: all 150ms linear;

  font-size: ${(props) => (props.hasSvgComponent ? "0.9em;" : "0.6em;")};

  pointer-events: none;
`;

S.RadioInput = styled.input`
  display: none;

  &:checked + .S_CustomSpan {
    border-color: ${(props) => props.theme.SignUpPage.genderRadiusBtn_hover};
    background: ${(props) => props.theme.SignUpPage.genderRadiusBtn_hover};
  }
`;

S.RadioLabel = styled.label`
font-size: 0.4em;
padding: 0.3em 1em;
border: 0.2em solid white;
em solid white;
display: inline-block;
color: white;
text-transform: uppercase;
cursor: pointer;


margin-bottom: 0.5em;

--radius: 6px;

&.styled_female {
  border-right: 0.1em solid white;
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}

&.styled_male {
  border-left: 0.1em solid white;
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}`;

S.DatePickerInput = styled.input`
  border: 0;
  background: 0;
  outline: 0;

  font-size: 0.6em;
  color: ${(props) => props.theme.FormInput.text};

  font-weight: 700;
  text-transform: uppercase;
`;

S.AlertSvg = styled.div`
  cursor: pointer;
  margin-bottom: 0.5em;
  @keyframes pops {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  & svg {
    --size: 0.8em;
    width: var(--size);
    height: var(--size);
    animation: pops 300ms linear;
    position: absolute;
    right: 0;
    fill: ${(props) => props.theme.FormInput.alert_bg};
  }
`;

S.LogInBtn = styled.button`
  font-size: 0.6em;
  border: 0;
  padding: 0.5em 2.4em;
  outline: 0;
  background: ${(props) => props.theme.LogInForm.logInBtn_bg};
  color: ${(props) => props.theme.LogInForm.logInBtn_text};
  align-self: center;

  display: flex;
  align-items: center;


  font-weight: 700;

  cursor: pointer;

  margin-top: 2rem;

  &:disabled {
    background: gray;
  }
`;

S.SignUpBtn = styled.button`
  font-size: 0.6em;
  border: 2px solid ${(props) => props.theme.SignUpForm.SignUpButton_border};
  padding: 0.5em 2.4em;
  align-self: center;
  background: ${(props) => props.theme.SignUpForm.SignUpButton_bg};
  color: ${(props) => props.theme.SignUpForm.SignUpButton_text};
  outline: 0;
  display: flex;
  justify-content: space-between;

  transition: opacity 250ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  margin-top: 2em;

  font-weight: 700;

  cursor: pointer;

  & > * {
    margin-left: 0.5em;
  }
`;

S.AlertTooltip = styled.div`
  background: ${(props) => props.theme.FormInput.alert_bg};
  padding: 0.5em 1em;
  color: white;
  z-index: 2;
  border-radius: 3px;
  font-size: 0.5em;

  box-shadow: 0 0 0 1px rgba(139, 3, 0, 0.75), 0 1px 10px rgba(0, 0, 0, 0.35);

  position: absolute;

  white-space: pre-line;

  pointer-events: none;

  @keyframes pops {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: pops 250ms linear;

  &.top {
    right: 0;
    top: -20%;
  }

  &.right {
    left: 102%;
  }
`;

S.ForgotPassBtn = styled(Link)`
  background: 0;
  border: 0;
  outline: 0;

  font-weight: 500;

  cursor: pointer;

  font-size: 0.7em;
  position: absolute;

  color: ${(props) => props.theme.FormInput.forgotPassBtn_text};
  bottom: -2em;
  right: 0;

  &:hover {
    text-decoration: underline;
  }
`;

S.FileInputBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

S.FileInputLabel = styled.label`
  color: white;
  margin-bottom: 4em;
`;

S.FormFileInput = styled.input``;

S.FormTitle = styled.h1`
  color: white;
  font-size: 1rem;
  font-weight: 500;

  @media screen and (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

S.FormText = styled.span`
  color: white;
  font-size: 0.8rem;

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

S.FormTextGroup = styled.span`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  width: 230px;

  @media screen and (min-width: 800px) {
    width: initial;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
`;

export default S;
