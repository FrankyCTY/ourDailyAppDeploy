import React from "react";
import {Todo, Preloader, General} from "../../Components/Compound Components";
import ImageFrame from "../../Components/ImageFrames/ImageFrame/ImageFrame.component";
import {setTodoSearchTerm, toggleFromCheckedTodoItemList} from "../../redux/Todo/todo.actions";
import _arrayBufferToBase64 from "../../utils/bufferArrayToBase64";
import TodoItemDetailsContainer from "../../Containers/TodoItemDetails.container";
import useRouter from "../../hooks/useRouter.hooks";
import {ReactComponent as CollectionLogo} from '../../assets/svg/collection.svg';
import defaultUser from "../../assets/images/uploadAvatarPage/default.jpg";

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
  const user = useSelector((state) => state.auth_P.user) || {};
  const searchTerm = useSelector(state => state.todo.searchTerm);
  

  return (
    <div className="px-3" style={{borderBottom: "1px solid #303030"}}>
      <div className="px-6 flex items-center justify-between">
        <Todo.SearchBar onChange={(e) => dispatch(setTodoSearchTerm(e.target.value))} value={searchTerm}/>
        <div className="flex items-center">
          <ImageFrame 
          className="mr-4 text-sm transform translate-y-1" src={_arrayBufferToBase64(userAvatar) || defaultUser}
          hasHoverEffect={false}
          size="2.5rem" halo={true} withExtraText={true}
          onClick={() => {router.push("/settings")}}/>
          <Todo.Text className="lg:text-sm">{user.name || "Welcome"}</Todo.Text>
        </div>
      </div>
    </div>
  )
}

function TodoListSection({filteredTodos, activeTodoItem, onTodoItemClick, popupProps}) {

  const dispatch = useDispatch();

  const isFetchingTodoItems = useSelector(state => state.todo.isFetchingTodoItems);
  const checkTodoItemsMode = useSelector(state => state.todo.checkTodoItemsMode);
  const openedCollection = useSelector(state => state.todo.openedCollection);
  const isOpenedCollectionBlank = Object.keys(openedCollection).length === 0;

  const {name: collectionName, createdAt: collectionCreatedAt} = useSelector(state => state.todo.openedCollection);

  const onAddTodoBtnClick = () => {
    popupProps.setRenderPopup("addTodo");
    popupProps.toggleOpenPopup();
  }

  const onListItemBlockClick = (e, todo) => {

    const todoId = todo.id || todo.item.id;

    const todoToAdd = todo.id ? todo : todo.item;
    
    if(checkTodoItemsMode) {
      dispatch(toggleFromCheckedTodoItemList(todoToAdd, todoId));
    } else {
      onTodoItemClick(e, todoToAdd)
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
    { isOpenedCollectionBlank ?  
      <div className="w-100 h-100 flex flex-col justify-center items-center">
          <General.Svg svgSize="8rem" className="mb-4"><CollectionLogo /></General.Svg>
          <Todo.TitleText>Welcome back</Todo.TitleText>
      </div>
    : <>
      <Todo.TodoHeader className="mb-4 flex-col-reverse items-start" 
      tagBoxText={filteredTodos.length} title={collectionName}
      >
        <Todo.AddTodoBtn onClick={onAddTodoBtnClick}/>
      </Todo.TodoHeader>
      <div className="TodoList overflow-y-auto" style={{height: "calc(100vh - 175px)"}}>
        {renderTodoItems()}
      </div>
    </>}
  </div>
  )
}

export default TodoContainer