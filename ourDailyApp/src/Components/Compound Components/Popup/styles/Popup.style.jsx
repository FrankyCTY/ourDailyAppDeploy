import styled from "styled-components";

const S = {};

S.Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
z-index: 100;
background: rgba(0,0,0,0.5);
cursor: pointer;

display: ${({open}) => {
  return open ? "block" : "none";
}};
`;

S.Header = styled.div`
  background: ${({theme}) => theme.body}
`;

S.Body = styled.div``;

S.Footer = styled.div``;

S.PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // --size: ${({popupsize}) => popupsize};
  // width: var(--size);
  // height: var(--size);

  background: ${({theme}) => theme.secondary_bg};
`;

export default S;