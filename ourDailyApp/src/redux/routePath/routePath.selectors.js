import { createSelector } from "reselect";

const selectRoutePath = (state) => state.routePath;

export const selectPage = createSelector(
  [selectRoutePath],
  (routePath) => routePath.page
);

export const selectDetails = createSelector(
  [selectRoutePath],
  (routePath) => routePath.details
);
