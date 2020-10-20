import PigGamePlayer2ActionTypes from "./pigGamePlayer2.types";

export const signInSuccess = (displayName, photoURL) => ({
  type: PigGamePlayer2ActionTypes.SIGN_IN_SUCCESS,
  displayName,
  photoURL,
});

// export const player2LogOut = () => ({
//   type: PigGamePlayer2ActionTypes.PLAYER2_USER_LOGOUT,
// });

export const signInStart = (email, password) => ({
  type: PigGamePlayer2ActionTypes.SIGN_IN_START,
  email,
  password,
});

export const signInFailure = (error) => ({
  type: PigGamePlayer2ActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: PigGamePlayer2ActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: PigGamePlayer2ActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: PigGamePlayer2ActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const loadPlayer2State = (player2State) => ({
  type: PigGamePlayer2ActionTypes.LOAD_PLAYER2_STATE,
  payload: player2State,
});
