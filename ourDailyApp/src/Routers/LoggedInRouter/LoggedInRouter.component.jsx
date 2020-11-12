import React, { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import SettingsPage from "../../Pages/SettingsPage/Settings.page";
import CommentsConverterPage from "../../Pages/CommentsConverterPage/CommentsConverterPage.component";
import NoMatch from "../../Pages/NoMatchPage/NoMatchPage.component";
import { useDispatch } from "react-redux";
import UserActions from "../../redux/User/user.actions";
import useRouter from "../../hooks/useRouter.hooks";

import {ProtectedRoute } from "../../helpers/routes.helper";
import componentWithPreload from "../../utils/lazyLoading/componentWithPreload";
import NavUIComponents from "../../Components/NavUIComponents/NavUIComponents.component";



const ShopRouter = componentWithPreload(() =>
import("../ShopRouter/ShopRouter.component")
);
const ApplicationRouter = React.lazy(() => import("../ApplicationRouter/ApplicationRouter.component"));

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
    dispatch(UserActions.getUserWebDataStart());
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
  


  const router = useRouter();
  const showUiComponents = !(router.pathName.toString().startsWith('/applications'))

  return (
    <>
    {showUiComponents&& <NavUIComponents/>}
    <Switch>
        <ProtectedRoute exact path="/main">
            <MainPage />
        </ProtectedRoute>
        <ProtectedRoute path="/shop">
        <ShopRouter />
        </ProtectedRoute>
        <ProtectedRoute
        exact
        path="/commentsConverter"
        >
        <CommentsConverterPage />
        </ProtectedRoute>
        <Route exact path="/pigGame">
        <PigGamePageWithSpinner />
        </Route>
        <ProtectedRoute  path="/settings">
        <SettingsPage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/cart">
        <CartPage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/wishlist">
        <WishListPage />
        </ProtectedRoute>
        <ProtectedRoute path='/applications'>
          <ApplicationRouter/>
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
