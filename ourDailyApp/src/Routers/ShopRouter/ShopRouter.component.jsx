import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useRouter from "../../hooks/useRouter.hooks";
import { fetchApplicationsStart } from "../../redux/app/app.actions";

const ShopRouter = () => {
  const ApplicationOverview = React.lazy(() =>
    import("../../Pages/ApplicationOverview/ApplicationOverview.component")
  );
  const ApplicationDetailTemplateWithPreloader = React.lazy(() =>
    import(
      "../../Pages/Templates/ApplicationDetailTemplate/ApplicationDetailTemplateWithPreloader.component"
    )
  );

  const isLogged = useSelector(state => state.auth_P.isLogged);

  const dispatch = useDispatch();
  useEffect(() => {
    isLogged && dispatch(fetchApplicationsStart());
  }, [dispatch]);

  const router = useRouter();

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${router.matchPath}`}
        component={ApplicationOverview}
      />
      <Route
        exact
        path={`${router.matchPath}/:applicationId`}
        component={ApplicationDetailTemplateWithPreloader}
      />
    </div>
  );
};

export default ShopRouter;
