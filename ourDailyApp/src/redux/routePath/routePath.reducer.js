import RoutePathActionTypes from "./routePath.types";
import { updateStates } from "./routePath.utils";

const INITIAL_STATE = {
  page: "",
  details: {},
};

const routePathReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RoutePathActionTypes.UPDATE_ROUTE_PATH:
      return updateStates(state, action.payload);
    default:
      return state;
  }
};

export default routePathReducer;
