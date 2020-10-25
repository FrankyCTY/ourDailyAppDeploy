import React, { useEffect, useState, useContext } from "react";
import { Gallery, Formik, UploadAvatar } from "../Components/Compound Components";
import PixelSpinner from "../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";
import { UploadAvatarContext } from "../context/uploadAvatar.context";

import { fetchPhotosStart } from "../redux/Gallery/gallery.actions";

import { useSelector, useDispatch } from "react-redux";

export default function Appearance() {
    // const [photos, setPhotos] = useState([]);
    const photos = useSelector(state => state.gallery.photos);
    const userBg = useSelector(state => state.auth_P.userBg);
    const isFetchingGalleryImages = useSelector(state => state.gallery.isFetchingGalleryImages);
    const [nextPageUrl, setNextPageUrl] = useState("https://api.pexels.com/v1/curated?per_page=15&page=1");
    const {selectedBg, setSelectedBg, setFile, onBackgroundSubmit} = useContext(UploadAvatarContext);

    // useEffect(() => {
    //     dispatch(fetchPhotosStart(nextPageUrl, (url) => setNextPageUrl(url)));
    //     // Get background from S3
    // }, [])

    const onClick = (e) => {
        const { name, src } = e.target;
        console.log({ src }) // Send src to backend and store it, then save in s3 new bucket called background
        // Set uploaded file to ""
        setFile("");
        setSelectedBg({name, src});
    }
    return (
        <>
        <Gallery>
            <Gallery.GalleryItemWrapper className="gap-6 xl:gap-x-4 xl:gap-y-10 galleryWrapper">
                <Gallery.UploadImgGridItem></Gallery.UploadImgGridItem>
                <Gallery.GalleryItem><img alt="defailt img" src={userBg}/></Gallery.GalleryItem>
                {/* {photos.map((photo, key) => <Gallery.GalleryItem className="galleryItem"><img src={photo} key={key} name={`bg-${key}`}/></Gallery.GalleryItem>)} */}
                {new Array(5).fill("5").map((photo, key) => <Gallery.GalleryItem className={`${selectedBg.name === `bg-${key}` && "selected"}`} key={key}><img name={`bg-${key}`} onClick={onClick} alt={`bg-${key}`} src={`https://images.pexels.com/photos/2988589/pexels-photo-2988589.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`} /></Gallery.GalleryItem>)}

            </Gallery.GalleryItemWrapper>
            <Formik.SubmitBtn disabled={isFetchingGalleryImages} onClick={onBackgroundSubmit} formDetails={{ background: selectedBg.src }} className="text-gray-200">SAVE{isFetchingGalleryImages && <PixelSpinner size={1.2} animationDuration={1500} style={{ marginLeft: "4px" }} />}</Formik.SubmitBtn>
        </Gallery>
        <UploadAvatar.CropImageContainer />
        </>
    );
}