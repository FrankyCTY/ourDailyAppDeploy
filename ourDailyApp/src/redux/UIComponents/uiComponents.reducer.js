import UIComponentsActionTypes from "./uiComponents.types";


const INITIATE_STATE = {
    showNavUIComponents: true,
};

const UIComponentsReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case UIComponentsActionTypes.SHOW_NAV_UI_COMPONENTS:
      return {
        ...state,
        showNavUIComponents: true,
      };
    case UIComponentsActionTypes.HIDE_NAV_UI_COMPONENTS:
      return {
        ...state,
        showNavUIComponents: false,
      };
    default:
      return state;
  }
};

export default UIComponentsReducer;
