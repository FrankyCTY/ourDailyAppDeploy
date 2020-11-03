import React, {useState} from "react";
import {Todo, ToolBar} from "../Components/Compound Components";

function TodoMobileContainer() {
  return <Todo>
    <Todo.MobileNav navText="Console" />
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

    <ToolBar className="expanded">
      <ToolBar.Btn ><ToolBar.BtnIcon className="iconfont icon-Search" /></ToolBar.Btn>
      <ToolBar.Btn ><ToolBar.BtnIcon className="iconfont icon-plus"/></ToolBar.Btn>
      <ToolBar.Btn ><ToolBar.BtnIcon className="iconfont icon-sidebardefaulticon2x"/></ToolBar.Btn>
    </ToolBar>
  </Todo>
}

export default TodoMobileContainer