import styled, { createGlobalStyle } from "styled-components";

const S = {};

S.Container = styled.div``;

S.LockBody = createGlobalStyle`
  body {
    margin: 0
    height: 100%;
    overflow: hidden;
  }
`;

S.Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  animation: fadeIn 300ms ease-in-out;

  z-index: 20;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

S.Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;

S.Close = styled.span`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 0.4;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 2rem;
  color: white;

  transition: opacity 250ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

S.PlayVideoBtn = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  --size: 4rem;
  width: var(--size);
  height: var(--size);
  background: #849dc5;
  border-radius: 100%;
  z-index: 2;

  cursor: pointer;
`;
S.PlayVideoBtnIcon = styled.span`
  font-size: 1.5rem;
  color: white;
  margin-left: 5px;
`;

export default S;
