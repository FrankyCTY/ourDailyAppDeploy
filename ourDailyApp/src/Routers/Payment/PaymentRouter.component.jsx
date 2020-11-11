import React from "react";
import FailContainer from "../../Containers/Fail.container";
import PaymentSuccessContainer from "../../Containers/PaymentSuccess.container";
import { Route, Redirect, Switch } from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";

const PaymentRouter = () => {

  const router = useRouter();

  return (
    <div className="shop-page">
      <Switch>
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
          <FailContainer result="failed" bigText="4xx/5xx" descText="Payment Canceled"/>
        </Route>
        <Route path={`${router.matchPath}/success`}>
          <PaymentSuccessContainer bigText="Thank You!" descText="Payment Success"/>
        </Route>
        <Route>
          <Redirect to="/404"></Redirect>
        </Route>
      </Switch>
    </div>
  );
};

export default PaymentRouter;
