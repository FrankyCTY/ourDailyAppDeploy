import styled from "styled-components";

const S = {};

S.ToolBarContainer = styled.div`
position: fixed;
bottom: 0;
left: 50%;
transform: translateX(-50%) translateY(50%);
border-radius: 5px;
background: ${({theme}) => theme.ToolBar.bg};
box-shadow: 0 0 10px 5px rgba(0, 0, 0, .2);
z-index: 3;
transition: 250ms transform ease-in-out;

&.expanded {
    transform: translateX(-50%);
}

@media screen and (min-width: 480px) {
    transform: translateX(-50%);
}

`;


S.ToolBarBtn = styled.button`
--size: 2.5rem;
width: var(--size);
height: var(--size);
border-top: 4px solid rgba(0, 0, 0, 0);
&.active {
    border-radius: 5px;
    border-top: 4px solid #35569A;
}

&:hover span {
    filter: brightness(1.5);
}

@media screen and (min-width: 660px) {
    --size: 3rem;
}

@media screen and (min-width: 660px) {
    --size: 3.3rem;
}
`;

S.ToolBarBtnIcon = styled.span`
font-size: 1.1rem;
color: ${({theme}) => theme.ToolBar.icon_color};

@media screen and (min-width: 660px) {
    font-size: 1.2rem;
}

@media screen and (min-width: 660px) {
    font-size: 1.35rem;
}
`;


export default S;
