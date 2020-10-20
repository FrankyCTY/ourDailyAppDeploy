import { takeLeading, takeLatest, call, put, all } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
    updateUserDetailsSuccess,
    updateUserDetailsFailure,
    updateUserAvatarSuccess,
    updateUserAvatarFailure,
    setIsUploadingAvatarTrue,
    setIsUploadingAvatarFalse,
    setIsUpdatingUserDetailsTrue,
    setIsUpdatingUserDetailsFales,
} from "./user.actions";

import {changeAuthPage} from "../AuthPage/AuthPage.actions";

import {
    setIsLoggedTrue,
    setUserDetails
} from "../Auth/auth.actions";


import {requestAndUpdateAvatar} from "./user.generatorFn";

// ================= Sagas ==================
function* onUpdateUserDetailsStart() {
    yield takeLeading(UserActionTypes.UPDATE_USER_DETAILS_START, updateUserDetailsStart);
  }
  
  function* onUpdateUserDetailsSuccess() {
    yield takeLatest(UserActionTypes.UPDATE_USER_DETAILS_SUCCESS, afterUpdateUserDetailsSuccess);
  }
  
  function* onUpdateUserAvatarStart() {
    yield takeLeading(UserActionTypes.UPDATE_USER_AVATAR_START, updateUserAvatarStart);
  }
  
  function* onUpdateUserAvatarSuccess() {
    yield takeLatest(UserActionTypes.UPDATE_USER_AVATAR_SUCCESS, afterUpdateUserAvatarSuccess);
  }

  export default function* userSaga() {
    yield all([
      call(onUpdateUserDetailsStart),
      call(onUpdateUserDetailsSuccess),
      call(onUpdateUserAvatarStart),
      call(onUpdateUserAvatarSuccess),
    ]);
  }

  // =========== Update User Details ===========

function* updateUserDetailsStart({formData}) {
    try {

      // Loading -> true
      console.log({formData})
      yield put(setIsUpdatingUserDetailsTrue());
      
      // 1) update bkEnd avatar -> get avatar from s3 bucket -> update react state avatar
      const updatedUser = yield call(requestAndUpdateAvatar, formData);
      
      // 2) set react state user details
      yield put(setUserDetails(updatedUser));
      // yield 
      // Loading -> false
      yield put(updateUserDetailsSuccess());
    } catch (error) {
      // Loading -> false
      yield put(setIsUpdatingUserDetailsFales());
      yield put(updateUserDetailsFailure());
    }
  }
  function* afterUpdateUserDetailsSuccess() {
    yield put(setIsUpdatingUserDetailsFales());
  }
  
  function* updateUserAvatarStart({formData}) {
    try {
      // Loading -> true
      yield put(setIsUploadingAvatarTrue());


      // 1) update bkEnd avatar -> get avatar from s3 bucket -> update react state avatar
      yield call(requestAndUpdateAvatar, formData);

      yield put(updateUserAvatarSuccess());
      
    } catch (error) {
      
      // Loading -> false
      yield put(setIsUploadingAvatarFalse());
      yield put(updateUserAvatarFailure());
    }
  }
  
  function* afterUpdateUserAvatarSuccess() {
    // Loading -> false
    yield put(setIsUploadingAvatarFalse());
    yield put(setIsLoggedTrue());
    yield put(changeAuthPage("logIn"));

  }