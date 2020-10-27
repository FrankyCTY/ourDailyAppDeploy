import React from "react";
import S from "./styles/floatButton.style";

export default function FloatBtn({ bottom, children, ...otherProps }) {
    return <S.FloatBtnWrapper bottom={bottom} {...otherProps}>{children}</S.FloatBtnWrapper>;
}

FloatBtn.FloatButton = function FloatButton({ children, ...otherProps }) {
    return <S.FloatButton {...otherProps}>{children}</S.FloatButton>;
}
FloatBtn.BtnIcon = function FloatBtnIcon({ children, ...otherProps }) {
    return <S.FloatBtnIcon {...otherProps}>{children}</S.FloatBtnIcon>;
}