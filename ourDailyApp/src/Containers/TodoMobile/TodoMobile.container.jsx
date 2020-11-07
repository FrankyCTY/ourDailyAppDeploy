import React from "react";
import {Todo} from "../../Components/Compound Components";
import {toggleFromCheckedTodoItemList, renderTodoItemsDetailSectionTrue, renderTodoItemsDetailSectionFalse} from "../../redux/Todo/todo.actions";
import useRouter from "../../hooks/useRouter.hooks";
import TodoItemDetailsContainer from "../TodoItemDetails.container";
import { CSSTransition } from "react-transition-group";
import "./TodoMobile.scss";

import {useSelector, useDispatch} from "react-redux";

function TodoMobileContainer({filteredTodos, activeTodoItem, onTodoItemClick}) {
  const {name: collectionName, createdAt: collectionCreatedAt} = useSelector(state => state.todo.openedCollection);
 
  const dispatch = useDispatch();
  const router = useRouter();

  const checkTodoItemsMode = useSelector(state => state.todo.checkTodoItemsMode);
  const openedCollection = useSelector(state => state.todo.openedCollection);
  const renderDetailSection = useSelector(state => state.todo.renderTodoItemDetailSection);

  const onListItemBlockClick = (e, todo) => {
    if(checkTodoItemsMode) {
      dispatch(toggleFromCheckedTodoItemList(todo));
    } else {
      onTodoItemClick(e, todo)
      dispatch(renderTodoItemsDetailSectionTrue());
    }
  }
  
  return <div className="flex overflow-hidden w-screen h-screen relative">
    <CSSTransition in={renderDetailSection === false}
    timeout={300}
    classNames="pageTransition-primary"
    unmountOnExit
    >
      <div className="pageTransition">
        <Todo className="flex-1">
          <Todo.MobileNav navText="Console" onPrevLinkClick={() => router.push('/main')}>
          {checkTodoItemsMode && <Todo.BinSvg className="ml-auto" nobg="true" svgSize="1rem"/>}
          </Todo.MobileNav>
          <Todo.TodoHeader className="mb-4" tagBoxText={filteredTodos.length} title={collectionName}/>
          <div className="TodoList overflow-y-auto" style={{height: "calc(100vh - 175px)"}}>
              {filteredTodos.map((todo) => <Todo.TodoListItemBlock key={todo.id} 
          onListItemBlockClick={(e) => onListItemBlockClick(e, todo)} active={activeTodoItem === todo.id} 
          checkMode={checkTodoItemsMode}
          itemId={todo.id}
          subTitle={todo.item ? todo.item.title : todo.title}
          previewText={todo.item ? todo.item.body : todo.body}
          ></Todo.TodoListItemBlock>)}
          </div>
        </Todo>
      </div>
    </CSSTransition>

    <CSSTransition in={renderDetailSection === true}
    timeout={300}
    classNames="pageTransition-secondary"
    unmountOnExit
    >
      <div className="pageTransition">
      <Todo className="flex-1">
        <Todo.MobileNav navText={openedCollection.name} onPrevLinkClick={() => dispatch(renderTodoItemsDetailSectionFalse())}></Todo.MobileNav>
        <TodoItemDetailsContainer/>
      </Todo>
      </div>
    </CSSTransition>
  </div>
}

export default TodoMobileContainer;