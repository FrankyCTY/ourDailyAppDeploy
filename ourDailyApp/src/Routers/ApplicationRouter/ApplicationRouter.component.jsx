import React from 'react';

import {Route, Switch} from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";

const TodoPage = React.lazy(() => import ("../../Pages/Todo/Todo.page"));


const ApplicationRouter = () => {

  const PigGamePageWithSpinner = React.lazy(() =>
    import("../../games/Pig_game/pigGamePageWithSpinner.component")
  );

  const router = useRouter();
  return (
    <div className="application-router">
      <Switch>
        <Route exact path={`${router.matchPath}`}>
          <h1>Owned applications</h1>
        </Route>
        {/* @planToImplement use a loop to loop all the application route */}
        
        <Route exact path={`${router.matchPath}/todo`}>
          <TodoPage/>
        </Route>
        <Route exact path={`${router.matchPath}/piggame`} redirectUrl="/shop/piggame">
        <PigGamePageWithSpinner />
        </Route>
      </Switch>
    </div>
  )
}

export default ApplicationRouter