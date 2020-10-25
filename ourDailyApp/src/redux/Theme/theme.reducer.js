import ThemeActionTypes from "./theme.types";

const INITIATE_STATE = {
    backgroundLuminosity: "",
  };
  
  const themeReducer = (state = INITIATE_STATE, action) => {
    switch (action.type) {
      case ThemeActionTypes.SET_BACKGROUND_LUM:
        return {
          ...state,
          backgroundLuminosity: action.lum,
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;
  