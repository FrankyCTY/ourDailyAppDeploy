import { createSelector } from "reselect";

const selectShopNav = (state) => state.shopNav;

export const selectHidden = createSelector(
  [selectShopNav],
  (shopNav) => shopNav.hidden
);
