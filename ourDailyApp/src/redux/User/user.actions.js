import UserActionTypes from "./user.types";

const UserActions = {}

UserActions.setIsUploadingAvatarTrue = () => ({
    type: UserActionTypes.IS_UPLOADING_AVATAR_TRUE,
})

UserActions.setIsUploadingAvatarFalse = () => ({
    type: UserActionTypes.IS_UPLOADING_AVATAR_FALSE,
})

UserActions.setIsUpdatingUserDetailsTrue = () => ({
    type: UserActionTypes.IS_UPDATING_USER_DETAILS_TRUE,
})

UserActions.setIsUpdatingUserDetailsFalse = () => ({
    type: UserActionTypes.IS_UPDATING_USER_DETAILS_FALSE,
})

UserActions.setIsChangingUserPasswordTrue = () => ({
    type: UserActionTypes.IS_CHANGING_USER_PASSWORD_TRUE,
})

UserActions.setIsChangingUserPasswordFalse = () => ({
    type: UserActionTypes.IS_CHANGING_USER_PASSWORD_FALSE,
})
UserActions.isDeletingMeTrue = () => ({
    type: UserActionTypes.IS_DELETE_ME_TRUE,
})

UserActions.isDeletingMeFalse = () => ({
    type: UserActionTypes.IS_DELETE_ME_FALSE,
})
UserActions.isSendingForgotPwEmailTrue = () => ({
    type: UserActionTypes.IS_SENDING_FORGOT_PW_EMAIL_TRUE,
})

UserActions.isSendingForgotPwEmailFalse = () => ({
    type: UserActionTypes.IS_SENDING_FORGOT_PW_EMAIL_FALSE,
})
UserActions.isForgotPwEmailSentTrue = () => ({
    type: UserActionTypes.IS_FORGOT_PW_EMAIL_SENT_TRUE,
})

UserActions.isForgotPwEmailSentFalse = () => ({
    type: UserActionTypes.IS_FORGOT_PW_EMAIL_SENT_FALSE,
})
UserActions.isResettingPwTrue = () => ({
    type: UserActionTypes.IS_RESETTING_PW_TRUE,
})

UserActions.isResettingPwFalse = () => ({
    type: UserActionTypes.IS_RESETTING_PW_FALSE,
})

UserActions.updateUserDetailsStart = (formData) => ({
    type: UserActionTypes.UPDATE_USER_DETAILS_START,
    formData,
  })
UserActions.updateUserDetailsSuccess = () => ({
type: UserActionTypes.UPDATE_USER_DETAILS_SUCCESS,
})
UserActions.updateUserDetailsFailure = () => ({
type: UserActionTypes.UPDATE_USER_DETAILS_FAILURE,
})

UserActions.updateUserAvatarStart = (formData) => ({
type: UserActionTypes.UPDATE_USER_AVATAR_START,
formData,
})

UserActions.updateUserAvatarSuccess = () => ({
type: UserActionTypes.UPDATE_USER_AVATAR_SUCCESS,
})
UserActions.updateUserAvatarFailure = () => ({
type: UserActionTypes.UPDATE_USER_AVATAR_FAILURE,
})

UserActions.changeUserPasswordStart = (changePasswordDetails) => ({
type: UserActionTypes.CHANGE_USER_PASSWORD_START,
changePasswordDetails,
})

UserActions.changeUserPasswordSuccess = (message) => ({
type: UserActionTypes.CHANGE_USER_PASSWORD_SUCCESS,
message
})

UserActions.changeUserPasswordFailure = (error) => ({
type: UserActionTypes.CHANGE_USER_PASSWORD_FAILURE,
error
})

UserActions.deleteMeStart = (changePasswordDetails) => ({
type: UserActionTypes.DELETE_ME_START,
changePasswordDetails,
})

UserActions.deleteMeSuccess = () => ({
type: UserActionTypes.DELETE_ME_SUCCESS,
})
UserActions.deleteMeFailure = () => ({
type: UserActionTypes.DELETE_ME_FAILURE,
})

UserActions.sendForgotPwEmailStart = (email) => ({
type: UserActionTypes.SEND_FORGOT_PW_EMAIL_START,
email,
})
UserActions.sendForgotPwEmailSuccess = () => ({
type: UserActionTypes.SEND_FORGOT_PW_EMAIL_SUCCESS
})
UserActions.sendForgotPwEmailFailure = (error, targetComponent) => ({
type: UserActionTypes.SEND_FORGOT_PW_EMAIL_FAILURE,
error,
targetComponent,
})
UserActions.resetPasswordStart = (resetPwObj, param) => ({
type: UserActionTypes.RESET_PW_START,
resetPwObj,
param,
})
UserActions.resetPasswordSuccess = () => ({
type: UserActionTypes.RESET_PW_SUCCESS
})
UserActions.resetPasswordFailure = () => ({
type: UserActionTypes.RESET_PW_FAILURE,
})
UserActions.setSendForgotPwEmailAlert = (alert) => ({
    type: UserActionTypes.SET_SEND_FOTGOT_PW_EMAIL_ALERT,
    alert,
})

UserActions.setChangePasswordAlert = (alert) => ({
type: UserActionTypes.SET_CHANGE_PASSWORD_ALERT,
alert
})
UserActions.clearChangePasswordAlert = () => ({
type: UserActionTypes.CLEAR_CHANGE_PASSWORD_ALERT,
})
UserActions.showChangePasswordMsg = () => ({
type: UserActionTypes.SHOW_CHANGE_PASSWORD_MSG,
})
UserActions.hideChangePasswordMsg = () => ({
type: UserActionTypes.HIDE_CHANGE_PASSWORD_MSG,
})

UserActions.changeResetPasswordState = (state) => ({
    type: UserActionTypes.CHANGE_RESET_PW_STATE,
    state
})

UserActions.isChangingUserBgTrue = () => ({
    type: UserActionTypes.IS_CHANGING_USER_BG_TRUE,
  })
  
  UserActions.isChangingUserBgFalse = () => ({
    type: UserActionTypes.IS_CHANGING_USER_BG_FALSE,
  })
  UserActions.changeUserBackgroundStart = (formData) => ({
    type: UserActionTypes.CHANGE_USER_BACKGROUND_START,
    formData,
  })
  UserActions.changeUserBackgroundSuccess = () => ({
    type: UserActionTypes.CHANGE_USER_BACKGROUND_SUCCESS,
  })
  UserActions.changeUserBackgroundFailure = () => ({
    type: UserActionTypes.CHANGE_USER_BACKGROUND_FAILURE,
  })

  UserActions.getUserBackgroundStart = () => ({
    type: UserActionTypes.GET_USER_BACKGROUND_START,
  })

  UserActions.getUserWebDataStart = () => ({
      type: UserActionTypes.GET_USER_WEB_DATA_START,
  })
  UserActions.getUserWebDataSuccess = () => ({
      type: UserActionTypes.GET_USER_WEB_DATA_SUCCESS,
  })
  UserActions.getUserWebDataFailure = () => ({
      type: UserActionTypes.GET_USER_WEB_DATA_FAILURE,
  })

export default UserActions;
