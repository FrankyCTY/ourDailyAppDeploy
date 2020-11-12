import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useSelector} from "react-redux";

export function IsUserRedirect({
  isLogged,
  loggedInPath,
  children,
  ...restProps
}) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!isLogged) {
          return children;
        }

        if (isLogged) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }
        return null;
      }}
    />
  );
}

export function ProtectedRoute({ children, ...restProps }) {
  const isUserLogged = useSelector((state) => state.auth_P.isLogged);
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (isUserLogged) {
          return children;
        } else {
          return (
            <Redirect to={{ pathname: "/auth", state: { from: location } }} />
          );
        }
      }}
    />
  );
}
