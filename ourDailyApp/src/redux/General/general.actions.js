import GeneralActionTypes from "./general.types";

export const setBackgroundLuminosity = (lum) => ({
  type: ThemeActionTypes.SET_BACKGROUND_LUM,
  lum,
});
