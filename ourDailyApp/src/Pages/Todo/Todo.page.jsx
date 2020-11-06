import React, {useState, useEffect} from "react";
import { useMediaQuery } from "react-responsive";
import TodoMobileContainer from "../../Containers/TodoMobile.container";
import TodoContainer from "../../Containers/Todo.container";
import {useSelector, useDispatch} from "react-redux";
import PixelSpinner from "../../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";
import {Popup, Todo, Formik, Preloader, ToolBar} from "../../Components/Compound Components";
import usePopup from "../../hooks/useTodoPopup.hooks";
import useFuse from "../../hooks/useFuse.hooks";

import {createTodoCollectionStart, fetchTodoCollectionsStart, 
  fetchTodoItemsForACollectionStart, setOpenedTodoCollection
, toggleSideBarOpen, closeTodoSideBar, createTodoItemStart, setOpenedTodoItem, deleteTodoItemsStart} from "../../redux/Todo/todo.actions";

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

  const [activeTodoItem, onRecordTodoItemClick] = useRecordClickTgt(null);

  const [openPopup, toggleOpenPopup, renderPopup, setRenderPopup] = usePopup();

  const [filteredTodos] = useFuse(searchTerm, todoItemsToDisplay);

  const popupProps = {
    toggleOpenPopup,
    setRenderPopup,
  }

  const onCreateCollectionClick = () => {
    setRenderPopup("createCollection");
    toggleOpenPopup();
  }

  const onAddTodoBtnClick = () => {
    setRenderPopup("addTodo");
    toggleOpenPopup();
  }

  const onTodoItemClick = (e, todo) => {
    console.log({todo})
    onRecordTodoItemClick(e, todo.id);
    dispatch(setOpenedTodoItem(todo));
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


  useEffect(() => {
    if(collections.length === 0) dispatch(fetchTodoCollectionsStart());
  }, [dispatch, collections.length]);


  // 0 - 640px mobile view
  return <div className="flex"> 
    {<Todo.TodoSideBar showSideBar={isSideBarOpened} withOverlay={showToolbar} closeTodoSideBar={closeTodoSideBar} onCreateCollectionClick={onCreateCollectionClick} className="TodoSideBar"
    collections={isFetchingCollections ? new Array(5).fill(1).map((row, idx) => <Preloader.PreloaderRow key={idx} className="h-5 mb-4 w-3/4 mx-auto"/>)
    : collections.map((collection) => <Todo.PairButton key={collection.id} onClick={(e) => onCollectionClick(e, collection.id, collection.name, collection.createdAt)} className="flex items-center sm:pl-16" buttonText={collection.name}><Todo.CollectionSingleLogo className="mr-4"/></Todo.PairButton>)}
  />}
    {renderDesktopApp ? 
    <TodoContainer filteredTodos={filteredTodos} collections={collections} activeTodoItem={activeTodoItem} onTodoItemClick={onTodoItemClick} popupProps={popupProps}/>
  : <TodoMobileContainer filteredTodos={filteredTodos} activeTodoItem={activeTodoItem} onTodoItemClick={onTodoItemClick}/>
  }

  { showToolbar && <ToolBar className="expanded">
    <ToolBar.Btn ><ToolBar.BtnIcon className="iconfont icon-Search" /></ToolBar.Btn>
    <ToolBar.Btn onClick={onAddTodoBtnClick}><ToolBar.BtnIcon className="iconfont icon-plus"/></ToolBar.Btn>
    <ToolBar.Btn onClick={() => dispatch(toggleSideBarOpen())}><ToolBar.BtnIcon className="iconfont icon-sidebardefaulticon2x"/></ToolBar.Btn>
  </ToolBar>}

  <Popup.DefaultPopup open={openPopup} toggleOpenPopup={toggleOpenPopup} className="flex flex-col">
    {renderPopup === "addTodo" && <AddTodoPopup toggleOpenPopup={toggleOpenPopup} openedCollection={openedCollection}/>}
    {renderPopup === "createCollection" && <CreateCollectionPopup toggleOpenPopup={toggleOpenPopup}/>}
    {renderPopup === "deleteTodoItem" && <DeleteTodoItemPopup toggleOpenPopup={toggleOpenPopup}/>}
  </Popup.DefaultPopup>
  </div>
}

export default TodoPage;

const AddTodoPopup = ({toggleOpenPopup, openedCollection}) => {
  const dispatch = useDispatch();
  const isCreatingTodoItem = useSelector(state => state.todo.isCreatingTodoItem);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onInputChange = (e, setFnc) => {
    const {value} = e.target;
    setFnc(value);
  }

  const onCancelClick = () => {
    toggleOpenPopup();
  }

  const onSubmit = () => {
    dispatch(createTodoItemStart(title, body, openedCollection.id, () => toggleOpenPopup()));
  }

  return <>
    <Popup.Header className="px-4 py-2">
      <Todo.Text className="lg:text-base">ADD NOTE</Todo.Text>
    </Popup.Header>
    <Popup.Body className="px-4 py-6">
      <Todo.Text className="text-sm">Notes in here are saved in collections (a group of notes).</Todo.Text>
      <Todo.AttractText className="text-sm mb-4 inline-block">Learn more about creating collections</Todo.AttractText>
      <Formik.Group className="mb-4">
          <Formik.Label className="text-sm" htmlFor={"title"}>Note Title</Formik.Label>
          <Formik.Group>
              <Formik.Input className="text-xs" id="title" disabled={false} value={title} onChange={(e) => onInputChange(e, setTitle)}></Formik.Input>
          </Formik.Group>
      </Formik.Group>

      <Formik.Group>
        <Formik.Label className="text-sm" htmlFor="body">Note body (Optional)</Formik.Label>
        <Formik.Group>
            <Formik.Textarea className="text-xs w-full" disabled={false} rows="4" 
            placeholder="e.g., Independent software developer focused on clean and elegant web designs. Avid reader. Active writer. Enthusiastic traveler." 
            type="text" id="body" name="body" style={{resize:"none"}} onChange={(e) => onInputChange(e, setBody)}></Formik.Textarea>
        </Formik.Group>
      </Formik.Group>
    </Popup.Body>
    <Popup.Footer className="px-4 py-2 flex justify-end">
        <Formik.CancelBtn onClick={onCancelClick} className="text-xs capitalize text-white px-4 mr-2">Cancel</Formik.CancelBtn>
<Formik.CustomSubmitBtn className="text-xs capitalize text-white px-4" onClick={onSubmit}>
  Save to {openedCollection.name}
  {isCreatingTodoItem && <PixelSpinner size={1.2} animationDuration={1500} style={{marginLeft: "4px"}}/>}
  </Formik.CustomSubmitBtn>
    </Popup.Footer>
  </>
}

const CreateCollectionPopup = ({toggleOpenPopup}) => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(createTodoCollectionStart(name));
    toggleOpenPopup();
    setName("");
  }
  const onCancelClick = () => {
    toggleOpenPopup();
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
const DeleteTodoItemPopup = ({toggleOpenPopup}) => {
  const dispatch = useDispatch();

  const checkedTodoItemList = useSelector(state => state.todo.checkedTodoItemList);
  const checkTodoItemsMode = useSelector(state => state.todo.checkTodoItemsMode);
  const openedTodoItem = useSelector(state => state.todo.openedTodoItem);
  const openedCollectionId = useSelector(state => state.todo.openedCollection.id);
  const isDeletingTodoItems = useSelector(state => state.todo.isDeletingTodoItems);

  const renderDeletePopupList = () => {
    return checkTodoItemsMode
    ?
      checkedTodoItemList.map(todoItemObj => <Todo.Text key={todoItemObj.id} className="text-sm mb-2">{todoItemObj.title}</Todo.Text>)
    : <Todo.Text className="text-sm mb-2">{openedTodoItem.title}</Todo.Text> ;
  }

  const onSubmit = () => {
    if(checkTodoItemsMode) {
      dispatch(deleteTodoItemsStart(checkedTodoItemList.map(todoItem => todoItem.id), openedCollectionId, () => toggleOpenPopup()));
    } 
    else {
      dispatch(deleteTodoItemsStart([openedTodoItem.id], openedCollectionId, () => toggleOpenPopup()));
    }
  }

  const onCancelClick = () => {
    toggleOpenPopup();
  }

  return <>
    <Popup.Header className="px-4 py-2">
      <Todo.Text className="lg:text-base">Delete Note(s)</Todo.Text>
    </Popup.Header>
    <Popup.Body className="px-4 py-6">
    <Todo.Text className="text-sm mb-2">Items selected: </Todo.Text>
      <div className="border-2 h-32 pl-2 py-2 overflow-auto">
        {renderDeletePopupList()}
      </div>
    </Popup.Body>
    <Popup.Footer className="px-4 py-2 flex justify-end">
        <Formik.CancelBtn onClick={onCancelClick} className="text-xs capitalize text-white px-4 mr-2">Cancel</Formik.CancelBtn>
        <Formik.CustomSubmitBtn onClick={onSubmit} className="text-xs 
        capitalize text-white px-4">Delete{isDeletingTodoItems && <PixelSpinner size={1.2} animationDuration={1500} style={{marginLeft: "4px"}}/>}
        </Formik.CustomSubmitBtn>
    </Popup.Footer>
  </>
}