import React from "react";

import Header from "../Header/Header.component";
import NavigationMenu from "../NavigationMenu/NavigationMenu.component";
import ShopFloatingNav from "../ShopFloatingNav/ShopFloatingNav.component";
import CartPreview from "../cartPreview/cartPreview.component";
import RoutePath from "../RoutePath/RoutePath.component";

// const RoutePath = React.lazy(() => import("../RoutePath/RoutePath.component"));

const NavUIComponents = () => {
  return (
    <React.Fragment>
      <ShopFloatingNav />
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
