import styled, { css } from "styled-components";
import { rgba } from "polished";
import bgJpg from "../../assets/bg/authPageBg-min.jpg";
import bgJpgMobile from "../../assets/bg/authPageBg-mobile.jpg";
import { Link } from "react-router-dom";

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

const S = {};

S.AuthPageContainer = styled.div`
  height: 100vh;
`;

S.LogInPageHazyBg = styled.div`
  width: 100vw;
  height: 100%;

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

  padding-top: 1rem;

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

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// ============= Logo ==============
S.LogoWrapper = styled.div`
  // grid-area: logo;
  transition: transform 800ms linear;
  transform: scale(1);
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  width: 8em;

  margin-bottom: 1rem;

  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  &.shrink {
    transform: scale(0.8);
  }
`;

/* // ============== Create Account Btn ==============  */
S.ChangeAuthPageLink = styled(Link)`
  ${switchPageBtnStyle}
  color: ${(props) => props.theme.AuthPage.ToLogInPageBtn};
`;

/* // ============== S.Footer ==============  */
S.FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-bottom: 0.2em;

  margin-top: auto;

  @media screen and (min-width: 900px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1400px) {
    font-size: 1.4rem;
  }
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
