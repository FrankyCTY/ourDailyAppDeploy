import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useSelector} from "react-redux";

export function LoggedUserRedirect({
  loggedInPath,
  children,
  ...restProps
}) {
  const isUserLogged = useSelector((state) => state.auth_P.isLogged);

  return (
    <Route
      {...restProps}
      render={() => {
        if (!isUserLogged) {
          return children;
        } else {
          return <Redirect to={loggedInPath} />;
        }
      }}
    />
  );
}

export function ProtectedRoute({ redirectUrl, children, ...restProps }) {
  const isUserLogged = useSelector((state) => state.auth_P.isLogged);
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (isUserLogged) {
          return children;
        } else {
          return (
            <Redirect to={{ pathname: redirectUrl, state: { from: location } }} />
          );
        }
      }}
    />
  );
}
