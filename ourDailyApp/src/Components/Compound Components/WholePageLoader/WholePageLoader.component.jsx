import React from "react";
import PixelSpinner from "../../../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";
import S from "./styles/WholePageLoader.style";

export default function WholePageLoader({children, ...restProps}) {
    return <S.WholePageLoaderContainer {...restProps}>{children}</S.WholePageLoaderContainer>
}

// Loader Components
WholePageLoader.BigText = function BigText({children, ...restProps}) {
    return <S.BigText {...restProps}>{children}</S.BigText>
}

WholePageLoader.Group = function Group({children, ...restProps}) {
    return <S.Group {...restProps}>{children}</S.Group>
}


// Loader Sets
WholePageLoader.DefaultLoader = function DefaultLoader({spinnerColor, size, animationDuration, children, ...restProps}) {
    return <S.WholePageLoaderContainer {...restProps}>
        <S.Group>
            <PixelSpinner className="mb-6 lg:mb-16 lg:text-2xl" color={spinnerColor} size={size} animationDuration={animationDuration}/>
            <S.BigText>{children}</S.BigText>
        </S.Group>
    </S.WholePageLoaderContainer>
}