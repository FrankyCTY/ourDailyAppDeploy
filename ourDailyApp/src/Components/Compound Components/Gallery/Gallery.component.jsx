import React from "react";
import S from "./styles/Gallery.style";

export default function Gallery({children, ...restProps}) {
    return <S.GalleryContainer {...restProps}>
                {children}
        </S.GalleryContainer>
}

Gallery.GalleryItemWrapper = function GalleryItemWrapper({children, ...restProps}) {
    return <S.GalleryItemWrapper {...restProps}>{children}</S.GalleryItemWrapper>
}

Gallery.GalleryItem = function GalleryItem({children, ...restProps}) {
    return <S.GalleryItem {...restProps}>{children}</S.GalleryItem>
}