import React from "react";
import S from "./styles/ToolBar.style";

export default function ToolBar({shouldExpand, children, ...restProps}) {
    return <S.ToolBarContainer {...restProps}>{children}</S.ToolBarContainer>
}

ToolBar.Btn = function ToolBarBtn({children, ...restProps}) {
return <S.ToolBarBtn {...restProps}>{children}</S.ToolBarBtn>
}

ToolBar.BtnIcon = function ToolBarBtnIcon({children, ...restProps}) {
    return <S.ToolBarBtnIcon {...restProps}>{children}</S.ToolBarBtnIcon>
}