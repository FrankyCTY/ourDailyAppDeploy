import styled from "styled-components";

const S = {};

S.SideMenuContainer = styled.div`
background: ${({theme}) => theme.secondary_bg};
border: 1px solid ${({theme}) => theme.wrapper_border};
border-radius: 4px;
padding-top: 1.5rem;
width: 14rem;
`;

S.SideMenuItem = styled.div`
display: flex;
padding: .5rem 1.5rem;
cursor: pointer;
align-items: center;
transition: background 250ms ease-in-out;

&:hover {
    background: ${({theme}) => theme.SideMenu.hover_item_bg};
}

&.active {
    background: ${({theme}) => theme.attract_color};

    & span,
    & p {
        color: white;
    }
}
`;

S.ItemIcon = styled.span`
font-size: 1.2rem;
color: ${({theme}) => theme.general_text};
`;

S.ItemText = styled.p`
color: ${({theme}) => theme.general_text};
font-size: .9rem;
`;

export default S;