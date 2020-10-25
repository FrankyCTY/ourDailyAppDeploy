import ThemeActionTypes from "./theme.types";

export const setBackgroundLuminosity = (lum) => ({
  type: ThemeActionTypes.SET_BACKGROUND_LUM,
  lum,
});