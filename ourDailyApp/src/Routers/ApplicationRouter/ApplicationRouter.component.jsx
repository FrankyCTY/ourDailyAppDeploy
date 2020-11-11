import React from 'react';

import {Route} from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";
import {useSelector} from "react-redux";
import {PaidAppRoute} from "../../helpers/routes.helper";

import TodoPage from "../../Pages/Todo/Todo.page";


const ApplicationRouter = () => {

  const ownedApplications = useSelector(state => state.app.accessAppBtns);

  const isOwnApp = (targetRoute, ownedApps) => {
    const isFound = ownedApps.find(app => app.appRoute === targetRoute);
    return isFound;
  }


  const router = useRouter();
  return (
    <div className="application-router">
      <Route exact path={`${router.matchPath}`}>
        <h1>Owned applications</h1>
      </Route>
      {/* @planToImplement use a loop to loop all the application route */}
      <PaidAppRoute exact isPaid={isOwnApp("applications/todo", ownedApplications)} path={`${router.matchPath}/todo`} redirectUrl={"/shop/todolist"}>
        <TodoPage/>
      </PaidAppRoute>
    </div>
  )
}

export default ApplicationRouter