import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Todo, Formik} from "../Components/Compound Components";
import {modifyTodoItemStart, toggleEditTodoItemMode} from "../redux/Todo/todo.actions";
import useTodoToolbox from "../hooks/useTodoToolbox.hooks";


function TodoItemDetailsContainer({children}) {

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
    <div>
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

export default TodoItemDetailsContainer;