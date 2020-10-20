import styled, { css, keyframes } from "styled-components";

const S = {};

const loading = keyframes`
  from {
    transform: translateX(-95%);
  }
  to {
    transform: translateX(1000%)
  }
`;

const loadingCardPopsUp = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

const backgroundColorStyles = css`
  background-color: ${(props) => props.theme.appDetailPage.preloader_primary};
`;

const preloadAnimationStyles = css`
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 60%;
    height: 100%;
    background: ${(props) => props.theme.appDetailPage.preloader_secondary};
    filter: blur(100px);
    left: 0;
    right: 0;
    animation: ${loading} 2.8s infinite;
  }
`;

const textPreloaderStyles = css`
  margin: 1.2em 0 0;
  font-size: clamp(0.8rem, 1.4vw, 1rem);
  height: 1em;
`;

const borderRadiusPreloaderStyles = css`
  border-radius: 20px;
`;

// ======================= Page Container =======================

S.PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${loadingCardPopsUp} 250ms;
`;

// ======================= Preloader =======================
S.PageContentContainerPreloader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0 5em;
  font-size: clamp(0.4rem, 1.4vw, 1rem);
`;

S.VideoWrapperPreloader = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  ${backgroundColorStyles}
`;

S.IntroPreloader1 = styled.div`
  ${textPreloaderStyles}
  ${backgroundColorStyles}
  ${borderRadiusPreloaderStyles}
  ${preloadAnimationStyles}
  width: 20%;
`;
S.IntroPreloader2 = styled.div`
  ${textPreloaderStyles}
  ${backgroundColorStyles}
  ${borderRadiusPreloaderStyles}
  ${preloadAnimationStyles}
  width: 28%;
`;
S.IntroPreloader3 = styled.div`
  ${textPreloaderStyles}
  ${backgroundColorStyles}
  ${borderRadiusPreloaderStyles}
  ${preloadAnimationStyles}
  width: 35%;
`;

/* ================ Tags Part ================ */

S.TagsWrapperPreloader = styled.div`
  margin-top: 1em;
  margin-bottom: 5em;s
`;

S.TagDivPreloader = styled.div`
  display: inline-block;
  padding: 0.5em 1em;
  font-size: clamp(0.8rem, 1vw, 1rem);
  width: 70px;
  height: 1.6em;

  margin-right: 0.8em;
  margin-top: 0.6em;
  ${backgroundColorStyles}
  ${preloadAnimationStyles}
  border-radius: 4px;
`;

/* ================================ Buttons ================================ */
/* ================ wishlist part ================ */
S.BtnAddToWishlistPreloader = styled.div`
  margin-bottom: 1rem;
  border-radius: 30px;
  font-size: clamp(0.8rem, 1.2vw, 1.4rem);
  height: 2em;
  padding: 0.8em 0;
  width: 100px;
  ${backgroundColorStyles}
  ${textPreloaderStyles}
  ${preloadAnimationStyles}
`;

/* ================ Add to Cart ================ */
S.BtnAddToCartPreloader = styled.div`
  margin-bottom: 3em;
  border-radius: 30px;
  font-size: clamp(0.8rem, 1.2vw, 1.4rem);
  height: 2em;
  padding: 0.8em 0;
  width: 100%;
  ${backgroundColorStyles}
  ${textPreloaderStyles}
  ${preloadAnimationStyles}
`;

export default S;
