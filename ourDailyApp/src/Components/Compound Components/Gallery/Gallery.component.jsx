import React, {useContext} from "react";
import S from "./styles/Gallery.style";

import {UploadAvatarContext} from "../../../context/uploadAvatar.context";

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

Gallery.UploadImgGridItem = function UploadImgGridItem({children, ...restProps}) {

    const {getInputProps} = useContext(UploadAvatarContext);

    return <S.UploadImgGridItem {...restProps}>{children}
                <S.UploadImgDeco>
                    <S.UploadIcon className="iconfont icon-upload"/>Upload
                </S.UploadImgDeco>
                <S.Label htmlFor="image"></S.Label>
                <S.ImageInput id="image" name="image" type="file" className="hidden" {...getInputProps()}></S.ImageInput>
    </S.UploadImgGridItem>
}