import React, {useState} from "react";
import {Todo} from "../Components/Compound Components";
import ImageFrame from "../Components/ImageFrames/ImageFrame/ImageFrame.component";
import _arrayBufferToBase64 from "../utils/bufferArrayToBase64";
import useRouter from "../hooks/useRouter.hooks";
import {ReactComponent as CollectionSingleLogo} from '../assets/svg/collection single.svg';
import { useSelector } from "react-redux";

function TodoContainer(props) {
  return (
  <div className="flex">
  {<Todo.TodoSideBar className="TodoSideBar">
      <Todo.PairButton className="flex items-center pl-16" buttonText="Todo"><CollectionSingleLogo className="mr-4"/></Todo.PairButton>
    </Todo.TodoSideBar>}
  <Todo className="TodoContainer">
    <TodoHeader/>
    <div className="todoBodyContainer flex">
      <TodoListSection activeTodoItem={props.activeTodoItem} onTodoItemClick={props.onTodoItemClick} popupProps={props.popupProps}/>
      <TodoItemDetailsSection/>
    </div>
  </Todo>
  </div>
  )
}

function TodoHeader() {
  const router = useRouter();
  const userAvatar = useSelector(state => state.auth_P.userAvatar);
  const userName = useSelector((state) => state.auth_P.user.name);

  return (
    <div className="px-3" style={{borderBottom: "1px solid #303030"}}>
      <div className="px-6 flex items-center justify-between">
        <Todo.SearchBar/>
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

function TodoListSection({activeTodoItem, onTodoItemClick, popupProps}) {

  const onAddTodoBtnClick = () => {
    popupProps.setRenderPopup("addTodo");
    popupProps.setOpenPopup(true);
  }

  return (
    <div style={{borderRight: "1px solid #303030", height: "calc(100vh - 71px)"}} className="w-1/2 p-3 xl:w-5/12">
      <Todo.TodoHeader className="mb-4 flex-col-reverse items-start" tagBoxText="12" title="Todo">
        <Todo.AddTodoBtn onClick={onAddTodoBtnClick}/>
      </Todo.TodoHeader>
      <div className="TodoList overflow-y-auto" style={{height: "calc(100vh - 175px)"}}>
        {/* <Todo.TodoListItemBlock subTitle="Build backend for todolist" active="true"
        previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
        ></Todo.TodoListItemBlock> */}
        {new Array(20).fill(1).map((x, idx) => <Todo.TodoListItemBlock key={idx} onClick={(e) => onTodoItemClick(e, idx)} active={activeTodoItem === idx} subTitle="Build backend for todolist"
        previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
        ></Todo.TodoListItemBlock>)}
      </div>

    </div>
  )
}

function TodoItemDetailsSection() {
  return (
    <div className="w-1/2 px-4 pt-12 xl:w-10/12">
      <Todo.Group className="flex justify-between mb-4">
        <Todo.TitleText className="font-normal text-sm lg:text-lg">Build backend for todolist</Todo.TitleText>
        <Todo.ToolBox nobg={true} svgSize="1rem" svgMargin="0.1rem 0.5rem"/>
      </Todo.Group>
      <Todo.Text className="leading-6 text-xs lg:text-sm">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...
      </Todo.Text>
    </div>
  )
}

export default TodoContainer