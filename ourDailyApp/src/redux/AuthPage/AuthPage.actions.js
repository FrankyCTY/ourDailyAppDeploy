import AuthPageActionTypes from "./AuthPage.types";

export const changeAuthPage = (pageName) => ({
  type: AuthPageActionTypes.AUTH_PAGE_CHANGE,
  payload: pageName,
});
