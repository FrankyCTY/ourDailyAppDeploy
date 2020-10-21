import React from "react";
import S from "./styles/SideMenu.style";

export default function SideMenu({children, ...restProps}) {
    return <S.SideMenuContainer {...restProps}>{children}</S.SideMenuContainer>
}

SideMenu.SideMenuItem = function SideMenuItem({children, ...restProps}) {
    return <S.SideMenuItem {...restProps}>{children}</S.SideMenuItem>
}

SideMenu.ItemText = function ItemText({children, ...restProps}) {
    return <S.ItemText {...restProps}>{children}</S.ItemText>
}

SideMenu.ItemIcon = function ItemIcon({children, ...restProps}) {
    return <S.ItemIcon {...restProps}>{children}</S.ItemIcon>
}