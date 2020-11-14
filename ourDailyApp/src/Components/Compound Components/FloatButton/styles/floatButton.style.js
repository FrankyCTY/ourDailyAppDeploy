import styled from "styled-components";

const S = {};

S.FloatBtnWrapper = styled.div`  
position: fixed;

bottom: ${({bottom}) => {
  if(bottom) {
    return `${bottom};`;
  }
  else {
    return "22%;";
  }
}}
right: 12vw;
z-index: 4;

@media screen and (min-width: 850px) {
  right: 3vw;
}`;

S.FloatButton = styled.button`
position: absolute;
z-index: 4;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
--size: 50px;
width: var(--size);
height: var(--size);
display: grid;
place-items: center;
border-radius: 100%;

background-color: ${({bg}) => bg};
cursor: pointer;

transition: all 250ms;

&:disabled {
    background: gray !important;
    color: white !important;
}

&:hover {
  filter: brightness(.9);
}
`;

S.FloatBtnIcon = styled.i`
color: white;
font-size: 1.2rem;
`;

export default S;