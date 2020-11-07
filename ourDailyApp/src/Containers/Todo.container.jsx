import React, {useState} from "react";
import {Todo, Formik, Preloader} from "../Components/Compound Components";
import ImageFrame from "../Components/ImageFrames/ImageFrame/ImageFrame.component";
import {setTodoSearchTerm, modifyTodoItemStart, toggleEditTodoItemMode, toggleFromCheckedTodoItemList} from "../redux/Todo/todo.actions";
import _arrayBufferToBase64 from "../utils/bufferArrayToBase64";
import useTodoToolbox from "../hooks/useTodoToolbox.hooks";
import TodoItemDetailsContainer from "../Containers/TodoItemDetails.container";
import useRouter from "../hooks/useRouter.hooks";

import { useDispatch, useSelector } from "react-redux";

function TodoContainer(props) {

  return (
    <div className="flex-1">
    <Todo className="TodoContainer">
      <TodoHeader/>
      <div className="todoBodyContainer flex">
        <TodoListSection filteredTodos={props.filteredTodos} activeTodoItem={props.activeTodoItem} onTodoItemClick={props.onTodoItemClick} popupProps={props.popupProps}/>
        <div className="w-1/2 px-4 pt-12 xl:w-2/3 ">
          <TodoItemDetailsContainer/>
        </div>
      </div>
    </Todo>
  </div>
  )
}


function TodoHeader() {
  const dispatch = useDispatch();
  const router = useRouter();
  const userAvatar = useSelector(state => state.auth_P.userAvatar);
  const userName = useSelector((state) => state.auth_P.user.name);
  const searchTerm = useSelector(state => state.todo.searchTerm);
  

  return (
    <div className="px-3" style={{borderBottom: "1px solid #303030"}}>
      <div className="px-6 flex items-center justify-between">
        <Todo.SearchBar onChange={(e) => dispatch(setTodoSearchTerm(e.target.value))} value={searchTerm}/>
        <div className="flex items-center">
          <ImageFrame 
          className="mr-4 text-sm transform translate-y-1" src={_arrayBufferToBase64(userAvatar)}
          hasHoverEffect={false}
          size="2.5rem" halo={true} withExtraText={true}
          onClick={() => {router.push("/settings")}}/>
          <Todo.Text className="lg:text-sm">{userName}</Todo.Text>
        </div>
      </div>
    </div>
  )
}

function TodoListSection({filteredTodos, activeTodoItem, onTodoItemClick, popupProps}) {

  const dispatch = useDispatch();

  const isFetchingTodoItems = useSelector(state => state.todo.isFetchingTodoItems);
  const checkTodoItemsMode = useSelector(state => state.todo.checkTodoItemsMode);  

  const {name: collectionName, createdAt: collectionCreatedAt} = useSelector(state => state.todo.openedCollection);

  const onAddTodoBtnClick = () => {
    popupProps.setRenderPopup("addTodo");
    popupProps.toggleOpenPopup();
  }

  const onListItemBlockClick = (e, todo) => {
    const todoId = todo.id || todo.item.id;
    if(checkTodoItemsMode) {
      dispatch(toggleFromCheckedTodoItemList(todo, todoId));
    } else {
      onTodoItemClick(e, todo)
    }
  }

  const renderTodoItems = () => {
    return isFetchingTodoItems 
    ? 
    new Array(5).fill(1).map((row, idx) => <Preloader.PreloaderRow key={idx} className="h-5 mb-8 w-3/4 mx-auto"/>) 
    : 
    filteredTodos.map((todo) => <Todo.TodoListItemBlock key={todo.item ? todo.item.id : todo.id}
    onListItemBlockClick={(e) => onListItemBlockClick(e, todo)} active={activeTodoItem === (todo.id || todo.item.id)} 
    checkMode={checkTodoItemsMode}
    itemId={todo.item ? todo.item.id : todo.id}
    subTitle={todo.item ? todo.item.title : todo.title}
    previewText={todo.item ? todo.item.body : todo.body}
    ></Todo.TodoListItemBlock>)
  }

  return (
    <div style={{borderRight: "1px solid #303030", height: "calc(100vh - 71px)"}} className="w-1/2 p-3 xl:w-1/3">
      <Todo.TodoHeader className="mb-4 flex-col-reverse items-start" tagBoxText={filteredTodos.length} title={collectionName}>
        <Todo.AddTodoBtn onClick={onAddTodoBtnClick}/>
      </Todo.TodoHeader>
      <div className="TodoList overflow-y-auto" style={{height: "calc(100vh - 175px)"}}>
        {renderTodoItems()}
      </div>
    </div>
  )
}

export default TodoContainer