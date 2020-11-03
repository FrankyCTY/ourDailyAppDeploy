import React, {useEffect} from 'react';

import {Route} from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";

import TodoPage from "../../Pages/Todo/Todo.page";


const ApplicationRouter = () => {
  const router = useRouter();
  return (
    <div className="application-router">
      <Route exact path={`${router.matchPath}`}>
        <h1>Owned applications</h1>
      </Route>
      <Route exact path={`${router.matchPath}/todo`}>
        <TodoPage/>
      </Route>
    </div>
  )
}

export default ApplicationRouter