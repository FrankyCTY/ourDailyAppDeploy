import PigGameModalsActionTypes from "./pigGameModals.types";

export const toggleSignInModal = () => ({
  type: PigGameModalsActionTypes.TOGGLE_SIGNIN_MODAL,
});

export const turnSignInModalOff = () => ({
  type: PigGameModalsActionTypes.TURN_SIGNIN_OFF,
});

export const toggleInfoModal = () => ({
  type: PigGameModalsActionTypes.TOGGLE_INFO_MODAL,
});

export const turnInfoModalOff = () => ({
  type: PigGameModalsActionTypes.TURN_INFO_MODAL_OFF,
});

export const setPasswordIncorrectTRUE = () => ({
  type: PigGameModalsActionTypes.PASSWORD_INCORRECT_TRUE,
});

export const setPasswordIncorrectFALSE = () => ({
  type: PigGameModalsActionTypes.PASSWORD_INCORRECT_FALSE,
});

export const setEmailNotRegisteredTRUE = () => ({
  type: PigGameModalsActionTypes.EMAIL_NOTREGISTERED_TRUE,
});

export const setEmailNotRegisteredFALSE = () => ({
  type: PigGameModalsActionTypes.EMAIL_NOTREGISTERED_FALSE,
});

export const resetSignInError = () => ({
  type: PigGameModalsActionTypes.RESET_SIGNIN_ERROR,
});

export const setIsProcessingSignInTRUE = () => ({
  type: PigGameModalsActionTypes.SET_PROCESSING_SIGNIN_TRUE,
});

export const setIsProcessingSignInFALSE = () => ({
  type: PigGameModalsActionTypes.SET_PROCESSING_SIGNIN_FALSE,
});

export const googleSignInStart = () => ({
  type: PigGameModalsActionTypes.PIGGAME_GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = () => ({
  type: PigGameModalsActionTypes.PIGGAME_EMAIL_SIGN_IN_START,
});