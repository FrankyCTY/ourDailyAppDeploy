import GalleryActionTypes from "./gallery.types";

const INITIATE_STATE = {
    photos: [],
    isFetchingGalleryImages: false,
    backgroundNextUrl: "https://api.pexels.com/v1/curated?per_page=15&page=1",
}

const GalleryReducer = (state = INITIATE_STATE, action) => {
    switch(action.type) {
        case GalleryActionTypes.POPULATE_MORE_GALLERY_PHOTOS:
            return {
                ...state,
                // Concatenation
                photos: state.photos.concat(action.photos),
            }
        case GalleryActionTypes.SET_FETCHING_GALLERY_IMAGES_TRUE:
            return {
                ...state,
                isFetchingGalleryImages: true,
            }
        case GalleryActionTypes.SET_FETCHING_GALLERY_IMAGES_FALSE:
            return {
                ...state,
                isFetchingGalleryImages: false,
            }
        default:
            return state;
    }
}

export default GalleryReducer;