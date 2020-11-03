import React from "react";
import { useMediaQuery } from "react-responsive";
import TodoMobileContainer from "../../Containers/TodoMobile.container";
import TodoContainer from "../../Containers/Todo.container";

import useRecordClickTgt from "../../hooks/useRecordClickTgt.hooks";

const TodoPage = () => {
  const renderDesktopAppWithoutSideBar = useMediaQuery({ query: "(min-width: 640px" });

  const [activeTodoItem, onTodoItemClick] = useRecordClickTgt(null);

  // 0 - 640px mobile view
  if (renderDesktopAppWithoutSideBar) {
    return <TodoContainer activeTodoItem={activeTodoItem} onTodoItemClick={onTodoItemClick}/>;
  } else {
    return <TodoMobileContainer activeTodoItem={activeTodoItem} onTodoItemClick={onTodoItemClick}/>;
  }
}

export default TodoPage;