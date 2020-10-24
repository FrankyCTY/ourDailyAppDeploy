import { takeLeading, takeLatest, take, fork, cancel, call, put, all, delay } from "redux-saga/effects";
import storage from "redux-persist/lib/storage";
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
    isDeletingMeTrue,
    isDeletingMeFalse,
    deleteMeSuccess,
    deleteMeFailure,
    isSendingForgotPwEmailTrue,
    isSendingForgotPwEmailFalse,
    sendForgotPwEmailSuccess,
    sendForgotPwEmailFailure,
    isForgotPwEmailSentTrue,
    isForgotPwEmailSentFalse,
    resetPasswordSuccess,
    resetPasswordFailure,
    isResettingPwTrue,
    isResettingPwFalse,
    changeResetPasswordState,
    changeUserBackgroundSuccess,
    changeUserBackgroundFailure,
    isChangingUserBgTrue,
    isChangingUserBgFalse,
} from "./user.actions";

import {setWholePageLoaderBigText} from "../WholePageLoader/wholePageLoader.action";

import {changeAuthPage} from "../AuthPage/AuthPage.actions";

import globalErrHandler from "../../utils/globalErrHandler";

import {
    setIsLoggedTrue,
    setUserDetails,
    signOut,
    setUserBackground,
} from "../Auth/auth.actions";


import {requestAndUpdateAvatar} from "./user.generatorFn";

import {changeUserPassword, deleteMe, sendForgotPwEmail, resetPassword, changeUserBackground} from "./user.requests";

// ================= Sagas ==================

function* onChangeUserBackgroundStart() {
  yield takeLeading(UserActionTypes.CHANGE_USER_BACKGROUND_START, fn_changeUserBackgroundStart);
} 
function* onChangeUserBackgroundSuccess() {
  yield takeLeading(UserActionTypes.CHANGE_USER_BACKGROUND_SUCCESS, fn_changeUserBackgroundSuccess);
} 

function* onResetPasswordStart() {
  yield takeLeading(UserActionTypes.RESET_PW_START, fn_resetPasswordStart);
}
function* onResetPasswordSuccess() {
  yield takeLeading(UserActionTypes.RESET_PW_SUCCESS, fn_resetPasswordSuccess);
}
function* onResetPasswordFailure() {
  yield takeLeading(UserActionTypes.RESET_PW_FAILURE, fn_resetPasswordFailure);
}
function* onSendForgotPwEmailStart() {
  yield takeLeading(UserActionTypes.SEND_FORGOT_PW_EMAIL_START, fn_sendForgotPwEmailStart);
}

function* onSendForgotPwEmailFailure() {
  yield takeLeading(UserActionTypes.SEND_FORGOT_PW_EMAIL_FAILURE, fn_sendForgotPwEmailFailure);
}
function* onSendForgotPwEmailSuccess() {
  yield takeLeading(UserActionTypes.SEND_FORGOT_PW_EMAIL_SUCCESS, fn_sendForgotPwEmailSuccess);
}

function* onDeleteMeStart() {
  yield takeLeading(UserActionTypes.DELETE_ME_START, fn_deleteMeStart);
}

function* onDeleteMeSuccess() {
  yield takeLeading(UserActionTypes.DELETE_ME_SUCCESS, fn_deleteMeSuccess);
}

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
      call(onDeleteMeStart),
      call(onDeleteMeSuccess),
      call(onSendForgotPwEmailStart),
      call(onSendForgotPwEmailFailure),
      call(onSendForgotPwEmailSuccess),
      call(onResetPasswordStart),
      call(onResetPasswordSuccess),
      call(onResetPasswordFailure),
      call(onChangeUserBackgroundStart),
      call(onChangeUserBackgroundSuccess),
    ]);
  }

  function* fn_changeUserBackgroundStart({formData}) {
    try {
      // Loading -> true
      console.log({formData})
      yield put(isChangingUserBgTrue());
      
      // 1) request backend to change user background
      const res = yield call(changeUserBackground, formData, `${process.env.REACT_APP_URL}/users/updateBg`);

      console.log({res})
      console.log(res.data.data.user.bg)
      // 3) save user background to react state
      yield put(setUserBackground(res.data.data.user.bg));

      // Loading -> false
      yield put(changeUserBackgroundSuccess());
    } catch (error) {
      // Loading -> false
      yield put(isChangingUserBgFalse());
      yield put(changeUserBackgroundFailure());
    }
  }

  function* fn_changeUserBackgroundSuccess() {
  }

  function* fn_resetPasswordStart({resetPwObj, param}) {
    try {
      // Start Spinner
      yield put(isResettingPwTrue());
      yield delay(3000);
      // 1) Request Backend to resetPassword
      console.log("ready to reset password", {param})
      const res = yield call(resetPassword, resetPwObj, `${process.env.REACT_APP_URL}/users/resetPassword/${param}`);
      console.log({res})
      // Stop Spinner
      yield put(isResettingPwFalse());
      yield put(resetPasswordSuccess());
    } catch (error) {
      // Stop Spinner
      yield put(isResettingPwFalse());
      yield put(resetPasswordFailure());
    }  
  }
  
  function* fn_resetPasswordSuccess () {
    yield put(changeResetPasswordState("success"));
  }

  function* fn_resetPasswordFailure () {
    yield put(changeResetPasswordState("fail"));
  }

function* fn_sendForgotPwEmailStart ({email}) {
  try {
    // Loading -> true
    console.log({email});
    yield put(isSendingForgotPwEmailTrue());

    // 1) Request to send email via backend
    const res = yield call(sendForgotPwEmail, email, `${process.env.REACT_APP_URL}/users/forgotPassword`);
    console.log({resetEmailRes: res});

    // Loading -> false
    yield put(isSendingForgotPwEmailFalse());
    yield put(sendForgotPwEmailSuccess());
  } catch (error) {
    // Loading -> false
    yield put(isSendingForgotPwEmailFalse());
    yield put(sendForgotPwEmailFailure(error, "sendForgotPwAlert"));
  }
}

function* fn_sendForgotPwEmailFailure({error, targetComponent}) {
  // targetComponent "sendForgotPwAlert"
  console.log({error})
  yield globalErrHandler(error, targetComponent);
}

function* fn_sendForgotPwEmailSuccess() {
  yield put(isForgotPwEmailSentTrue());
  yield delay(5000);
  yield put(isForgotPwEmailSentFalse());
}

function* fn_deleteMeStart() {
  try {
    console.log("deleting user");
    // Loading -> true
    yield put(setWholePageLoaderBigText("Processing..."));
    yield put(isDeletingMeTrue());
    
    yield delay(1000);
    yield put(setWholePageLoaderBigText("Deleting User Account..."));
    yield delay(2000);
    // 1) Delete Me request tp bkEnd
    yield call(deleteMe, `${process.env.REACT_APP_URL}/users/deleteMe`);
    // 2) Remove local storage data
    yield storage.removeItem('persist:root');
    yield put(setWholePageLoaderBigText("Complete. Thanks for using my services, I will miss you."));
    yield delay(2000);

    // Loading -> false
    yield put(isDeletingMeFalse());
    yield put(deleteMeSuccess());
  } catch (error) {
    // Loading -> false
    yield put(isDeletingMeFalse());
    yield put(deleteMeFailure());
  }
}

function* fn_deleteMeSuccess() {
  yield put(signOut());
}

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