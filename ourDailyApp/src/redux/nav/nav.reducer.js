import { NavActionTypes } from "./nav.types";

const INITIAL_STATE = {
  hidden: true,
};

const navReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavActionTypes.TOGGLE_NAV_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case NavActionTypes.CLOSE_NAV:
      return {
        ...state,
        hidden: true,
      };
    default:
      return state;
  }
};

export default navReducer;
