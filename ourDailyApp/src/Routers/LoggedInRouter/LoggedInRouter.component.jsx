import React, { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import SettingsPage from "../../Pages/SettingsPage/SettingsPage.component";
import CommentsConverterPage from "../../Pages/CommentsConverterPage/CommentsConverterPage.component";
import NoMatch from "../../Pages/NoMatchPage/NoMatchPage.component";
import {  useDispatch, useSelector } from "react-redux";
import {getAppsInCartStart, getAppsInWishlistStart} from "../../redux/cart/cart.actions";

import {  ProtectedRoute } from "../../helpers/routes.helper";
import componentWithPreload from "../../utils/lazyLoading/componentWithPreload";
import NavUIComponents from "../../Components/NavUIComponents/NavUIComponents.component";



const ShopRouter = componentWithPreload(() =>
import("../ShopRouter/ShopRouter.component")
);

export const routes = [
    {
      path: "/shop",
      exact: false,
      component: ShopRouter,
    },
  ];


const LoggedInRouter = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppsInCartStart());
    dispatch(getAppsInWishlistStart());
  }, [dispatch]);

  const WishListPage = React.lazy(() =>
    import("../../Pages/wishlistPage/wishlistPage.component")
  );
  const CartPage = React.lazy(() =>
    import("../../Pages/cartPage/cartPage.component")
  );
  const MainPage = React.lazy(() =>
    import("../../Pages/mainPage/mainPage.component")
  );
  const PigGamePageWithSpinner = React.lazy(() =>
    import("../../games/Pig_game/pigGamePageWithSpinner.component")
  );
  


  const isUserLogged = useSelector((state) => state.auth_P.isLogged);

  return (
    <>
    <NavUIComponents/>
    <Switch>
        <ProtectedRoute exact isLogged={isUserLogged} path="/main">
            <MainPage />
        </ProtectedRoute>
        <ProtectedRoute isLogged={isUserLogged} path="/shop">
        <ShopRouter />
        </ProtectedRoute>
        <ProtectedRoute
        exact
        isLogged={isUserLogged}
        path="/commentsConverter"
        >
        <CommentsConverterPage />
        </ProtectedRoute>
        <Route exact isLogged={isUserLogged} path="/pigGame">
        <PigGamePageWithSpinner />
        </Route>
        <ProtectedRoute exact isLogged={isUserLogged} path="/settings">
        <SettingsPage />
        </ProtectedRoute>
        <ProtectedRoute exact isLogged={isUserLogged} path="/cart">
        <CartPage />
        </ProtectedRoute>
        <ProtectedRoute exact isLogged={isUserLogged} path="/wishlist">
        <WishListPage />
        </ProtectedRoute>
        <Route
            // render={() => (isUserLogged ? <NoMatch /> : <Redirect to="/login" />)}
            component={NoMatch}
          ><Redirect to="/404"/></Route>
        </Switch>
    </>
  );
};

export default LoggedInRouter;
