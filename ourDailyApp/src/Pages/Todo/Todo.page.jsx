import React, {useState, useEffect} from "react";
import { useMediaQuery } from "react-responsive";
import TodoMobileContainer from "../../Containers/TodoMobile.container";
import TodoContainer from "../../Containers/Todo.container";
import {useSelector, useDispatch} from "react-redux";
import {Popup, Todo, Formik, Preloader, ToolBar} from "../../Components/Compound Components";
import usePopup from "../../hooks/usePopup.hooks";
import useFuse from "../../hooks/useFuse.hooks";

import {createTodoCollectionStart, fetchTodoCollectionsStart, 
  fetchTodoItemsForACollectionStart, setOpenedTodoCollection
, toggleSideBarOpen} from "../../redux/Todo/todo.actions";

import useRecordClickTgt from "../../hooks/useRecordClickTgt.hooks";


const TodoPage = () => {
  const dispatch = useDispatch();

  const renderDesktopApp = useMediaQuery({ query: "(min-width: 640px" });
  const showToolbar = useMediaQuery({ query: "(max-width: 1279px" });

  const isFetchingCollections = useSelector(state => state.todo.isFetchingCollections);
  const todos = useSelector(state => state.todo.todos);
  const isSideBarOpened = useSelector(state => state.todo.isSideBarOpened);
  const openedCollection = useSelector(state => state.todo.openedCollection);
  const todoItemsToDisplay = useSelector(state => state.todo.todos[openedCollection.id]);
  const collections = useSelector(state => state.todo.collections);
  const searchTerm = useSelector(state => state.todo.searchTerm);

  const [activeTodoItem, onTodoItemClick] = useRecordClickTgt(null);

  const [openPopup, setOpenPopup, renderPopup, setRenderPopup] = usePopup();

  const [filteredTodos] = useFuse(searchTerm, todoItemsToDisplay);

  const popupProps = {
    setOpenPopup,
    setRenderPopup,
  }

  const onCreateCollectionClick = () => {
    setRenderPopup("createCollection");
    setOpenPopup(true);
  }

  const onAddTodoBtnClick = () => {
    setRenderPopup("addTodo");
    setOpenPopup(true);
  }

  const onCollectionClick = (e, collectionId, collectionName, createdAt) => {
    const isEmptyTodos = Object.keys(todos).length === 0;
    const needToFetchTodoItems = isEmptyTodos || todos[collectionId] === undefined;
    // set opened collection id
    dispatch(setOpenedTodoCollection({id: collectionId, name: collectionName, createdAt}));

    // Get todo items data for collection
    if(needToFetchTodoItems) {
      dispatch(fetchTodoItemsForACollectionStart(collectionId));
    }
    
  }
 

  const todoItemsQuantity = filteredTodos.length;


  useEffect(() => {
    if(collections.length === 0) dispatch(fetchTodoCollectionsStart());
  }, [dispatch, collections.length]);


  // 0 - 640px mobile view
  return <div className="flex"> 
    {<Todo.TodoSideBar showSideBar={isSideBarOpened} onCreateCollectionClick={onCreateCollectionClick} className="TodoSideBar"
    collections={isFetchingCollections ? new Array(5).fill(1).map((row, idx) => <Preloader.PreloaderRow key={idx} className="h-5 mb-4 w-3/4 mx-auto"/>)
    : collections.map((collection) => <Todo.PairButton key={collection.id} onClick={(e) => onCollectionClick(e, collection.id, collection.name, collection.createdAt)} className="flex items-center sm:pl-16" buttonText={collection.name}><Todo.CollectionSingleLogo className="mr-4"/></Todo.PairButton>)}
  />}
    {renderDesktopApp ? 
    <TodoContainer todoItemsQuantity={todoItemsQuantity} filteredTodos={filteredTodos} collections={collections} activeTodoItem={activeTodoItem} onTodoItemClick={onTodoItemClick} popupProps={popupProps}/>
  : <TodoMobileContainer todoItemsQuantity={todoItemsQuantity} filteredTodos={filteredTodos} activeTodoItem={activeTodoItem} onTodoItemClick={onTodoItemClick}/>
  }

  { showToolbar && <ToolBar className="expanded">
    <ToolBar.Btn ><ToolBar.BtnIcon className="iconfont icon-Search" /></ToolBar.Btn>
    <ToolBar.Btn onClick={onAddTodoBtnClick}><ToolBar.BtnIcon className="iconfont icon-plus"/></ToolBar.Btn>
    <ToolBar.Btn onClick={() => dispatch(toggleSideBarOpen())}><ToolBar.BtnIcon className="iconfont icon-sidebardefaulticon2x"/></ToolBar.Btn>
  </ToolBar>}

  <Popup.DefaultPopup open={openPopup} setOpenPopup={setOpenPopup} className="flex flex-col">
    {renderPopup === "addTodo" && <AddTodoPopup setOpenPopup={setOpenPopup}/>}
    {renderPopup === "createCollection" && <CreateCollectionPopup setOpenPopup={setOpenPopup}/>}
  </Popup.DefaultPopup>
  </div>
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
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(createTodoCollectionStart(name));
    setOpenPopup(false);
    setName("");
  }
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
              <Formik.Input className="text-xs" placeholder="Collection Name" disabled={false} value={name} onChange={(e) => {setName(e.target.value)}}></Formik.Input>
          </Formik.Group>
      </Formik.Group>
    </Popup.Body>
    <Popup.Footer className="px-4 py-2 flex justify-end">
        <Formik.CancelBtn onClick={onCancelClick} className="text-xs capitalize text-white px-4 mr-2">Cancel</Formik.CancelBtn>
        <Formik.CustomSubmitBtn onClick={onSubmit} className="text-xs capitalize text-white px-4">Create</Formik.CustomSubmitBtn>
    </Popup.Footer>
  </>
}