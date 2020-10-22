import UserActionTypes from "./user.types";


const INITIATE_STATE = {
    isUploadingAvatar: false,
    isUpdatingUserDetails: false,
    isChangingUserPassword: false,
    showChangePasswordMsg: false,
    isDeletingMe: false,
    changePasswordAlert: "Successfully",
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
