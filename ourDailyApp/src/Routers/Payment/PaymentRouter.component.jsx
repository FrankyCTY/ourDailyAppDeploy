import React from "react";
import WarningContainer from "../../Containers/WarningPage.container";
import { Route, Redirect } from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";

const PaymentRouter = () => {

  const router = useRouter();

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${router.matchPath}`}
      >
        <Redirect to="/404"></Redirect>
      </Route>
      <Route
        exact
        path={`${router.matchPath}/failed`}
      >
        <WarningContainer bigText="4xx/5xx" descText="Payment Canceled"/>
      </Route>
    </div>
  );
};

export default PaymentRouter;
