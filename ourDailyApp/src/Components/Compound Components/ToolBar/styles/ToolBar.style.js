import styled from "styled-components";

const S = {};

S.ToolBarContainer = styled.div`
position: fixed;
bottom: 0;
left: 50%;
transform: translateX(-50%);
border-radius: 5px;
background: ${({theme}) => theme.ToolBar.bg};
box-shadow: 0 0 10px 5px rgba(0, 0, 0, .2);
z-index: 15;
`;

S.ToolBarBtn = styled.button`
--size: 3rem;
width: var(--size);
height: var(--size);
&.active {
    border-radius: 5px;
    border-top: 4px solid #35569A;
}

&:hover span {
    filter: brightness(1.5);
}
`;

S.ToolBarBtnIcon = styled.span`
font-size: 1.3rem;
color: ${({theme}) => theme.ToolBar.icon_color};
`;


export default S;
