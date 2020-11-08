import React from "react";
import {Todo, General} from "../../Components/Compound Components";
import {toggleFromCheckedTodoItemList, renderTodoItemsDetailSectionTrue, renderTodoItemsDetailSectionFalse} from "../../redux/Todo/todo.actions";
import useRouter from "../../hooks/useRouter.hooks";
import TodoItemDetailsContainer from "../TodoItemDetails.container";
import { CSSTransition } from "react-transition-group";
import {ReactComponent as CollectionLogo} from '../../assets/svg/collection.svg';
import "./TodoMobile.scss";

import {useSelector, useDispatch} from "react-redux";

function TodoMobileContainer({filteredTodos, activeTodoItem, onTodoItemClick}) {
  const {name: collectionName, createdAt: collectionCreatedAt} = useSelector(state => state.todo.openedCollection);
 
  const dispatch = useDispatch();
  const router = useRouter();

  const checkTodoItemsMode = useSelector(state => state.todo.checkTodoItemsMode);
  const openedCollection = useSelector(state => state.todo.openedCollection);
  const isOpenedCollectionBlank = Object.keys(openedCollection).length === 0;
  const renderDetailSection = useSelector(state => state.todo.renderTodoItemDetailSection);

  const onListItemBlockClick = (e, todo) => {
    const todoId = todo.id || todo.item.id;

    const todoToAdd = todo.id ? todo : todo.item;
    if(checkTodoItemsMode) {
      dispatch(toggleFromCheckedTodoItemList(todoToAdd, todoId));
    } else {
      onTodoItemClick(e, todoToAdd)
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

          {isOpenedCollectionBlank ? <div className="w-100 h-100 flex flex-col justify-center items-center">
          <General.Svg svgSize="4rem" className="mb-4 my-16"><CollectionLogo /></General.Svg>
          <Todo.TitleText>Welcome back</Todo.TitleText>
          </div> : <Todo.TodoHeader className="mb-4" tagBoxText={filteredTodos.length} title={collectionName}/>}

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