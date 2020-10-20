import { createSelector } from "reselect";

const selectPigGamePlayer2Reducer = (state) => state.pigGamePlayer2;

export const selectPlayer2DisplayName = createSelector(
  [selectPigGamePlayer2Reducer],
  (pigGamePlayer2) => pigGamePlayer2.displayName
);

export const selectPlayer2PhotoURL = createSelector(
  [selectPigGamePlayer2Reducer],
  (pigGamePlayer2) => pigGamePlayer2.photoURL
);

export const selectIsLogged = createSelector(
  [selectPigGamePlayer2Reducer],
  (pigGamePlayer2) => pigGamePlayer2.isLogged
);
