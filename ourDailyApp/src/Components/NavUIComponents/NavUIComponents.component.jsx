import React from "react";

import { useSelector } from "react-redux";
import Header from "../Header/Header.component";
import NavigationMenu from "../NavigationMenu/NavigationMenu.component";
import ShopFloatingNav from "../ShopFloatingNav/ShopFloatingNav.component";
import CartPreview from "../cartPreview/cartPreview.component";
import RoutePath from "../RoutePath/RoutePath.component";


// const RoutePath = React.lazy(() => import("../RoutePath/RoutePath.component"));

const NavUIComponents = () => {

  const isLogged = useSelector(state => state.auth_P.isLogged);

  return (
    <React.Fragment>
      {isLogged && <ShopFloatingNav />}
      <CartPreview />
      <Header />
      <NavigationMenu />
      {/* <React.Suspense fallback={<h1 style={{ display: "none" }}>Loading</h1>}>
        <RoutePath />
      </React.Suspense> */}
      <RoutePath />
    </React.Fragment>
  );
};

export default NavUIComponents;
