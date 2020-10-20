import React from "react";

import './App.css';

import { Switch, Route } from "react-router-dom";
import { IsUserRedirect } from "./helpers/routes.helper";

import { useSelector } from "react-redux";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./utils/styled/globalStyle";
import { lightTheme, darkTheme } from "./utils/styled/theme";
import PixelSpinner from "./Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";

// import NavUIComponents from "./Components/NavUIComponents/NavUIComponents.component";
import PageNotFoundPage from "./Pages/PageNotFound/PageNotFound.page";
import HomePage from "./Pages/Home/Home.page";

import "./App.scss";

const AuthRouter = React.lazy(() =>
  import("./Routers/AuthRouter/AuthRouter.component")
);

const LoggedInRouter = React.lazy(() => import ("./Routers/LoggedInRouter/LoggedInRouter.component"));



const App = () => {
  const isUserLogged = useSelector((state) => state.auth_P.isLogged);
  // const showNavUIComponents = useSelector(state => state.UIComponents.showNavUIComponents);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <React.Suspense 
        fallback={
          <PixelSpinner
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            size={2}
            animationDuration={800}
          />
        }
      >
        <Switch>
          <Route
            exact
            path="/"
            loggedInPath={"/main"}
          >
            <HomePage />
          </Route>
          <Route exact path="/404"><PageNotFoundPage/></Route>
          <IsUserRedirect
            isLogged={isUserLogged}
            path={"/auth"}
            loggedInPath={"/main"}
          >
            <AuthRouter />
        </IsUserRedirect>
        <Route path="/">
          <LoggedInRouter/>
        </Route>

        </Switch>
      </React.Suspense>
    </ThemeProvider>
  );
};

export default App;
