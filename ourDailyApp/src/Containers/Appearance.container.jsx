import React, {useEffect, useState} from "react";
import {Gallery} from "../Components/Compound Components";

import {fetchPhotosStart} from "../redux/Gallery/gallery.actions";

import {useSelector, useDispatch} from "react-redux";

export default function Appearance() {
    // const [photos, setPhotos] = useState([]);
    const photos = useSelector(state => state.gallery.photos);
    const [nextPageUrl, setNextPageUrl] = useState("https://api.pexels.com/v1/curated?per_page=15&page=1");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPhotosStart(nextPageUrl, (url) => setNextPageUrl(url)));
    }, [])
    

    console.log("populated img", photos)
    
    return(<Gallery>
        <Gallery.GalleryItemWrapper className="gap-6 xl:gap-x-4 xl:gap-y-10 wrapper">
            {photos.map(photo => <Gallery.GalleryItem className="item"><img src={photo}/></Gallery.GalleryItem>)}
        </Gallery.GalleryItemWrapper>
    </Gallery>);
}