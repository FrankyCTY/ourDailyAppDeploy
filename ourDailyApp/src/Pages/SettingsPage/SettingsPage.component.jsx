import React from "react";
import ProfileContainer from "../../Containers/ProfileForm.container";
import TestContainer from "../../Containers/Test.container";
import SettingToolBar from "../../Containers/SettingToolBarContainer";

import { Route, Switch, Redirect } from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";

const SettingsPage = () => {

  const router = useRouter();

  return (
    <div className="pt-10">
      <Switch>
        <Route exact path={`${router.matchPath}`}><Redirect to={{pathname: `${router.matchPath}/profile`}}/></Route>
        <Route exact path={`${router.matchPath}/profile`}><ProfileContainer/></Route>
        <Route exact path={`${router.matchPath}/test`}><TestContainer/></Route>
      </Switch>
      <SettingToolBar/>
    </div>
  );
};

export default SettingsPage;
