import { takeLeading, takeLatest, take, fork, cancel, call, put, all, delay } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import AuthActionTypes from "../Auth/auth.types";

import {
    updateUserDetailsSuccess,
    updateUserDetailsFailure,
    updateUserAvatarSuccess,
    updateUserAvatarFailure,
    setIsUploadingAvatarTrue,
    setIsUploadingAvatarFalse,
    setIsUpdatingUserDetailsTrue,
    setIsUpdatingUserDetailsFalse,
    changeUserPasswordSuccess,
    changeUserPasswordFailure,
    setIsChangingUserPasswordTrue,
    setIsChangingUserPasswordFalse,
    setChangePasswordAlert,
    showChangePasswordMsg,
    hideChangePasswordMsg,
} from "./user.actions";

import {changeAuthPage} from "../AuthPage/AuthPage.actions";

import globalErrHandler from "../../utils/globalErrHandler";

import {
    setIsLoggedTrue,
    setUserDetails
} from "../Auth/auth.actions";


import {requestAndUpdateAvatar} from "./user.generatorFn";

import {changeUserPassword} from "./user.requests";

// ================= Sagas ==================

function* onChangeUserPasswordStart() {
  while(true) {
      // 1) wait for Update User Password start
      const {changePasswordDetails} = yield take(UserActionTypes.CHANGE_USER_PASSWORD_START);
      
      // 2) implement Update User Password logic
      const changeUserPasswordTask = yield fork(fn_changeUserPasswordStart, changePasswordDetails);
      
      // 3) check if add app to wishlist started
      const action = yield take([AuthActionTypes.SIGN_OUT_START, UserActionTypes.CHANGE_USER_PASSWORD_SUCCESS, UserActionTypes.CHANGE_USER_PASSWORD_FAILURE]);
      // 4) cancel the add app logic if user clciked add app to checklist
      if(action.type === AuthActionTypes.SIGN_OUT_START) {
          console.log("cancelling changeUserPasswordTask");
          yield cancel(changeUserPasswordTask);
      }
  }
}

function* onChangeUserPasswordFail() {
  yield takeLeading(UserActionTypes.CHANGE_USER_PASSWORD_FAILURE, fn_changeUserPasswordFailure);
}

function* onChangeUserPasswordSuccess() {
  yield takeLeading(UserActionTypes.CHANGE_USER_PASSWORD_SUCCESS, fn_changeUserPasswordSuccess);
}

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
      call(onChangeUserPasswordStart),
      call(onChangeUserPasswordFail),
      call(onChangeUserPasswordSuccess),
    ]);
  }

  // =========== Update User Details ===========

function* fn_changeUserPasswordStart(changePasswordDetails) {
  try {
    // Loading -> true
    console.log({changePasswordDetails});
    yield put(setIsChangingUserPasswordTrue());

    // 2) Change user Password Logic in Backend
    yield call(changeUserPassword, changePasswordDetails, `${process.env.REACT_APP_URL}/users/changePassword`);
    //@planToImplement

    // Loading -> false
    yield put(setIsChangingUserPasswordFalse());
    yield put(changeUserPasswordSuccess("Successfully changed password"));
  } catch (error) {
    // Loading -> false
    yield put(setIsChangingUserPasswordFalse());
    yield put(changeUserPasswordFailure(error));
  }
}

function* fn_changeUserPasswordFailure({error}) {
  yield globalErrHandler(error, "changePasswordAlert");
}

function* fn_changeUserPasswordSuccess({message}) {
  yield put(setChangePasswordAlert(message));
  yield put(showChangePasswordMsg());
  yield delay(2500);
  yield put(hideChangePasswordMsg());
}

function* updateUserDetailsStart({formData}) {
    try {

      // Loading -> true
      console.log({formData})
      yield put(setIsUpdatingUserDetailsTrue());
      
      // 1) update bkEnd avatar -> get avatar from s3 bucket -> update react state avatar
      const updatedUser = yield call(requestAndUpdateAvatar, formData);
      
      // 2) set react state user details
      yield put(setUserDetails(updatedUser));
      // Loading -> false
      yield put(setIsUpdatingUserDetailsFalse());
      yield put(updateUserDetailsSuccess());
    } catch (error) {
      // Loading -> false
      yield put(setIsUpdatingUserDetailsFalse());
      yield put(updateUserDetailsFailure());
    }
  }

  function* afterUpdateUserDetailsSuccess() {
    yield put(setIsUpdatingUserDetailsFalse());
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