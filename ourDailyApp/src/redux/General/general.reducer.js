import GeneralActionTypes from "./general.types";

const INITIATE_STATE = {
  openPopup: false,
  renderPopup: "",
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
    default:
      return state;
  }
};

export default generalReducer;