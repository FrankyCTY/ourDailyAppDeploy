import { createSelector } from "reselect";

const selectAuthPageReducer = (state) => state.authPage;

export const selectAuthPage = createSelector(
  [selectAuthPageReducer],
  (authPageReducer) => authPageReducer.authPage
);
