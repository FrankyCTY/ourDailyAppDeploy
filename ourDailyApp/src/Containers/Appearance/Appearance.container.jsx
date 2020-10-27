import React, { useEffect, useState, useContext } from "react";
import { Gallery, Formik, UploadAvatar, FloatBtn } from "../../Components/Compound Components";
import PixelSpinner from "../../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";
import { UploadImageContext } from "../../context/uploadAvatar.context";
import NoBg from "../../assets/mainpageNoBg.jpg";
import { CSSTransition } from "react-transition-group";
import "./Appearance.scss";

import { fetchPhotosStart } from "../../redux/Gallery/gallery.actions";
import _arrayBufferToBase64 from "../../utils/bufferArrayToBase64";


import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

export default function Appearance() {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.gallery.photos);
    const userBg = useSelector(state => state.theme.background);
    const isChangingUserBackground = useSelector(state => state.user.isChangingUserBackground);
    const isFetchingGalleryImages = useSelector(state => state.gallery.isFetchingGalleryImages);
    const [nextPageUrl, setNextPageUrl] = useState("https://api.pexels.com/v1/curated?per_page=15&page=1");
    const { selectedBg, setSelectedBg, setFile, onBackgroundSubmit } = useContext(UploadImageContext);
    const width_above_1280 = useMediaQuery({ query: "(min-width: 1280px" });

    const shouldDisableBtn = isFetchingGalleryImages || isChangingUserBackground;


    useEffect(() => {
        // Fetch Photos Start and ALSO set the next page url for grabbing more images from pexels
        (photos.length === 0) && dispatch(fetchPhotosStart(nextPageUrl, (url) => setNextPageUrl(url)));
    }, [dispatch, photos])


    const onClick = (e, srcUrl) => {
        const { name } = e.target;
        // Set uploaded file to ""

        console.log({ sentUrl: srcUrl })
        setFile("");
        setSelectedBg({ name, src: srcUrl });
    }

    const onNoBackgroundClick = () => {
        // No background -> reset all selected image
        setFile("");
        setSelectedBg({ name: "NoBackground", src: "" });
    }

    const onFixedBackgroundClick = (e) => {
        const { alt, src } = e.target;
        console.log({ alt: e.target.alt })
        setFile("");
        setSelectedBg({ name: alt, src, });
    }

    return (
        <>
            <Gallery>
                <Gallery.GalleryItemWrapper className="gap-6 xl:gap-x-4 xl:gap-y-10 galleryWrapper">
                    <Gallery.UploadImgGridItem />
                    <Gallery.GalleryItem>
                        <img alt="current img" src={`${_arrayBufferToBase64(userBg)}`} />
                        <Gallery.Tag>Current BG</Gallery.Tag>
                    </Gallery.GalleryItem>
                    <Gallery.GalleryItem isSelected={selectedBg.name === `NoBackground`}>
                        <img alt="NoBackground" src={NoBg} onClick={onNoBackgroundClick} />
                        <Gallery.Tag>No Background</Gallery.Tag>
                    </Gallery.GalleryItem>
                    <Gallery.GalleryItem isSelected={selectedBg.name === `white marble`}>
                        <img alt="white marble" src={"https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&h=1800&w=3060"} onClick={onFixedBackgroundClick} />
                        <Gallery.Tag>White Marble</Gallery.Tag>
                    </Gallery.GalleryItem>
                    <Gallery.GalleryItem isSelected={selectedBg.name === `Deep Ocean`}>
                        <img alt="Deep Ocean" src={"https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&h=1800&w=3060"} onClick={onFixedBackgroundClick} />
                        <Gallery.Tag>Deep Ocean</Gallery.Tag>
                    </Gallery.GalleryItem>
                    <Gallery.GalleryItem isSelected={selectedBg.name === `Road`}>
                        <img alt="Road" src={"https://images.pexels.com/photos/3396673/pexels-photo-3396673.jpeg?auto=compress&cs=tinysrgb&h=1800&w=3060"} onClick={onFixedBackgroundClick} />
                        <Gallery.Tag>Road</Gallery.Tag>
                    </Gallery.GalleryItem>

                    {photos.map((photo, key) => <Gallery.GalleryItem className="galleryItem" isSelected={selectedBg.name === `bg-${key}`}>
                        <img name={`bg-${key}`} onClick={(e) => { onClick(e, photo.srcUrl) }} alt={`bg-${key}`} src={photo.previewUrl} />
                        <Gallery.Tag backgroundColor="#448972">By {photo.photographer}</Gallery.Tag>
                    </Gallery.GalleryItem>)}

                </Gallery.GalleryItemWrapper>

                {/* Responsive Save Button */}
                <CSSTransition in={width_above_1280} timeout={350} classNames="fade-primary" unmountOnExit>
                    <Formik.SubmitBtn disabled={shouldDisableBtn} onClick={onBackgroundSubmit} formDetails={{ background: selectedBg.src }} className="text-gray-200 mt-4">SAVE{shouldDisableBtn && <PixelSpinner size={1.2} animationDuration={1500} style={{ marginLeft: "4px" }} />}</Formik.SubmitBtn>
                </CSSTransition>

                <CSSTransition in={!width_above_1280} timeout={350} classNames="fade-primary" unmountOnExit>
                    <FloatBtn>
                        <FloatBtn.FloatButton disabled={shouldDisableBtn} bg={"#0059A6"} onClick={onBackgroundSubmit}
                            formDetails={{ background: selectedBg.src }}>
                            <FloatBtn.BtnIcon className="iconfont icon-save" />
                        </FloatBtn.FloatButton>
                    </FloatBtn>
                </CSSTransition>

            </Gallery>
            <UploadAvatar.CropImageContainer />
        </>
    );
}