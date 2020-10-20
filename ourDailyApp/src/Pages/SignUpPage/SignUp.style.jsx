import styled from "styled-components";

const S = {};

S.SignUpPageContainer = styled.div`

  width 90%;
  max-width: 800px;
  height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    margin-top: 1rem;
    margin-bottom: 6rem;
    height: 250px;

    & form {
        width: 45%;
    }
  }
  
  ${({ mq_IsTallScreen }) => {
    if (mq_IsTallScreen) {
      return "height: 450px";
    }
  }}
`;

/* // =================== OR Seperate Line ====================== */
S.Or = styled.span`
  color: ${(props) => props.theme.SignUpPage.OrSepereateLine};

  position: relative;

  opacity: 0.8;

  margin: 1rem 0;

  display: none;

  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    background: ${(props) => props.theme.SignUpPage.OrSepereateLine};
    width: 2px;
    height: 6em;
  }

  &:before {
    top: -600%;
  }

  &:after {
    bottom: -600%;
  }

  &:before,
  &:after {
    transform: rotate(90deg);
    top: -150%;
  }

  &:before {
    left: -320%;
  }

  &:after {
    bottom: 0;
    left: 420%;
  }

  @media screen and (min-width: 700px) {
    display: block;
    &:before,
    &:after {
      left: 50%;
      transform: rotate(0);
    }

    &:before {
      top: -500%;
    }

    &:after {
      top: 180%;
    }

    width: 10%;
    text-align: center;
  }

  ${(props) => props.mq_IsTallScreen && "display: block;"}
`;

// ============== Oauth wrapper ================
S.OauthBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  position: absolute;
  top: 2vw;
  right: 2vw;

  ${(props) => {
    if (props.mq_IsTallScreen) {
      return `
        position: initial;
    `;
    }
  }}

  @media screen and (min-width: 700px) {
    position: initial;
    width: 40%;
  }
`;

export default S;
