import styled, { css } from "styled-components";
import { rgba } from "polished";

import bgJpg from "../../assets/bg/authPageBg-min.jpg";
import bgJpgMobile from "../../assets/bg/authPageBg-mobile.jpg";

const S = {};

const switchPageBtnStyle = css`
  background: 0;
  border: 0;
  outline: 0;

  cursor: pointer;

  font-size: 0.8em;
  text-decoration: underline;

  margin-left: 2em;
  margin-bottom: 0.3em;
`;

S.LogInPageHazyBg = styled.div`
  width: 100vw;
  height: 100vh;

  background: url(${bgJpgMobile}) no-repeat center center fixed;
  @media only screen and (min-width: 1000px) {
    background: url(${bgJpg}) no-repeat center center fixed;
  }
  background-size: cover !important;
  filter: blur(18px);

  position: fixed;
`;

S.LogInPageContent = styled.div`
  overflow-y: auto;
  width: 85%;
  height: 85%;
  max-width: 1650px;
  max-height: 850px;

  user-select: none;
  border-radius: 20px;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${bgJpgMobile});

  @media only screen and (min-width: 1000px) {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),
      url(${bgJpg});
  }

  background-image: ${rgba("#000000", 0.5)};
  background-size: cover !important;
  background-repeat: no-repeat !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${(props) => {
    if (props.styled_authPage !== "uploadAvatar") return "display: grid;";
  }}

  font-size: clamp(0.9rem, 1.4vw, 1.5rem);

  ${(props) => {
    if (props.styled_authPage === "login") {
      return `grid-template-rows: 1em minmax(7em, 8em) 1em minmax(21em, 1fr) minmax(2.5em, 1fr);
            grid-template-columns: minmax(40px, 1fr) minmax(3em, 100px) minmax(7em, 250px) minmax(3em, 100px)  minmax(40px, 1fr);
            grid-template-areas:
            ". . . . ."
            ". . logo . ."
            ". . . . ."
            ". logInPage logInPage logInPage ."
            "footer footer footer footer footer";

            @media only screen and (min-width: 1280px) {
              grid-template-rows: 1em minmax(9em, 1fr) 1em minmax(19em, 1fr) minmax(2em, 1fr);
            }
            `;
    }
  }};

  ${(props) => {
    if (props.styled_authPage === "signup") {
      return `grid-template-rows: 1em minmax(5em, 8em) 3em minmax(15em, 1fr) minmax(1em, 1fr);
            grid-template-columns: minmax(40px, 1fr) minmax(3em, 100px) minmax(7em, 250px) minmax(3em, 100px)  minmax(40px, 1fr);
            grid-template-areas:
            ". . . . ."
            ". . logo . ."
            ". . . . ."
            ". signUpPage signUpPage signUpPage ."
            "footer footer footer footer footer";

            @media only screen and (min-width: 700px) {
              grid-template-rows: 1em minmax(5em, 8em) 2em minmax(24em, 1fr) 1fr;
              grid-template-columns: minmax(40px, 1fr) minmax(50px, 1fr) minmax(8em, 300px) minmax(50px, 1fr)  minmax(40px, 1fr);
            }

            @media only screen and (min-width: 1000px) {
              grid-template-rows: 1em minmax(9em, 1fr) 1em minmax(20em, 1fr) 1fr;
              grid-template-columns: minmax(40px, 1fr) minmax(50px, 1fr) minmax(8em, 250px) minmax(50px, 1fr)  minmax(40px, 1fr);
            }
            `;
    }
  }};

  ${(props) => {
    if (props.styled_authPage === "signup" && props.mq_IsTallScreen) {
      return `grid-template-rows: 1em minmax(5em, 8em) 5em minmax(30em, 1fr) minmax(1em, 1fr);`;
    }
  }};
`;

S.LogInWrapper = styled.div`
  grid-area: logInPage;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

S.SignUpWrapper = styled.div`
  grid-area: signUpPage;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

// ============= Logo ==============
S.LogoWrapper = styled.div`
  grid-area: logo;
  transition: transform 800ms linear;
  transform: scale(1);

  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  &.styled_smallerLogo {
    transform: scale(0.8);
  }
`;

/* // ============== Create Account Btn ==============  */
S.ToSignUpPage = styled.button`
  ${switchPageBtnStyle}
  color: ${(props) => props.theme.AuthPage.ToSignUpPageBtn};
`;
S.ToLogInPage = styled.button`
  ${switchPageBtnStyle}
  color: ${(props) => props.theme.AuthPage.ToLogInPageBtn};
`;

/* // ============== S.Footer ==============  */
S.FooterWrapper = styled.div`
  grid-area: footer;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-bottom: 0.2em;
`;
/* // ============== S.SocialContactAndCopyRightWrapper ==============  */

S.SocialContactAndCopyRightWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 647px) {
    flex-direction: column;
  }
`;
/* // ============== My Social Media Contact ==============  */
S.SocialContactWrapper = styled.div`
  display: flex;
`;

/* // ============== Copy Right Text ==============  */
S.CopyRightText = styled.span`
  font-size: 0.6em;
  align-self: flex-end;
  // margin-bottom: 0.3em;
  margin-right: 2em;
  color: #f8f8f8;
`;

export default S;
