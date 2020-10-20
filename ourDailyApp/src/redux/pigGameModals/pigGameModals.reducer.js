import PigGameModalsActionTypes from "./pigGameModals.types";

const INITIAL_STATE = {
  showSignInModal: false,
  showInfoModal: false,
  isProcessingSignIn: false,
  signInError: {
    emailError: {
      emailNotExist: false,
    },
    passwordError: {
      passwordIncorrect: false,
    },
  },
};

const pigGameModalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PigGameModalsActionTypes.TOGGLE_SIGNIN_MODAL:
      return {
        ...state,
        showSignInModal: !state.showSignInModal,
      };
    case PigGameModalsActionTypes.TURN_SIGNIN_OFF:
      return {
        ...state,
        showSignInModal: false,
      };
    case PigGameModalsActionTypes.TOGGLE_INFO_MODAL:
      return {
        ...state,
        showInfoModal: !state.showInfoModal,
      };
    case PigGameModalsActionTypes.TURN_INFO_MODAL_OFF:
      return {
        ...state,
        showInfoModal: false,
      };
    case PigGameModalsActionTypes.PASSWORD_INCORRECT_TRUE:
      return {
        ...state,
        signInError: {
          ...state.signInError,
          passwordError: {
            passwordIncorrect: true,
          },
        },
      };
    case PigGameModalsActionTypes.PASSWORD_INCORRECT_FALSE:
      return {
        ...state,
        signInError: {
          ...state.signInError,
          passwordError: {
            passwordIncorrect: false,
          },
        },
      };
    case PigGameModalsActionTypes.EMAIL_NOTREGISTERED_TRUE:
      return {
        ...state,
        signInError: {
          ...state.signInError,
          emailError: {
            emailNotExist: true,
          },
        },
      };
    case PigGameModalsActionTypes.EMAIL_NOTREGISTERED_FALSE:
      return {
        ...state,
        signInError: {
          ...state.signInError,
          emailError: {
            emailNotExist: false,
          },
        },
      };
    case PigGameModalsActionTypes.RESET_SIGNIN_ERROR:
      return {
        ...state,
        signInError: INITIAL_STATE.signInError,
      };
    case PigGameModalsActionTypes.SET_PROCESSING_SIGNIN_TRUE:
      return {
        ...state,
        isProcessingSignIn: true,
      };
    case PigGameModalsActionTypes.SET_PROCESSING_SIGNIN_FALSE:
      return {
        ...state,
        isProcessingSignIn: false,
      };
    default:
      return state;
  }
};

export default pigGameModalsReducer;
