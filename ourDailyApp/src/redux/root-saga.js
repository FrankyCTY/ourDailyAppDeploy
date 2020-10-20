import { call, all } from "redux-saga/effects";

import appSaga from "./app/app.sagas";
import authSaga from "./Auth/auth.sagas";
import userSaga from "./User/user.sagas";
import pigGameSaga from "./pigGame/pigGame.sagas";
import pigGamePlayer2Saga from "./pigGamePlayer2/pigGamePlayer2.sagas";
import cartSaga from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([
    call(appSaga),
    call(authSaga),
    call(userSaga),
    call(pigGameSaga),
    call(pigGamePlayer2Saga),
    call(cartSaga),
  ]);
}
