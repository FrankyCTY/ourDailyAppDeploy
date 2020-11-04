import React, {useState, useEffect} from "react";
import { useMediaQuery } from "react-responsive";
import TodoMobileContainer from "../../Containers/TodoMobile.container";
import TodoContainer from "../../Containers/Todo.container";

import {Popup, Todo} from "../../Components/Compound Components";

import useRecordClickTgt from "../../hooks/useRecordClickTgt.hooks";


const TodoPage = () => {
  const renderDesktopAppWithoutSideBar = useMediaQuery({ query: "(min-width: 640px" });

  const [activeTodoItem, onTodoItemClick] = useRecordClickTgt(null);

  const [openPopup, setOpenPopup] = useState(true);
  const [renderPopup, setRenderPopup] = useState("addTodo");

  const popupProps = {
    setOpenPopup,
    setRenderPopup,
  }


  // 0 - 640px mobile view
  return <> 
    {renderDesktopAppWithoutSideBar ? 
    <TodoContainer activeTodoItem={activeTodoItem} onTodoItemClick={onTodoItemClick} popupProps={popupProps}/>
  : <TodoMobileContainer activeTodoItem={activeTodoItem} onTodoItemClick={onTodoItemClick}/>
  }
  <Popup.DefaultPopup open={openPopup} setOpenPopup={setOpenPopup} className="flex flex-col">
    {renderPopup === "addTodo" && <AddTodoPopup/>}
  </Popup.DefaultPopup>
  </>
}

export default TodoPage;

const AddTodoPopup = () => {
  return <>
    <Popup.Header className="px-4 py-2">
      <Todo.Text className="lg:text-base">ADD TODO</Todo.Text>
    </Popup.Header>
    <Popup.Body className="px-4 py-2">
      <Todo.Text className="text-sm">Notes in here are saved in collections (a group of notes).</Todo.Text>
      <Todo.Text className="text-xs">Learn more about creating collections</Todo.Text>

    </Popup.Body>
    <Popup.Footer className="px-4 py-2"></Popup.Footer>
  </>
}