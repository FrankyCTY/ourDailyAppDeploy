import {takeLeading, call, put, all} from "redux-saga/effects";

import GalleryActionTypes from "./gallery.types";

import {populateMorePhotos, populatePhotos, fetchPhotosSuccess, fetchPhotosFailure, setFetchingGalleryImagesTrue, setFetchingGalleryImagesFalse} from "./gallery.actions";

import {populatePexelPhotos} from "./gallery.sagaUtils";

import {getBackgroundImages} from "./gallery.requests";

// ================= Sagas ==================

function* onFetchPhotosStart() {
    yield takeLeading(GalleryActionTypes.FETCH_PHOTOS_START, fn_fetchPhotosStart);
}

function* onFetchPhotosSuccess() {
    yield takeLeading(GalleryActionTypes.FETCH_PHOTOS_SUCCESS, fn_fetchPhotosSuccess);
}

export default function* gallerySaga() {
    yield all([
        call(onFetchPhotosStart),
        call(onFetchPhotosSuccess),
    ]);
}

function* fn_fetchPhotosStart({url, callback}) {
    try {
        // Start Spinner
        yield put(setFetchingGalleryImagesTrue());
        
        // 1) Fetch images from pexels api
        const res = yield call(getBackgroundImages, url);
        console.log({res});

        // 2) populate photos into react state
        const photoArray = yield call(populatePexelPhotos, res.data.photos);
        // const photoPreviewUrls = res.data.photos.map((photoObj) => photoObj.src.medium);
        // const photoSrcUrls = res.data.photos.map((photoObj) => photoObj.src.original);
        yield put(populatePhotos(photoArray));
        // Stop Spinner
        yield put(setFetchingGalleryImagesFalse());
        yield put(fetchPhotosSuccess(res.data.next_page, callback));
    } catch (error) {
        // Stop Spinner
        yield put(setFetchingGalleryImagesFalse());
        yield put(fetchPhotosFailure());
    }
}

function* fn_fetchPhotosSuccess({nextPageUrl, callback}) {
    console.log({nextPageUrl})
    console.log({callback})
    yield callback(nextPageUrl);
}