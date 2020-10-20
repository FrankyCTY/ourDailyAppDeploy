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

export const setIsUpdatingUserDetailsFales = () => ({
    type: UserActionTypes.IS_UPLOADING_AVATAR_FALSE,
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
  
  