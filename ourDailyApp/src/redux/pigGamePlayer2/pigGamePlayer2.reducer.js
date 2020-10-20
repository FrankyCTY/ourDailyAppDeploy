import PigGamePlayer2ActionTypes from "./pigGamePlayer2.types";

const INITIAL_STATE = {
  displayName: null,
  photoURL: null,
  error: null,
  isLogged: false,
};

const pigGamePlayer2Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PigGamePlayer2ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        displayName: action.displayName,
        photoURL: action.photoURL,
        error: null,
        isLogged: true,
      };
    case PigGamePlayer2ActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        displayName: null,
        photoURL: null,
        error: null,
        isLogged: false,
      };
    case PigGamePlayer2ActionTypes.SIGN_OUT_FAILURE:
    case PigGamePlayer2ActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case PigGamePlayer2ActionTypes.LOAD_PLAYER2_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default pigGamePlayer2Reducer;
