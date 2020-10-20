import { matchPath } from "react-router-dom";
import { routes } from "../../../../Routers/LoggedInRouter/LoggedInRouter.component";

export const preloadComponent = (toPath) => {
  const routeObj = routes.find((route) =>
    matchPath(toPath, {
      path: route.path,
      exact: route.exact,
    })
  );

  const targetComponent = routeObj !== null ? routeObj.component : null;

  if (targetComponent !== null) {
    targetComponent.preload();
  }
};
