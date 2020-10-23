import UserActionTypes from "./user.types";

export const setIsUploadingAvatarTrue = () => ({
    type: UserActionTypes.IS_UPLOADING_AVATAR_TRUE,
})

export const setIsUploadingAvatarFalse = () => ({
    type: UserActionTypes.IS_UPLOADING_AVATAR_FALSE,
})

export const setIsUpdatingUserDetailsTrue = () => ({
    type: UserActionTypes.IS_UPDATING_USER_DETAILS_TRUE,
})

export const setIsUpdatingUserDetailsFalse = () => ({
    type: UserActionTypes.IS_UPDATING_USER_DETAILS_FALSE,
})

export const setIsChangingUserPasswordTrue = () => ({
    type: UserActionTypes.IS_CHANGING_USER_PASSWORD_TRUE,
})

export const setIsChangingUserPasswordFalse = () => ({
    type: UserActionTypes.IS_CHANGING_USER_PASSWORD_FALSE,
})
export const isDeletingMeTrue = () => ({
    type: UserActionTypes.IS_DELETE_ME_TRUE,
})

export const isDeletingMeFalse = () => ({
    type: UserActionTypes.IS_DELETE_ME_FALSE,
})
export const isSendingForgotPwEmailTrue = () => ({
    type: UserActionTypes.IS_SENDING_FORGOT_PW_EMAIL_TRUE,
})

export const isSendingForgotPwEmailFalse = () => ({
    type: UserActionTypes.IS_SENDING_FORGOT_PW_EMAIL_FALSE,
})
export const isForgotPwEmailSentTrue = () => ({
    type: UserActionTypes.IS_FORGOT_PW_EMAIL_SENT_TRUE,
})

export const isForgotPwEmailSentFalse = () => ({
    type: UserActionTypes.IS_FORGOT_PW_EMAIL_SENT_FALSE,
})
export const isResettingPwTrue = () => ({
    type: UserActionTypes.IS_RESETTING_PW_TRUE,
})

export const isResettingPwFalse = () => ({
    type: UserActionTypes.IS_RESETTING_PW_FALSE,
})

export const updateUserDetailsStart = (formData) => ({
    type: UserActionTypes.UPDATE_USER_DETAILS_START,
    formData,
  })
export const updateUserDetailsSuccess = () => ({
type: UserActionTypes.UPDATE_USER_DETAILS_SUCCESS,
})
export const updateUserDetailsFailure = () => ({
type: UserActionTypes.UPDATE_USER_DETAILS_FAILURE,
})

export const updateUserAvatarStart = (formData) => ({
type: UserActionTypes.UPDATE_USER_AVATAR_START,
formData,
})

export const updateUserAvatarSuccess = () => ({
type: UserActionTypes.UPDATE_USER_AVATAR_SUCCESS,
})
export const updateUserAvatarFailure = () => ({
type: UserActionTypes.UPDATE_USER_AVATAR_FAILURE,
})

export const changeUserPasswordStart = (changePasswordDetails) => ({
type: UserActionTypes.CHANGE_USER_PASSWORD_START,
changePasswordDetails,
})

export const changeUserPasswordSuccess = (message) => ({
type: UserActionTypes.CHANGE_USER_PASSWORD_SUCCESS,
message
})

export const changeUserPasswordFailure = (error) => ({
type: UserActionTypes.CHANGE_USER_PASSWORD_FAILURE,
error
})

export const deleteMeStart = (changePasswordDetails) => ({
type: UserActionTypes.DELETE_ME_START,
changePasswordDetails,
})

export const deleteMeSuccess = () => ({
type: UserActionTypes.DELETE_ME_SUCCESS,
})
export const deleteMeFailure = () => ({
type: UserActionTypes.DELETE_ME_FAILURE,
})

export const sendForgotPwEmailStart = (email) => ({
type: UserActionTypes.SEND_FORGOT_PW_EMAIL_START,
email,
})
export const sendForgotPwEmailSuccess = () => ({
type: UserActionTypes.SEND_FORGOT_PW_EMAIL_SUCCESS
})
export const sendForgotPwEmailFailure = (error, targetComponent) => ({
type: UserActionTypes.SEND_FORGOT_PW_EMAIL_FAILURE,
error,
targetComponent,
})
export const resetPasswordStart = (resetPwObj, param) => ({
type: UserActionTypes.RESET_PW_START,
resetPwObj,
param,
})
export const resetPasswordSuccess = () => ({
type: UserActionTypes.RESET_PW_SUCCESS
})
export const resetPasswordFailure = () => ({
type: UserActionTypes.RESET_PW_FAILURE,
})
export const setSendForgotPwEmailAlert = (alert) => ({
    type: UserActionTypes.SET_SEND_FOTGOT_PW_EMAIL_ALERT,
    alert,
})

export const setChangePasswordAlert = (alert) => ({
type: UserActionTypes.SET_CHANGE_PASSWORD_ALERT,
alert
})
export const clearChangePasswordAlert = () => ({
type: UserActionTypes.CLEAR_CHANGE_PASSWORD_ALERT,
})
export const showChangePasswordMsg = () => ({
type: UserActionTypes.SHOW_CHANGE_PASSWORD_MSG,
})
export const hideChangePasswordMsg = () => ({
type: UserActionTypes.HIDE_CHANGE_PASSWORD_MSG,
})

export const changeResetPasswordState = (state) => ({
    type: UserActionTypes.CHANGE_RESET_PW_STATE,
    state
})
