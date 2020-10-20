import { NavActionTypes } from "./nav.types";

export const toggleNavHidden = () => ({
  type: NavActionTypes.TOGGLE_NAV_HIDDEN,
});

export const closeNav = () => ({
  type: NavActionTypes.CLOSE_NAV,
});
