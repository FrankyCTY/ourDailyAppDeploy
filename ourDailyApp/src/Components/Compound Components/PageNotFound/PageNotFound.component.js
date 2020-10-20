import React from 'react';
import S from "./styles/PageNotFound.style"

export default function PageNotFound({children, ...restProps}) {
    return (<S.Frame {...restProps}>{children}</S.Frame>)
}

PageNotFound.Container = function Container({children, ...restProps}) {
    return (<S.Container {...restProps}>{children}</S.Container>)
}

PageNotFound.WarningIcon = function WarningIcon({children, ...restProps}) {
    return <S.WarningIcon {...restProps}><i className="iconfont icon-warning"/>{children}</S.WarningIcon>
}

PageNotFound.BigText = function BigText({children, ...restProps}) {
    return <S.BigText {...restProps}>{children}</S.BigText>
}

PageNotFound.DescText = function DescText({children, ...restProps}) {
    return <S.DescText {...restProps}>{children}</S.DescText>
}

PageNotFound.Group = function Group({children, ...restProps}) {
    return <S.Group {...restProps}>{children}</S.Group>
}

PageNotFound.IconAndTextGroup = function IconAndTextGroup({children, ...restProps}) {
    return <S.IconAndTextGroup {...restProps}>{children}</S.IconAndTextGroup>
}

PageNotFound.ColGroup = function IconAndTextGroup({children, ...restProps}) {
    return <S.ColGroup {...restProps}>{children}</S.ColGroup>
}

PageNotFound.Button = function Button({children, ...restProps}) {
    return <S.Button {...restProps}>{children}</S.Button>
}




