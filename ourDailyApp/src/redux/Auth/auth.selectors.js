import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;

export const selectCurrentUser = createSelector(
  [selectAuth],
  (authReducer) => authReducer.currentUser
);

// export const selectIsUserLogged = createSelector(
//   [selectAuth],
//   (authReducer) => authReducer.isLogged
// );

export const selectSignUpAlerts = createSelector(
  [selectAuth],
  (authReducer) => authReducer.signUpAlert
);

export const selectLogInAlerts = createSelector(
  [selectAuth],
  (authReducer) => authReducer.logInAlert
);
