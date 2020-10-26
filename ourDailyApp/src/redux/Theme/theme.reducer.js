import ThemeActionTypes from "./theme.types";

const INITIATE_STATE = {
    backgroundLuminosity: "",
    background: "default",
  };
  
  const themeReducer = (state = INITIATE_STATE, action) => {
    switch (action.type) {
      case ThemeActionTypes.SET_BACKGROUND_LUM:
        return {
          ...state,
          backgroundLuminosity: action.lum,
        };
      case ThemeActionTypes.SET_USER_BACKGROUND:
        return {
          ...state,
          background: action.bg,
        }
      default:
        return state;
    }
  };
  
  export default themeReducer;
  