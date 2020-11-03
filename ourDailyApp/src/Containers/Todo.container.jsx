import React, {useState} from "react";
import {Todo, ToolBar} from "../Components/Compound Components";
import {ReactComponent as ModifyLogo} from '../assets/svg/modify.svg';
import {ReactComponent as PinLogo} from '../assets/svg/pin.svg';
import {ReactComponent as BinLogo} from '../assets/svg/bin.svg';

function TodoContainer() {
  return <Todo>
    <div className="todoBodyContainer flex">
      <TodoListSection/>
      <TodoItemDetailsSection/>
    </div>
  </Todo>
}

function TodoListSection() {
  return (
    <div style={{width: "50%", borderRight: "2px solid #303030"}} className="p-2">
      <Todo.TodoHeader className="mb-4" tagBoxText="12" title="Todo"/>
      <Todo.TodoListItemBlock subTitle="Build backend for todolist" active="true"
      previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
      ></Todo.TodoListItemBlock>
      <Todo.TodoListItemBlock subTitle="Build backend for todolist"
      previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
      ></Todo.TodoListItemBlock>
      <Todo.TodoListItemBlock subTitle="Build backend for todolist"
      previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
      ></Todo.TodoListItemBlock>
      <Todo.TodoListItemBlock subTitle="Build backend for todolist"
      previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
      ></Todo.TodoListItemBlock>
      <Todo.TodoListItemBlock subTitle="Build backend for todolist"
      previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
      ></Todo.TodoListItemBlock>
      <Todo.TodoListItemBlock subTitle="Build backend for todolist"
      previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
      ></Todo.TodoListItemBlock>
    </div>
  )
}

function TodoItemDetailsSection() {
  return (
    <div style={{width: "50%" }}>
      <Todo.Group className="flex justify-between">
        <Todo.TitleText className="font-normal text-base">Build backend for todolist</Todo.TitleText>
        <Todo.ToolBox nobg={true} svgSize="1rem" svgMargin="0.1rem 0.2rem"/>
      </Todo.Group>
    </div>
  )
}

export default TodoContainer