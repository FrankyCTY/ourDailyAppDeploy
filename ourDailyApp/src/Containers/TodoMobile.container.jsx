import React, {useState} from "react";
import {Application} from "../Components/Compound Components";

function TodoMobileContainer() {
  return <Application>
    <Application.MobileNav navText="Console" />
    <Application.TodoHeader className="mb-4" tagBoxText="12" title="Todo"/>
    <Application.TodoListItemBlock subTitle="Build backend for todolist" className="active"
    previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
    ></Application.TodoListItemBlock>
    <Application.TodoListItemBlock subTitle="Build backend for todolist"
    previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
    ></Application.TodoListItemBlock>
    <Application.TodoListItemBlock subTitle="Build backend for todolist"
    previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
    ></Application.TodoListItemBlock>
    <Application.TodoListItemBlock subTitle="Build backend for todolist"
    previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
    ></Application.TodoListItemBlock>
    <Application.TodoListItemBlock subTitle="Build backend for todolist"
    previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..."
    ></Application.TodoListItemBlock>
  </Application>
}

export default TodoMobileContainer