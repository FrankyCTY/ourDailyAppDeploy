import { takeLatest, all, call, put, select } from "redux-saga/effects";
import PigGamePlayer2ActionTypes from "./pigGamePlayer2.types";
// import { startNewGame } from "../pigGame/pigGame.actions";
import {
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signInSuccess,
} from "./pigGamePlayer2.actions";

import {
  setIsProcessingSignInTRUE,
  setIsProcessingSignInFALSE,
  signInFormOnHide,
} from "../pigGameModals/pigGameModals.actions";

import { getUserAuthInfo } from "./pigGamePlayer2.sagaUtils";
import {
  saveGameState,
  savePigGamePlayer2State,
} from "../../firebase/firestore/setData";

function* onSignInStart() {
  yield takeLatest(PigGamePlayer2ActionTypes.SIGN_IN_START, signIn);
}

function* onSignOutStart() {
  yield takeLatest(PigGamePlayer2ActionTypes.SIGN_OUT_START, signOut);
}

export default function* pigGamePlayer2Saga() {
  yield all([call(onSignInStart), call(onSignOutStart)]);
}

// ================= More generator functions =================

function* signIn({ email, password }) {
  try {
    yield;
    // * Start spinner
    yield put(setIsProcessingSignInTRUE());
    const user = yield call(getUserAuthInfo, email, password);
    if (user) {
      console.log("User!", user);
      // 1. Reset game data
      //   yield put(startNewGame());
      // 2. Player 2 data -> reducer
      const { displayName, photoURL } = user;
      yield put(signInSuccess(displayName, photoURL));

      // 3. Saving Data to backend
      const pigGameState = yield select((state) => state.pigGame);
      yield call(saveGameState, pigGameState);

      const pigGamePlayer2State = yield select(
        (state) => state.pigGamePlayer2
      );
      yield call(savePigGamePlayer2State, pigGamePlayer2State);

      //4. Hide Modal
      yield put(signInFormOnHide());
    } else {
      throw new Error("Sign In Form Error");
    }
    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
  } catch (error) {
    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
    yield put(signInFailure(error.message));
  }
  console.log("signing in!");
}

function* signOut() {
  try {
    yield put(signOutSuccess());
    // yield put(startNewGame());

    // Save state to firestore
    const pigGameState = yield select((state) => state.pigGame);
    yield call(saveGameState, pigGameState);

    const pigGamePlayer2State = yield select((state) => state.pigGamePlayer2);
    yield call(savePigGamePlayer2State, pigGamePlayer2State);
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
  yield console.log("signing out!");
}
