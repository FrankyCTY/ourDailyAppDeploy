import React from "react";
import {Todo} from "../Components/Compound Components";
import {useSelector} from "react-redux";

function TodoMobileContainer({filteredTodos, activeTodoItem, onTodoItemClick}) {
  const {name: collectionName, createdAt: collectionCreatedAt} = useSelector(state => state.todo.openedCollection);
 /*  const openedCollection = useSelector(state => state.todo.openedCollection);
  const todoItemsToDisplay = useSelector(state => state.todo.todos[openedCollection.id] || []); */

  return <Todo className="flex-1">
    <Todo.MobileNav navText="Console" />
    <Todo.TodoHeader className="mb-4" tagBoxText={filteredTodos.length} title={collectionName}/>
    <div className="TodoList overflow-y-auto" style={{height: "calc(100vh - 175px)"}}>
        {filteredTodos.map((todo) => <Todo.TodoListItemBlock key={todo.id} 
    onClick={(e) => onTodoItemClick(e, todo)} active={activeTodoItem === todo.id} 
    subTitle={todo.item ? todo.item.title : todo.title}
    previewText={todo.item ? todo.item.body : todo.body}
    ></Todo.TodoListItemBlock>)}
    </div>
  </Todo>
}

export default TodoMobileContainer;