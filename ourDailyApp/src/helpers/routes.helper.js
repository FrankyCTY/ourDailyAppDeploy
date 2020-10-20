import React from "react";
import { Route, Redirect } from "react-router-dom";

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

export function ProtectedRoute({ isLogged, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (isLogged) {
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
