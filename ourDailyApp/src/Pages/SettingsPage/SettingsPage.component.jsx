import React from "react";
import ProfileContainer from "../../Containers/ProfileForm.container";
import TestContainer from "../../Containers/Test.container";
import SettingToolBar from "../../Containers/SettingToolBarContainer";
import {SideMenu} from "../../Components/Compound Components";
import { useMediaQuery } from "react-responsive";

import { Route, Switch, Redirect } from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";

const SettingsPage = () => {

  const width_above_1280 = useMediaQuery({ query: "(min-width: 1280px" });

  const router = useRouter();

  console.log(router.pathName);

  return (
    <div className="py-16 md:pt-24">
      <div className="flex justify-center mx-auto xl:w-4/5">
      {width_above_1280 ? <SideMenu className="mr-24" style={{height: "647px"}}>
          <SideMenu.SideMenuItem className={`${router.pathName === "/settings/profile" && "active"}`} onClick={() => router.push("/settings/profile")}>
            <SideMenu.ItemIcon className="iconfont icon-profile1 mr-2" />
            <SideMenu.ItemText className="itemtext">Profile</SideMenu.ItemText>
          </SideMenu.SideMenuItem>
          <SideMenu.SideMenuItem className={`${router.pathName === "/settings/changePassword" && "active"}`} onClick={() => router.push("/settings/changePassword")}>
            <SideMenu.ItemIcon className="iconfont icon-key mr-2" />
            <SideMenu.ItemText className="itemtext">Change password</SideMenu.ItemText>
          </SideMenu.SideMenuItem>
          <SideMenu.SideMenuItem className={`${router.pathName === "/settings/deleteMe" && "active"}`} onClick={() => router.push("/settings/deleteMe")}>
            <SideMenu.ItemIcon className="iconfont icon-line-deleteuser mr-2" />
            <SideMenu.ItemText className="itemtext">Delete account</SideMenu.ItemText>
          </SideMenu.SideMenuItem>
        </SideMenu> : <SettingToolBar/>}

        <div className="w-3/4 max-w-xl">
          <Switch>
            <Route exact path={`${router.matchPath}`}><Redirect to={{pathname: `${router.matchPath}/profile`}}/></Route>
            <Route exact path={`${router.matchPath}/profile`}><ProfileContainer/></Route>
            <Route exact path={`${router.matchPath}/test`}><TestContainer/></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
