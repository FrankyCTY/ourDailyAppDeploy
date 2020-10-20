import styled, { css } from "styled-components";

const S = {};

const buttonStyles = css`
  cursor: pointer;
  border: 0;
  text-align: center;
  letter-spacing: 1.6px;
  font-weight: 700;
  margin-bottom: 1rem;
  border-radius: 30px;
  color: ${(props) => props.theme.appDetailPage.btn_font_clr};
  font-size: clamp(0.8rem, 1.2vw, 1.4rem);
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

// ===================== Page Content Main ========================
S.PageContentContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0 5em;
  font-size: clamp(0.4rem, 1.4vw, 1rem);
  color: ${(props) => props.theme.appDetailPage.text};

  align-items: flex-start;
`;

// ====================== Video =====================
S.VideoWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;
`;

S.Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

// ====================== Content Text Part =====================
S.Intro = styled.div`
  font-weight: 700;
  font-size: clamp(0.8rem, 1.4vw, 1rem);
  margin: 1.2em 0 0;
  line-height: 1.8;

  & p {
    margin-bottom: 1em;
  }
`;

S.TagsWrapper = styled.div`
  margin-top: 1em;
`;

S.SectionTitle = styled.h2`
  font-weight: 700;
  border-bottom: 1px solid rgba($color: #535151, $alpha: 0.3);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  padding: 1.2em 0;
  margin-bottom: 1.2em;
`;

S.FeatureList = styled.ul`
  padding-left: 2em;
  font-size: clamp(0.9rem, 1.5vw, 1.5rem);
  color: ${(props) => props.theme.appDetailPage.featureList};
  margin-bottom: 5em;

  & li {
    margin-bottom: 0.5em;
  }
`;

// ================================ Buttons ================================

S.BtnAddToWishlist = styled.button`
  ${buttonStyles}

  background: ${(props) => props.theme.appDetailPage.addToWishListBtn_bg};

  // width: 183px;
  // height: 69px;
  width: 9.3em;
  height: 3.2em;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    background: gray;
  }
`;

S.IconSvg = styled.i`
  margin-left: 0.3rem;
  font-size: 1em;
  color: ${(props) => props.theme.appDetailPage.heartIcon}
  transition: all 100ms;

  &.active {
    color: ${(props) => props.theme.appDetailPage.heartIcon_active}
  }
`;

S.BtnAddToCart = styled.button`
  ${buttonStyles}
  background: ${(props) => props.theme.appDetailPage.addToCartBtn_bg};

  margin-bottom: 5rem;
  padding: 0.8em 1.2em;
`;
export default S;
