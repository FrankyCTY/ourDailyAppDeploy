import { createSelector } from "reselect";

const selectPigGameModalsReducer = (state) => state.pigGameModals;

export const selectShowSignInModal = createSelector(
  [selectPigGameModalsReducer],
  (pigGameModals) => pigGameModals.showSignInModal
);

export const selectSignInError = createSelector(
  [selectPigGameModalsReducer],
  (pigGameModals) => pigGameModals.signInError
);

export const selectIsProcessingSignIn = createSelector(
  [selectPigGameModalsReducer],
  (pigGameModals) => pigGameModals.isProcessingSignIn
);

export const selectShowInfoModal = createSelector(
  [selectPigGameModalsReducer],
  (pigGameModals) => pigGameModals.showInfoModal
);
