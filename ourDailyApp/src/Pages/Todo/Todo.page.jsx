import React, {useState, useEffect} from "react";
import { useMediaQuery } from "react-responsive";
import TodoMobileContainer from "../../Containers/TodoMobile.container";
import TodoContainer from "../../Containers/Todo.container";

import {Popup, Todo, Formik} from "../../Components/Compound Components";

import useRecordClickTgt from "../../hooks/useRecordClickTgt.hooks";


const TodoPage = () => {
  const renderDesktopAppWithoutSideBar = useMediaQuery({ query: "(min-width: 640px" });

  const [activeTodoItem, onTodoItemClick] = useRecordClickTgt(null);

  const [openPopup, setOpenPopup] = useState(false);
  const [renderPopup, setRenderPopup] = useState(null);

  const popupProps = {
    setOpenPopup,
    setRenderPopup,
  }


  // 0 - 640px mobile view
  return <> 
    {renderDesktopAppWithoutSideBar ? 
    <TodoContainer activeTodoItem={activeTodoItem} onTodoItemClick={onTodoItemClick} popupProps={popupProps}/>
  : <TodoMobileContainer activeTodoItem={activeTodoItem} onTodoItemClick={onTodoItemClick} popupProps={popupProps}/>
  }
  <Popup.DefaultPopup open={openPopup} setOpenPopup={setOpenPopup} className="flex flex-col">
    {renderPopup === "addTodo" && <AddTodoPopup setOpenPopup={setOpenPopup}/>}
    {renderPopup === "createCollection" && <CreateCollectionPopup setOpenPopup={setOpenPopup}/>}
  </Popup.DefaultPopup>
  </>
}

export default TodoPage;

const AddTodoPopup = ({setOpenPopup}) => {

  const onCancelClick = () => {
    setOpenPopup(false);
  }

  return <>
    <Popup.Header className="px-4 py-2">
      <Todo.Text className="lg:text-base">ADD NOTE</Todo.Text>
    </Popup.Header>
    <Popup.Body className="px-4 py-6">
      <Todo.Text className="text-sm">Notes in here are saved in collections (a group of notes).</Todo.Text>
      <Todo.AttractText className="text-sm mb-4 inline-block">Learn more about creating collections</Todo.AttractText>
      <Formik.Group className="mb-4">
          <Formik.Label className="text-sm" htmlFor={"name"}>Note Title</Formik.Label>
          <Formik.Group>
              <Formik.Input className="text-xs" disabled={false} value={"todo text"} onChange={() => {}}></Formik.Input>
          </Formik.Group>
      </Formik.Group>

      <Formik.Group>
        <Formik.Label className="text-sm" htmlFor="body">Note body (Optional)</Formik.Label>
        <Formik.Group>
            <Formik.Textarea className="text-xs w-full" disabled={false} rows="4" 
            placeholder="e.g., Independent software developer focused on clean and elegant web designs. Avid reader. Active writer. Enthusiastic traveler." 
            type="text" id="bio" name="bio" style={{resize:"none"}}></Formik.Textarea>
        </Formik.Group>
      </Formik.Group>
    </Popup.Body>
    <Popup.Footer className="px-4 py-2 flex justify-end">
        <Formik.CancelBtn onClick={onCancelClick} className="text-xs capitalize text-white px-4 mr-2">Cancel</Formik.CancelBtn>
        <Formik.CustomSubmitBtn className="text-xs capitalize text-white px-4">Save to Todo</Formik.CustomSubmitBtn>
    </Popup.Footer>
  </>
}

const CreateCollectionPopup = ({setOpenPopup}) => {

  const onCancelClick = () => {
    setOpenPopup(false);
  }

  return <>
    <Popup.Header className="px-4 py-2">
      <Todo.Text className="lg:text-base">Create Collection</Todo.Text>
    </Popup.Header>
    <Popup.Body className="px-4 py-6">
      <Formik.Group className="mb-4">
          <Formik.Label className="text-sm" htmlFor={"name"}>Name</Formik.Label>
          <Formik.Group>
              <Formik.Input className="text-xs" placeholder="Collection Name" disabled={false} onChange={() => {}}></Formik.Input>
          </Formik.Group>
      </Formik.Group>
    </Popup.Body>
    <Popup.Footer className="px-4 py-2 flex justify-end">
        <Formik.CancelBtn onClick={onCancelClick} className="text-xs capitalize text-white px-4 mr-2">Cancel</Formik.CancelBtn>
        <Formik.CustomSubmitBtn className="text-xs capitalize text-white px-4">Create</Formik.CustomSubmitBtn>
    </Popup.Footer>
  </>
}