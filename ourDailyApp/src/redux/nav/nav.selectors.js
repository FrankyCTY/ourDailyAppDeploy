import { createSelector } from "reselect";

const selectNav = (state) => state.nav;

export const selectHidden = createSelector([selectNav], (nav) => nav.hidden);
