import React from "react";

import './App.css';

import { Switch, Route } from "react-router-dom";
import { LoggedUserRedirect } from "./helpers/routes.helper";

import { useSelector } from "react-redux";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./utils/styled/globalStyle";
import { lightTheme, darkTheme } from "./utils/styled/theme";
import PixelSpinner from "./Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";
import {ProtectedRoute } from "./helpers/routes.helper";

// import NavUIComponents from "./Components/NavUIComponents/NavUIComponents.component";
import PageNotFoundPage from "./Pages/PageNotFound/PageNotFound.page";
import HomePage from "./Pages/Home/Home.page";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import "./App.scss";

const AuthRouter = React.lazy(() =>
  import("./Routers/AuthRouter/AuthRouter.component")
);

const LoggedInRouter = React.lazy(() => import ("./Routers/LoggedInRouter/LoggedInRouter.component"));
const PaymentRouter = React.lazy(() => import("./Routers/Payment/PaymentRouter.component"));


export const stripePromise = loadStripe('pk_test_51HcNpdJYtYSmYHOamYmfJifaZwVKjd0vVngDH8X6fdVWBodmHoeCT6yRh5PEYIiBwjaTl8447ojEB5uhQ7U8Bzvx00nH4DFlXo');

const App = () => {
  // const isCheckingJwt = useSelector((state) => state.auth.isCheckingJwt);

  const theme = useSelector((state) => state.theme_P.theme);
  // const showNavUIComponents = useSelector(state => state.UIComponents.showNavUIComponents);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Elements stripe={stripePromise}>
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
            <LoggedUserRedirect
              path={"/auth"}
              loggedInPath={"/main"}
            >
              <AuthRouter />
          </LoggedUserRedirect>
          <ProtectedRoute path='/payment'>
            <PaymentRouter/>
          </ProtectedRoute>
          <Route path="/">
            <LoggedInRouter/>
          </Route>
          

          </Switch>
          {/* {isCheckingJwt && <WholePageLoader.CheckingJwtLoader/>} */}
        </React.Suspense>
      </Elements>
    </ThemeProvider>
  );
};

export default App;
