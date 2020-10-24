import { Gallery } from "../../Components/Compound Components";
import GalleryActionTypes from "./gallery.types";

export const populateMorePhotos = (photos) => ({
    type: GalleryActionTypes.POPULATE_MORE_GALLERY_PHOTOS,
    photos,
})

export const fetchPhotosSuccess = (nextPageUrl, callback) => ({
    type: GalleryActionTypes.FETCH_PHOTOS_SUCCESS,
    nextPageUrl,
    callback,
})
export const fetchPhotosStart = (url, callback) => ({
    type: GalleryActionTypes.FETCH_PHOTOS_START,
    url,
    callback,
})

export const fetchPhotosFailure = () => ({
    type: GalleryActionTypes.FETCH_PHOTOS_FAILURE,
})

export const setFetchingGalleryImagesTrue = () => ({
    type: GalleryActionTypes.SET_FETCHING_GALLERY_IMAGES_TRUE,
})

export const setFetchingGalleryImagesFalse = () => ({
    type: GalleryActionTypes.SET_FETCHING_GALLERY_IMAGES_FALSE,
})