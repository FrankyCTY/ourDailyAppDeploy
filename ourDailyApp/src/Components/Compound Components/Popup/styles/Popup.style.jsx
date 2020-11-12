import styled from "styled-components";

const S = {};

S.Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
z-index: 100;
background: rgba(0,0,0,0.7);
cursor: pointer;

display: ${({open}) => {
  return open ? "block" : "none";
}};
`;

S.Header = styled.div`
  background: ${({theme}) => theme.body};
  border-radius: 4px 4px 0 0;
`;

S.Body = styled.div`
`;

S.Footer = styled.div`
border-radius: 0 0 4px 4px;
`;

S.PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  cursor: initial;
  border-radius: 4px;
  min-width: 300px;

  animation: popup 300ms ease-in-out;

  @keyframes popup {
    from {
      transform: translate(-50%, -55%);
      opacity: 0.6;
    }

    to {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }


  background: ${({theme}) => theme.secondary_bg};
`;

export default S;