import UserActionTypes from "./user.types";


const INITIATE_STATE = {
    isUploadingAvatar: false,
    isUpdatingUserDetails: false,
    isChangingUserPassword: false,
    isChangingUserBackground: false,
    showChangePasswordMsg: false,
    isDeletingMe: false,
    isSendingForgotPwEmail: false,
    isForgotPwEmailSent: false,
    isResettingPw: false,
    // success / fail / ""
    resetPwState: "",
    changePasswordAlert: "Successfully",
    sendForgotPwAlert: "",
};

const UserReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.IS_UPLOADING_AVATAR_TRUE:
        return {
            ...state,
            isUploadingAvatar: true,
        }
    case UserActionTypes.IS_UPLOADING_AVATAR_FALSE:
        return {
            ...state,
            isUploadingAvatar: false,
        }
    case UserActionTypes.IS_UPDATING_USER_DETAILS_TRUE:
        return {
            ...state,
            isUpdatingUserDetails: true,
        }
    case UserActionTypes.IS_UPDATING_USER_DETAILS_FALSE:
        return {
            ...state,
            isUpdatingUserDetails: false,
        }
    case UserActionTypes.IS_FORGOT_PW_EMAIL_SENT_TRUE:
        return {
            ...state,
            isForgotPwEmailSent: true,
        }
    case UserActionTypes.IS_FORGOT_PW_EMAIL_SENT_FALSE:
        return {
            ...state,
            isForgotPwEmailSent: false,
        }
    case UserActionTypes.IS_CHANGING_USER_PASSWORD_TRUE:
        return {
            ...state,
            isChangingUserPassword: true,
        }
    case UserActionTypes.IS_CHANGING_USER_PASSWORD_FALSE:
        return {
            ...state,
            isChangingUserPassword: false,
        }
    case UserActionTypes.IS_DELETE_ME_TRUE:
        return {
            ...state,
            isDeletingMe: true,
        }
    case UserActionTypes.IS_DELETE_ME_FALSE:
        return {
            ...state,
            isDeletingMe: false,
        }
    case UserActionTypes.IS_SENDING_FORGOT_PW_EMAIL_TRUE:
        return {
            ...state,
            isSendingForgotPwEmail: true,
        }
    case UserActionTypes.IS_SENDING_FORGOT_PW_EMAIL_FALSE:
        return {
            ...state,
            isSendingForgotPwEmail: false,
        }
    case UserActionTypes.IS_RESETTING_PW_TRUE:
        return {
            ...state,
            isResettingPw: true,
        }
    case UserActionTypes.IS_RESETTING_PW_FALSE:
        return {
            ...state,
            isResettingPw: false,
        }
    case UserActionTypes.IS_CHANGING_USER_BG_TRUE:
        return {
            ...state,
            isChangingUserBackground: true,
        }
    case UserActionTypes.IS_CHANGING_USER_BG_FALSE:
        return {
            ...state,
            isChangingUserBackground: false,
        }
    case UserActionTypes.CHANGE_RESET_PW_STATE:
        return {
            ...state,
            resetPwState: action.state,
        }
    case UserActionTypes.SET_SEND_FOTGOT_PW_EMAIL_ALERT:
        return {
            ...state,
            sendForgotPwAlert: action.alert,
        }
    case UserActionTypes.SET_CHANGE_PASSWORD_ALERT:
        return {
            ...state,
            changePasswordAlert: action.alert
        }
    case UserActionTypes.CLEAR_CHANGE_PASSWORD_ALERT:
        return {
            ...state,
            changePasswordAlert: INITIATE_STATE.changePasswordAlert,
        }
    case UserActionTypes.SHOW_CHANGE_PASSWORD_MSG:
        return {
            ...state,
            showChangePasswordMsg: true,
        }
    case UserActionTypes.HIDE_CHANGE_PASSWORD_MSG:
        return {
            ...state,
            showChangePasswordMsg: false,
        }
    default:
      return state;
  }
};

export default UserReducer;
