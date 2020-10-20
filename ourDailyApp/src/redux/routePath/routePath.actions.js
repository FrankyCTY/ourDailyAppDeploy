import RoutePathActionTypes from "./routePath.types";
export const updateRoutePath = (routePathDetails) => ({
  type: RoutePathActionTypes.UPDATE_ROUTE_PATH,
  payload: routePathDetails,
});
