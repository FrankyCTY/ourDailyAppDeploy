import styled from "styled-components";

const S = {};

S.PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.IFrame = styled.iframe`
  height: 100vh;
  width: 100vw;
`;

// ================= Introduction ======================
S.IntroContainer = styled.section`
  width: 90%;
  max-width: 550px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "introLeft"
    "introRight";

  @media screen and (min-width: 780px) {
    max-width: 1200px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "introLeft introRight";
  }
`;

/* ============= intro left ============= */

S.IntroLeftWrapper = styled.div`
  grid-area: "introLeft";
`;

S.PageTitleText = styled.h1`
  color: ${(props) => props.theme.commentsConverterPage.title});
  margin: 2rem 0;
`;

S.ImgCamera = styled.img`
  display: none;
  @media screen and (min-width: 780px) {
    display: initial;
  }
`;

S.FeatureList = styled.ul`
  padding-left: 1.8em;
`;

/* ============= intro right ============= */

S.IntroRightWrapper = styled.div`
  grid-area: "introRight";

  @media screen and (min-width: 780px) {
    margin: 2rem 0;
  }
`;

S.VideoWrapper = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`;

S.Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

S.ImgExampleWrapper = styled.div`
  height: 0;
  padding-bottom: 16%;
  width: 100%;
  position: relative;
  margin: 1em 0;
`;

S.ImgExample = styled.img`
  border-radius: 1rem;
  border: 1px solid var(--ccp-h1-clr);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  position: absolute;
`;

S.hr = styled.hr`
  width: 100%;

  @media screen and (min-width: 780px) {
    width: 200%;
  }
`;

/* ====================================== implementation ====================================== */
S.ImplementationWrapper = styled.section`
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 780px) {
    max-width: 1200px;
  }
`;

S.BtnExample = styled.button`
  all: unset;
  cursor: pointer;
  color: ${(props) => props.theme.commentsConverterPage.btnExample};
  &:hover {
    text-decoration: underline;
  }
`;

S.Form = styled.form`
  display: inline-block;
  .input--videoId {
    @media screen and (min-width: 780px) {
      max-width: 220px;
    }
  }
`;

S.BtnStep2 = styled.button`
  all: unset;
  display: block;
  border: 1px solid var(--gray6);
  padding: 0.3em 1em;
  border-radius: 5px;
  margin: 1em 0 0;
  cursor: pointer;

  transition: all 250ms ease-in-out;

  @media screen and (min-width: 477px) {
    margin-left: 1em;
    display: inline-block;
  }

  &:hover {
    background: var(--gray6);
    color: white;
  }
`;

export default S;
