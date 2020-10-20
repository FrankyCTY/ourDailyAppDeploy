import AppActionTypes from "./app.types";

export const fetchApplicationsStart = () => ({
  type: AppActionTypes.FETCH_APPLICATIONS_START,
});
// ====================== App Description + content =====================
export const fetchApplicationsSuccess = (applicationsMap) => ({
  type: AppActionTypes.FETCH_APPLICATIONS_SUCCESS,
  payload: applicationsMap,
});

export const fetchApplicationsFailure = (errorMsg) => ({
  type: AppActionTypes.FETCH_APPLICATIONS_FAILURE,
  payload: errorMsg,
});

// ====================== ACCESS APP BUTTONS =================
export const fetchAccessAppBtnsStart = () => ({
  type: AppActionTypes.FETCH_ACCESS_APP_BTN_START,
});

export const fetchAccessAppBtnsSuccess = (accessAppBtns) => ({
  type: AppActionTypes.FETCH_ACCESS_APP_BTN_SUCCESS,
  payload: accessAppBtns,
});
