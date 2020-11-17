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
  turnSignInModalOff,
} from "../pigGameModals/pigGameModals.actions";

import {logInPLayer2} from "./pigGamePlayer2.requests";

import {saveGameState} from "../pigGame/pigGame.requests";

import Url from "../../url";

function* onSignInStart() {
  yield takeLatest(PigGamePlayer2ActionTypes.SIGN_IN_START, fn_SignInStart);
}

function* onSignOutStart() {
  yield takeLatest(PigGamePlayer2ActionTypes.SIGN_OUT_START, fn_SignOutStart);
}

export default function* pigGamePlayer2Saga() {
  yield all([call(onSignInStart), call(onSignOutStart)]);
}

// ================= More generator functions =================

function* fn_SignInStart({ email, password }) {
  try {
    // * Start spinner
    console.log({email})
    console.log({password})
    yield put(setIsProcessingSignInTRUE());

    // 1. Return if player2 email = main user email
    const mainUserEmail = yield select((state) => state.auth_P.user.email);
    if(mainUserEmail === email) {
      console.log("Rejected player2 logging in with main email")
      throw Error();
    }

    // 2. Log In Player2
    const gameId = yield select((state) => state.pigGame.gameId);
    const res = yield call(logInPLayer2, [{email, password}, `${Url}/piggames/${gameId}/player2LogIn`]) 
    // 3. populate player 2 details into pig game player 2 reducer
    const {name} = res.data.data.user;
    const player2Avatar = res.data.data.avatar;
    yield put(signInSuccess(name, player2Avatar.data));
    // 4. Hide Modal
    yield put(turnSignInModalOff());

    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
  } catch (error) {
    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
    yield put(signInFailure(error.message));
  }
}

function* fn_SignOutStart() {
  try {   
    // Save state to backend
    const pigGameState = yield select((state) => state.pigGame);
    yield call(saveGameState, [pigGameState, `${Url}/piggames`]);
  
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}
