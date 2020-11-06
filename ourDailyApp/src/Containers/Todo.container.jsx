import React, {useState} from "react";
import {Todo, Formik, Preloader} from "../Components/Compound Components";
import ImageFrame from "../Components/ImageFrames/ImageFrame/ImageFrame.component";
import {setTodoSearchTerm, modifyTodoItemStart, toggleEditTodoItemMode, toggleFromCheckedTodoItemList} from "../redux/Todo/todo.actions";
import _arrayBufferToBase64 from "../utils/bufferArrayToBase64";
import useTodoToolbox from "../hooks/useTodoToolbox.hooks";
import useRouter from "../hooks/useRouter.hooks";

import { useDispatch, useSelector } from "react-redux";

function TodoContainer(props) {

  return (
    <div className="flex-1">
    <Todo className="TodoContainer">
      <TodoHeader/>
      <div className="todoBodyContainer flex">
        <TodoListSection filteredTodos={props.filteredTodos} activeTodoItem={props.activeTodoItem} onTodoItemClick={props.onTodoItemClick} popupProps={props.popupProps}/>
        <TodoItemDetailsSection/>
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

function TodoItemDetailsSection() {

  const dispatch = useDispatch();

  const [openedTodoItem, isEditMode] = useTodoToolbox();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onInputChange = (e, setFn) => {
    const {value} = e.target;
    console.log({value})
    setFn(value);
  }

  const onfinishEditClick = (e, todoItemId) => {
    dispatch(modifyTodoItemStart(title, body, todoItemId, () => dispatch(toggleEditTodoItemMode())));
  }

  const onCancelEditClick = () => {
    dispatch(toggleEditTodoItemMode());
  }

  React.useEffect(() => {
    if(openedTodoItem.title && openedTodoItem.body)
    {
      setTitle(openedTodoItem.title);
      setBody(openedTodoItem.body);
    }
  }, [openedTodoItem.title, openedTodoItem.body]);

  const renderTitle = () => {
    return isEditMode ? <Formik.Input className="font-normal text-sm lg:text-lg" value={title} onChange={(e) => onInputChange(e, setTitle)}></Formik.Input> 
  : <Todo.TitleText className="font-normal text-sm lg:text-lg">{openedTodoItem.title}</Todo.TitleText>;
  }

  const renderBody = () => {
    return isEditMode ? <Formik.Textarea className="leading-6 text-xs lg:text-sm" disabled={false} rows="10" 
    value={body} onChange={(e) => onInputChange(e, setBody)}
    type="text" id="bio" name="bio"></Formik.Textarea>
    : <Todo.Text className="leading-6 text-xs lg:text-sm">
      {openedTodoItem.body}
    </Todo.Text>;
  }

  return (
    <div className="w-1/2 px-4 pt-12 xl:w-2/3">
    <Todo.Group className="flex justify-between mb-4">
      {/* <Todo.TitleText className="font-normal text-sm lg:text-lg">Build backend for todolist</Todo.TitleText> */}
      {renderTitle()}
      {Object.keys(openedTodoItem).length !== 0 && <Todo.ToolBox nobg={true} svgSize="1rem" svgMargin="0.1rem 0.5rem"/>}
    </Todo.Group>
    {renderBody()}

    {isEditMode && <Todo.Group>
      <button className="text-white py-1 px-2 rounded-lg mr-2 mt-4" 
      style={{background: `#0059A6`}} onClick={(e) => onfinishEditClick(e, openedTodoItem.id)}><i className="iconfont icon-tick"/></button>
      
      <button className="text-white py-1 px-2 rounded-lg" 
      style={{background: `#848484`}} onClick={onCancelEditClick}><i className="iconfont icon-chax"/></button>
    </Todo.Group>}
  </div>
  )
}

export default TodoContainer