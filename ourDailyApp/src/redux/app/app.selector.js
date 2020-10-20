import { createSelector } from "reselect";

const selectAppReducer = (state) => state.app;

export const selectApplications = createSelector(
  [selectAppReducer],
  (app) => app.applications
);

export const selectApplicationsInArray = createSelector(
  [selectApplications],
  (applications) => {
    return applications
      ? Object.keys(applications).map((key) => applications[key])
      : [];
  }
);

export const selectApp = (appRoute) =>
  createSelector([selectApplications], (applications) => {
    return applications ? (applications.filter(app => app.route === appRoute))[0] : null;
  });

export const selectIsFetching = createSelector(
  [selectAppReducer],
  (app) => app.isFetching
);

export const selectIsApplicationsLoaded = createSelector(
  [selectAppReducer],
  (app) => !!app.applications
);

export const selectIsAccessAppBtnsLoaded = createSelector(
  [selectAppReducer],
  (app) => !!app.accessAppBtns
);

export const selectAppQuantity = createSelector(
  [selectAppReducer],
  (app) => app.customAppLength
);

export const selectAccessAppBtns = createSelector([selectAppReducer], (app) => {
  return app.accessAppBtns ? app.accessAppBtns : [];
});
