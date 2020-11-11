import { takeLatest, call, put, all } from "redux-saga/effects";

import AppActionTypes from "./app.types";
import {
  fetchApplicationsFailure,
  fetchApplicationsSuccess,
} from "./app.actions";


import { getAllApplications } from "./app.requests";

// ================= Sagas ==================
function* onFetchApplicationsStart() {
  yield takeLatest(AppActionTypes.FETCH_APPLICATIONS_START, fetchApplications);
}

export default function* appSaga() {
  yield all([call(onFetchApplicationsStart)]);
}

// ================= other generator functions ==================
function* fetchApplications() {
  try {
    // 1) Get apps details from backend
    const getAppsRes = yield call(getAllApplications);

    yield put(fetchApplicationsSuccess(getAppsRes.data.data.apps));
  } catch (error) {
    yield put(fetchApplicationsFailure(error));
  }
}
