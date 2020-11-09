import { takeLeading, takeLatest, take, fork, cancel, call, put, all, delay } from "redux-saga/effects";
import storage from "redux-persist/lib/storage";
import UserActionTypes from "./user.types";
import AuthActionTypes from "../Auth/auth.types";

import UserActions from "./user.actions";

import {setWholePageLoaderBigText} from "../WholePageLoader/wholePageLoader.action";

import {changeAuthPage} from "../AuthPage/AuthPage.actions";

import {setIsGettingCartAppsTrue, setIsGettingCartAppsFalse, 
  setIsGettingWishlistAppsTrue, setIsGettingWishlistAppsFalse} from "../cart/cart.actions";

import globalErrHandler from "../../utils/globalErrHandler";

import {
    setIsLoggedTrue,
    setUserDetails,
    signOut,
    isCheckingJwtTrue,
    isCheckingJwtFalse,
} from "../Auth/auth.actions";


import {requestAndUpdateAvatar} from "./user.generatorFn";

import {changeUserPassword, deleteMe, sendForgotPwEmail, resetPassword, changeUserBackground
  , getUserBackground, getUserWebData} from "./user.requests";

import UserSagaUtils from "./user.sagaUtils";

// ================= Sagas ==================

function* onGetUserWebDataStart() {
  yield takeLeading(UserActionTypes.GET_USER_WEB_DATA_START, fn_getUserWebDataStart);
}

function* onGetUserBackgroundStart() {
  yield takeLeading(UserActionTypes.GET_USER_BACKGROUND_START, fn_getUserBackgroundStart);
}

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
      call(onGetUserBackgroundStart),
      call(onGetUserWebDataStart),
    ]);
  }

  function* fn_getUserWebDataStart() {
    try {
      // Start Spinner
      // yield put(setIsGettingCartAppsTrue());
      // yield put(setIsGettingWishlistAppsTrue());

      // 1) Get user web data from backend
      const response = yield call(getUserWebData, `/api/v1/users/getDataForUser`);

      // 2) If user didn't get any error at this point
      // that means the user has proper JWT authorization
      /* yield put(setIsLoggedTrue()); */
      
      const userSagaUtils = new UserSagaUtils();
      yield call(userSagaUtils.populateUserData, [response, userSagaUtils]);

      // Stop Spinner
      // yield put(isCheckingJwtFalse());
      // yield put(setIsGettingCartAppsFalse());
      // yield put(setIsGettingWishlistAppsFalse());
    } catch (error) {
      // Stop Spinner
      // yield put(isCheckingJwtFalse());
      // yield put(setIsGettingCartAppsFalse());
      // yield put(setIsGettingWishlistAppsFalse());

      yield put(UserActions.getUserWebDataFailure());

    }
  }

  function* fn_getUserBackgroundStart() {
    try {

      // 1) get image from backend
      const response = yield call(getUserBackground, `/api/v1/users/getUserBg`);

      // 2) populate user bg to redux state
      // url || buffer
      const userSagaUtils = new UserSagaUtils();
      yield call(userSagaUtils.populateUserBg, response);
    } catch (error) {
      
    }
  }

  function* fn_changeUserBackgroundStart({formData}) {
    try {
      // Loading -> true
      console.log({formData})
      yield put(UserActions.isChangingUserBgTrue());
      
      // 1) request backend to change user background
      const res = yield call(changeUserBackground, formData, `/api/v1/users/updateBg`);
      console.log({res})
      // 2) populate user bg to redux state
      // url || buffer
      const userSagaUtils = new UserSagaUtils();
      yield call(userSagaUtils.populateUserBg, res);

      // Loading -> false
      yield put(UserActions.isChangingUserBgFalse());
      yield put(UserActions.changeUserBackgroundSuccess());
    } catch (error) {
      // Loading -> false
      yield put(UserActions.isChangingUserBgFalse());
      yield put(UserActions.changeUserBackgroundFailure());
    }
  }

  function* fn_changeUserBackgroundSuccess() {
  }

  function* fn_resetPasswordStart({resetPwObj, param}) {
    try {
      // Start Spinner
      yield put(UserActions.isResettingPwTrue());
      yield delay(3000);
      // 1) Request Backend to resetPassword
      console.log("ready to reset password", {param})
      const res = yield call(resetPassword, resetPwObj, `/api/v1/users/resetPassword/${param}`);
      console.log({res})
      // Stop Spinner
      yield put(UserActions.isResettingPwFalse());
      yield put(UserActions.resetPasswordSuccess());
    } catch (error) {
      // Stop Spinner
      yield put(UserActions.isResettingPwFalse());
      yield put(UserActions.resetPasswordFailure());
    } 
  }
  
  function* fn_resetPasswordSuccess () {
    yield put(UserActions.changeResetPasswordState("success"));
  }

  function* fn_resetPasswordFailure () {
    yield put(UserActions.changeResetPasswordState("fail"));
  }

function* fn_sendForgotPwEmailStart ({email}) {
  try {
    // Loading -> true
    console.log({email});
    yield put(UserActions.isSendingForgotPwEmailTrue());

    // 1) Request to send email via backend
    const res = yield call(sendForgotPwEmail, email, `/api/v1/users/forgotPassword`);
    console.log({resetEmailRes: res});

    // Loading -> false
    yield put(UserActions.isSendingForgotPwEmailFalse());
    yield put(UserActions.sendForgotPwEmailSuccess());
  } catch (error) {
    // Loading -> false
    yield put(UserActions.isSendingForgotPwEmailFalse());
    yield put(UserActions.sendForgotPwEmailFailure(error, "sendForgotPwAlert"));
  }
}

function* fn_sendForgotPwEmailFailure({error, targetComponent}) {
  // targetComponent "sendForgotPwAlert"
  console.log({error})
  yield globalErrHandler(error, targetComponent);
}

function* fn_sendForgotPwEmailSuccess() {
  yield put(UserActions.isForgotPwEmailSentTrue());
  yield delay(5000);
  yield put(UserActions.isForgotPwEmailSentFalse());
}

function* fn_deleteMeStart() {
  try {
    console.log("deleting user");
    // Loading -> true
    yield put(setWholePageLoaderBigText("Processing..."));
    yield put(UserActions.isDeletingMeTrue());
    
    yield delay(1000);
    yield put(setWholePageLoaderBigText("Deleting User Account..."));
    yield delay(2000);
    // 1) Delete Me request tp bkEnd
    yield call(deleteMe, `/api/v1/users/deleteMe`);
    // 2) Remove local storage data
    yield storage.removeItem('persist:root');
    yield put(setWholePageLoaderBigText("Complete. Thanks for using my services, I will miss you."));
    yield delay(2000);

    // Loading -> false
    yield put(UserActions.isDeletingMeFalse());
    yield put(UserActions.deleteMeSuccess());
    // log out
  } catch (error) {
    // Loading -> false
    yield put(UserActions.isDeletingMeFalse());
    yield put(UserActions.deleteMeFailure());
  }
}

function* fn_deleteMeSuccess() {
  yield put(signOut());
}

function* fn_changeUserPasswordStart(changePasswordDetails) {
  try {
    // Loading -> true
    console.log({changePasswordDetails});
    yield put(UserActions.setIsChangingUserPasswordTrue());

    // 2) Change user Password Logic in Backend
    yield call(changeUserPassword, changePasswordDetails, `/api/v1/users/changePassword`);
    //@planToImplement

    // Loading -> false
    yield put(UserActions.setIsChangingUserPasswordFalse());
    yield put(UserActions.changeUserPasswordSuccess("Successfully changed password"));
  } catch (error) {
    // Loading -> false
    yield put(UserActions.setIsChangingUserPasswordFalse());
    yield put(UserActions.changeUserPasswordFailure(error));
  }
}

function* fn_changeUserPasswordFailure({error}) {
  yield globalErrHandler(error, "changePasswordAlert");
}

function* fn_changeUserPasswordSuccess({message}) {
  yield put(UserActions.setChangePasswordAlert(message));
  yield put(UserActions.showChangePasswordMsg());
  yield delay(2500);
  yield put(UserActions.hideChangePasswordMsg());
}

function* updateUserDetailsStart({formData}) {
    try {

      // Loading -> true
      console.log({formData})
      yield put(UserActions.setIsUpdatingUserDetailsTrue());
      
      // 1) update bkEnd avatar -> get avatar from s3 bucket -> update react state avatar
      const updatedUser = yield call(requestAndUpdateAvatar, formData);
      
      // 2) set react state user details
      yield put(setUserDetails(updatedUser));
      // Loading -> false
      yield put(UserActions.setIsUpdatingUserDetailsFalse());
      yield put(UserActions.updateUserDetailsSuccess());
    } catch (error) {
      // Loading -> false
      yield put(UserActions.setIsUpdatingUserDetailsFalse());
      yield put(UserActions.updateUserDetailsFailure());
    }
  }

  function* afterUpdateUserDetailsSuccess() {
    yield put(UserActions.setIsUpdatingUserDetailsFalse());
  }
  
  function* updateUserAvatarStart({formData}) {
    try {
      // Loading -> true
      yield put(UserActions.setIsUploadingAvatarTrue());


      // 1) update bkEnd avatar -> get avatar from s3 bucket -> update react state avatar
      yield call(requestAndUpdateAvatar, formData);

      yield put(UserActions.updateUserAvatarSuccess());
      
    } catch (error) {
      
      // Loading -> false
      yield put(UserActions.setIsUploadingAvatarFalse());
      yield put(UserActions.updateUserAvatarFailure());
    }
  }
  
  function* afterUpdateUserAvatarSuccess() {
    // Loading -> false
    yield put(UserActions.setIsUploadingAvatarFalse());
    yield put(setIsLoggedTrue());
    yield put(changeAuthPage("logIn"));

  }