import React from "react";
import {Todo, ToolBar} from "../Components/Compound Components";
import {toggleSideBarOpen, closeTodoSideBar} from "../redux/Todo/todo.actions";
import {useDispatch, useSelector} from "react-redux";

function TodoMobileContainer({activeTodoItem, onTodoItemClick, popupProps}) {
  const dispatch = useDispatch();
  const {name: collectionName, createdAt} = useSelector(state => state.todo.openedCollection);
  const openedCollection = useSelector(state => state.todo.openedCollection);
  const todoItemsToDisplay = useSelector(state => state.todo.todos[openedCollection.id] || []);

  const onAddTodoBtnClick = () => {
    popupProps.setRenderPopup("addTodo");
    popupProps.setOpenPopup(true);
  }

  return <Todo className="flex-1">
    <Todo.MobileNav navText="Console" />
    <Todo.TodoHeader className="mb-4" tagBoxText="12" title={collectionName}/>
    <div className="TodoList overflow-y-auto" style={{height: "calc(100vh - 175px)"}}>
        {todoItemsToDisplay.map((todo, idx) => <Todo.TodoListItemBlock key={idx} onClick={(e) => onTodoItemClick(e, idx)} active={activeTodoItem === idx} subTitle={todo.item ? todo.item.title : todo.title}
        previewText={todo.item ? todo.item.body : todo.body}
        ></Todo.TodoListItemBlock>)}
    </div>

    <ToolBar className="expanded">
      <ToolBar.Btn ><ToolBar.BtnIcon className="iconfont icon-Search" /></ToolBar.Btn>
      <ToolBar.Btn onClick={onAddTodoBtnClick}><ToolBar.BtnIcon className="iconfont icon-plus"/></ToolBar.Btn>
      <ToolBar.Btn onClick={() => dispatch(toggleSideBarOpen())}><ToolBar.BtnIcon className="iconfont icon-sidebardefaulticon2x"/></ToolBar.Btn>
    </ToolBar>
  </Todo>
}

export default TodoMobileContainer;