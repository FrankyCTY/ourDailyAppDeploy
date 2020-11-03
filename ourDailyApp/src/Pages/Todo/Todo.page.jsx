import React from "react";
import { useMediaQuery } from "react-responsive";
import TodoMobileContainer from "../../Containers/TodoMobile.container";
import TodoContainer from "../../Containers/Todo.container";

const TodoPage = () => {
  const renderDesktopAppWithoutSideBar = useMediaQuery({ query: "(min-width: 640px" });

  // 0 - 640px mobile view
  if (renderDesktopAppWithoutSideBar) {
    return <TodoContainer/>;
  } else {
    return <TodoMobileContainer/>;
  }
}

export default TodoPage;