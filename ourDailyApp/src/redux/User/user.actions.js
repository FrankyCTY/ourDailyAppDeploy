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

export const changeUserPasswordSuccess = () => ({
type: UserActionTypes.CHANGE_USER_PASSWORD_START,
})
export const changeUserPasswordFailure = () => ({
type: UserActionTypes.CHANGE_USER_PASSWORD_FAILURE,
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

  
  