import React, { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import SettingsPage from "../../Pages/SettingsPage/Settings.page";
import CommentsConverterPage from "../../Pages/CommentsConverterPage/CommentsConverterPage.component";
import NoMatch from "../../Pages/NoMatchPage/NoMatchPage.component";
import { useDispatch } from "react-redux";
import UserActions from "../../redux/User/user.actions";
import useRouter from "../../hooks/useRouter.hooks";
import { fetchApplicationsStart } from "../../redux/app/app.actions";

import {ProtectedRoute } from "../../helpers/routes.helper";
import componentWithPreload from "../../utils/lazyLoading/componentWithPreload";
import NavUIComponents from "../../Components/NavUIComponents/NavUIComponents.component";
import {FloatBar} from "../../Components/Compound Components";
import useAccessControl from "../../hooks/useAccessControl.hooks";

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
  const {role, isLogged, viewAs} = useAccessControl();

  useEffect(() => {
    isLogged ? dispatch(UserActions.getUserWebDataStart())
    : dispatch(fetchApplicationsStart());

    role === "admin" && dispatch(fetchApplicationsStart());
  }, [dispatch, isLogged]);

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
  const showViewAsFloarBar = role === "admin" && !(router.pathName.toString().startsWith('/applications'));
  return (
    <>
    {showUiComponents && <NavUIComponents/>}
    { showViewAsFloarBar && <FloatBar.ViewAsFloatBar viewAsRole={viewAs}/>}
    <Switch>
        <Route exact path="/main">
            <MainPage />
        </Route>
        <Route path="/shop">
        <ShopRouter />
        </Route>
        <ProtectedRoute
        exact
        path="/commentsConverter"
        redirectUrl="/shop/commentsConverter"
        >
        <CommentsConverterPage />
        </ProtectedRoute>
        <Route exact path="/pigGame" redirectUrl="/shop/piggame">
        <PigGamePageWithSpinner />
        </Route>
        <ProtectedRoute  path="/settings" redirectUrl="/auth">
        <SettingsPage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/cart" redirectUrl="/auth">
        <CartPage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/wishlist" redirectUrl="/main">
        <WishListPage />
        </ProtectedRoute>
        <ProtectedRoute path='/applications' redirectUrl="/shop/todolist">
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
