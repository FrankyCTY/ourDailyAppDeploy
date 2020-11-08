import GeneralActionTypes from "./general.types";

const INITIATE_STATE = {
  openPopup: false,
  renderPopup: "",
  contextMenuTgt: {},
};

const generalReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case GeneralActionTypes.TOGGLE_TODO_POPUP_OPEN:
      return {
        ...state,
        openPopup: !state.openPopup,
      }
    case GeneralActionTypes.SET_RENDER_TODO_POPUP:
      return {
        ...state,
        renderPopup: action.popup,
      }
      case GeneralActionTypes.SET_TODO_CONTEXT_MENU_TGT:
        return {
          ...state,
          contextMenuTgt: action.target,
        }
    default:
      return state;
  }
};

export default generalReducer;