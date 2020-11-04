import React, {useState} from "react";
import {Todo, Formik} from "../Components/Compound Components";
import ImageFrame from "../Components/ImageFrames/ImageFrame/ImageFrame.component";
import _arrayBufferToBase64 from "../utils/bufferArrayToBase64";
import useRouter from "../hooks/useRouter.hooks";
import {ReactComponent as CollectionSingleLogo} from '../assets/svg/collection single.svg';
import Fuse from 'fuse.js';
import { useSelector } from "react-redux";

function TodoContainer(props) {

  const todos = [
    {
      "title": "Build backend for todolist",
      "body": "Lorem Ipsum is simply dummy text of the printing and typesetting indus...",
    },
    {
      "title": "Hello World",
      "body": "Default Body Text",
    }
  ]
  const [searchTerm, setSearchTerm] = useState("");

  const options = {
    shouldSort: true,
    threshold: 0.4,
    keys: ['title', 'body'],
  }

  const filteredTodos = React.useMemo(() => {
    // return [] if no search term or no users
    if (!searchTerm || !todos) return todos || [];
    // if user has entered search term and we have todos
    const fuse = new Fuse(todos, options);

    return fuse.search(searchTerm);
  }, [todos, searchTerm]);

  console.log({filteredTodos})
  
  const onCreateCollectionClick = () => {
    props.popupProps.setRenderPopup("createCollection");
    props.popupProps.setOpenPopup(true);
  }
  
  return (
    <div className="flex">
    {<Todo.TodoSideBar onCreateCollectionClick={onCreateCollectionClick} className="TodoSideBar">
        <Todo.PairButton className="flex items-center pl-16" buttonText="Todo"><CollectionSingleLogo className="mr-4"/></Todo.PairButton>
      </Todo.TodoSideBar>}
    <Todo className="TodoContainer flex-1">
      <TodoHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className="todoBodyContainer flex">
        <TodoListSection filteredTodos={filteredTodos} activeTodoItem={props.activeTodoItem} onTodoItemClick={props.onTodoItemClick} popupProps={props.popupProps}/>
        <TodoItemDetailsSection/>
      </div>
    </Todo>
  </div>
  )
}

function TodoHeader({searchTerm, setSearchTerm}) {
  const router = useRouter();
  const userAvatar = useSelector(state => state.auth_P.userAvatar);
  const userName = useSelector((state) => state.auth_P.user.name);
  

  return (
    <div className="px-3" style={{borderBottom: "1px solid #303030"}}>
      <div className="px-6 flex items-center justify-between">
        <Todo.SearchBar onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
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

  const onAddTodoBtnClick = () => {
    popupProps.setRenderPopup("addTodo");
    popupProps.setOpenPopup(true);
  }

  return (
    <div style={{borderRight: "1px solid #303030", height: "calc(100vh - 71px)"}} className="w-1/2 p-3 xl:w-1/3">
      <Todo.TodoHeader className="mb-4 flex-col-reverse items-start" tagBoxText="12" title="Todo">
        <Todo.AddTodoBtn onClick={onAddTodoBtnClick}/>
      </Todo.TodoHeader>
      <div className="TodoList overflow-y-auto" style={{height: "calc(100vh - 175px)"}}>
        {filteredTodos.map((todo, idx) => <Todo.TodoListItemBlock key={idx} onClick={(e) => onTodoItemClick(e, idx)} active={activeTodoItem === idx} subTitle={todo.item ? todo.item.title : todo.title}
        previewText={todo.item ? todo.item.body : todo.body}
        ></Todo.TodoListItemBlock>)}
      </div>
    </div>
  )
}

function TodoItemDetailsSection() {

  const [isEditMode, setIsEditMode] = useState(false);

  const onfinishEditClick = () => {
    setIsEditMode(false);
  }

  const onCancelEditClick = () => {
    setIsEditMode(false);
  }

  const renderTitle = () => {
    return isEditMode ? <Formik.Input className="font-normal text-sm lg:text-lg" defaultValue="Build backend for todolist"></Formik.Input> 
    : <Todo.TitleText className="font-normal text-sm lg:text-lg">Build backend for todolist</Todo.TitleText>;
  }

  const renderBody = () => {
    return isEditMode ? <Formik.Textarea className="leading-6 text-xs lg:text-sm" disabled={false} rows="10" 
    defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..." 
    type="text" id="bio" name="bio"></Formik.Textarea>
    : <Todo.Text className="leading-6 text-xs lg:text-sm">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...
    </Todo.Text>;
  }

  return (
    <div className="w-1/2 px-4 pt-12 xl:w-2/3">
    <Todo.Group className="flex justify-between mb-4">
      {/* <Todo.TitleText className="font-normal text-sm lg:text-lg">Build backend for todolist</Todo.TitleText> */}
      {renderTitle()}
      <Todo.ToolBox onModifyClick={() => setIsEditMode(!isEditMode)} nobg={true} svgSize="1rem" svgMargin="0.1rem 0.5rem"/>
    </Todo.Group>
    {renderBody()}

    {isEditMode && <Todo.Group>
      <button className="text-white py-1 px-2 rounded-lg mr-2 mt-4" 
      style={{background: `#0059A6`}} onClick={onfinishEditClick}><i className="iconfont icon-tick"/></button>
      
      <button className="text-white py-1 px-2 rounded-lg" 
      style={{background: `#848484`}} onClick={onCancelEditClick}><i className="iconfont icon-chax"/></button>
    </Todo.Group>}
  </div>
  )
}

export default TodoContainer