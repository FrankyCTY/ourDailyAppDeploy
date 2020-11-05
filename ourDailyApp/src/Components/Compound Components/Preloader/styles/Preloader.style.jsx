import styled, {css, keyframes} from "styled-components";

const loading = keyframes`
  from {
    transform: translateX(-98%);
  }
  to {
    transform: translateX(1000%)
  }
`;

const preloaderAnimationStyles = css`
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 40%;
    height: 100%;
    background: ${(props) =>
      props.theme.appStoreCard.cardLoadingContent_secondary};
    filter: blur(20px);
    left: 0;
    animation: ${loading} 2s infinite;
  }
`;

const borderRadiusPreloaderStyles = css`
  border-radius: 20px;
`;

const preloaderContentStyles = css`
  background-color: ${(props) =>
    props.theme.appStoreCard.cardLoadingContent_primary};
`;


const S = {};

S.Preloader = styled.div``;

S.PreloaderRow = styled.div`
${borderRadiusPreloaderStyles}
${preloaderContentStyles}
${preloaderAnimationStyles}
opacity: 0.4;
`;

export default S;