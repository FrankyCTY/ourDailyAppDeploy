import PigGameModalsActionTypes from "./pigGameModals.types";

// import { saveGameState } from "../../firebase/firestore/setData";
// import { getMatchedUserArray } from "../../firebase/firestore/getData";

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

// ================ Reduce Thunk Flow ================
export const signInFormOnHide = () => {
  return (dispatch) => {
    dispatch(turnSignInModalOff());
    setTimeout(() => {
      dispatch(resetSignInError());
    }, 300);
  };
};

// export const player2SignInFlow = (email, password) => {
//   return async (dispatch) => {
//     const targetUserArray = await getMatchedUserArray(email, password);

//     // 1. Email not registered error
//     if (targetUserArray.length === 0) {
//       dispatch(setEmailNotRegisteredTRUE());
//       return false;
//     } else {
//       dispatch(setEmailNotRegisteredFALSE());
//     }

//     // 2. Authentication check
//     const userObj = targetUserArray[0].data();
//     if (userObj.password === password) {
//       dispatch(setPasswordIncorrectFALSE());
//     } else {
//       dispatch(setPasswordIncorrectTRUE());
//       return false;
//     }

//     // Ready to -> Save user info to reducer
//     return { displayName: userObj.displayName, photoURL: userObj.photoURL };
//   };
// };
