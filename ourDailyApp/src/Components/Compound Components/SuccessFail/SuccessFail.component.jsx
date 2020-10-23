import React from "react";
import S from "./styles/SuccessFail.style";

export default function SuccessFail({children, ...restProps}) {
    return <S.SuccessFailContainer {...restProps}>{children}</S.SuccessFailContainer>
}

// Elements
SuccessFail.SuccessFailIcon = function SuccessFailIcon({children, ...restProps}) {
    return <S.SuccessFailIcon {...restProps}>
        {children}
    </S.SuccessFailIcon>
}
SuccessFail.SuccessFailText = function SuccessFailText({children, ...restProps}) {
    return <S.SuccessFailText {...restProps}>
        {children}
    </S.SuccessFailText>
}
SuccessFail.SuccessFailWrapper = function SuccessFailWrapper({children, ...restProps}) {
    return <S.SuccessFailWrapper {...restProps}>
        {children}
    </S.SuccessFailWrapper>
}

// Sets
SuccessFail.SuccessContainer = function SuccessContainer({primaryText, secondaryText, children, ...restProps}) {
    return <S.SuccessFailWrapper {...restProps}>
            <S.SuccessFailIcon className="iconfont icon-success text-6xl text-gray-200 sm:my-6 xl:my-8"/>
            <S.SuccessFailText className="text-gray-200 md:text-xl lg:text-2xl text-center">{primaryText}</S.SuccessFailText>
            <S.SuccessFailText className="text-gray-200 text-xs md:text-lg lg:text-lg text-center break-words">{secondaryText}</S.SuccessFailText>
            {children}
        </S.SuccessFailWrapper>
}

SuccessFail.FailContainer = function FailContainer({primaryText, secondaryText, children, ...restProps}) {
    return <S.SuccessFailWrapper {...restProps}>
            <S.SuccessFailIcon className="iconfont icon-close text-6xl text-gray-200 sm:my-6 xl:my-8"/>
            <S.SuccessFailText className="text-gray-200 md:text-xl lg:text-2xl text-center">{primaryText}</S.SuccessFailText>
            <S.SuccessFailText className="text-gray-200 text-xs md:text-lg lg:text-lg text-center break-words">{secondaryText}</S.SuccessFailText>
            {children}
        </S.SuccessFailWrapper>
}