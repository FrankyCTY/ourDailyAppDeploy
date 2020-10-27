import ThemeActionTypes from "./theme.types";

export const setBackgroundLuminosity = (lum) => ({
  type: ThemeActionTypes.SET_BACKGROUND_LUM,
  lum,
});

export const setUserBackground = (bg) => ({
  type: ThemeActionTypes.SET_USER_BACKGROUND,
  bg,
})

export const setTheme = (theme) => ({
  type: ThemeActionTypes.SET_THEME,
  theme,
})