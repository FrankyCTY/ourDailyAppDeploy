import styled, { keyframes } from "styled-components";

const S = {};

const load = keyframes`
0% { 
  transform: scale(0);
} 
100% {
  transform: scale(1.0);
  opacity: 0;
}`;

// ================ Spinner ==================
S.SpinnerOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.SpinnerContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;

  background-color: ${(props) =>
    props.theme.mainPage.spinner_mainPageAccessAppWrapper};

  border-radius: 100%;
  animation: ${load} 1s infinite ease-in-out;
`;

export default S;
