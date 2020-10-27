import ThemeActionTypes from "./theme.types";

const INITIATE_STATE = {
    theme: "",
  };
  
  const themeReducer_P = (state = INITIATE_STATE, action) => {
    switch (action.type) {
        case ThemeActionTypes.SET_THEME:
            return {
                ...state,
                theme: action.theme,
            }
        default:
        return state;
    }
  };
  
  export default themeReducer_P;
  