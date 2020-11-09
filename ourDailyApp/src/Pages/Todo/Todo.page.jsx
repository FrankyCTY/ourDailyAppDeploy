import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import TodoMobileContainer from "../../Containers/Todo/TodoMobile.container";
import TodoContainer from "../../Containers/Todo/Todo.container";
import { useSelector, useDispatch } from "react-redux";
import PixelSpinner from "../../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";
import { Popup, Todo, Formik, Preloader, ToolBar, ContextMenu } from "../../Components/Compound Components";
import useTodoPopup from "../../hooks/useTodoPopup.hooks";
import useFuse from "../../hooks/useFuse.hooks";
import useContextMenu from "../../hooks/useContextMenu.hooks";
import { setTodoContextMenuTgt } from "../../redux/General/general.actions";
import {
  createTodoCollectionStart, fetchTodoCollectionsStart,
  fetchTodoItemsForACollectionStart, setOpenedTodoCollection, renderTodoItemsDetailSectionFalse
  , toggleSideBarOpen, closeTodoSideBar, deleteTodoCollectionStart,
  createTodoItemStart, setOpenedTodoItem, deleteTodoItemsStart, toggleCheckTodoItemsMode
} from "../../redux/Todo/todo.actions";

import useRecordClickTgt from "../../hooks/useRecordClickTgt.hooks";


const TodoPage = () => {
  const dispatch = useDispatch();

  const renderDesktopApp = useMediaQuery({ query: "(min-width: 640px" });
  const showToolbar = useMediaQuery({ query: "(max-device-width: 1279px" });


  const isFetchingCollections = useSelector(state => state.todo.isFetchingCollections);
  const todos = useSelector(state => state.todo.todos);
  const isSideBarOpened = useSelector(state => state.todo.isSideBarOpened);
  const openedCollection = useSelector(state => state.todo.openedCollection);
  const todoItemsToDisplay = useSelector(state => state.todo.todos[openedCollection.id]);
  const collections = useSelector(state => state.todo.collections);
  const searchTerm = useSelector(state => state.todo.searchTerm);
  const checkTodoItemsMode = useSelector(state => state.todo.checkTodoItemsMode);
  const contextMenuTgt = useSelector(state => state.general.contextMenuTgt);

  const [activeTodoItem, onRecordTodoItemClick] = useRecordClickTgt(null);

  const { openPopup, toggleOpenPopup, renderPopup, setRenderPopup, onCreateCollectionClick, onAddTodoBtnClick } = useTodoPopup();

  const showCheckModeBinSvg = renderDesktopApp && checkTodoItemsMode;


  const [filteredTodos] = useFuse(searchTerm, todoItemsToDisplay);
  console.log({ filteredTodos })

  const popupProps = {
    toggleOpenPopup,
    setRenderPopup,
  }

  const onTodoItemClick = (e, todo) => {
    onRecordTodoItemClick(e, todo.id);
    dispatch(setOpenedTodoItem(todo));
  }

  const onCollectionClick = (e, collectionId, collectionName, createdAt, sortMethod) => {
    const isEmptyTodos = Object.keys(todos).length === 0;
    const needToFetchTodoItems = isEmptyTodos || todos[collectionId] === undefined;
    // set opened collection id
    dispatch(setOpenedTodoCollection({ id: collectionId, name: collectionName, createdAt, sortMethod }));

    // Get todo items data for collection
    if (needToFetchTodoItems) {
      dispatch(fetchTodoItemsForACollectionStart(collectionId));
    }

    // Close Sidebar
    dispatch(closeTodoSideBar());

  }


  const onExtendHandleContextMenu = (otherProps) => {
    const collection = otherProps.collection;

    // Open Collection and execute the following operation
    onCollectionClick(undefined, collection.id, collection.name, collection.createdAt);

    dispatch(setTodoContextMenuTgt(otherProps.collection));
  }

  const { xPos, yPos, renderMenu, handleContextMenu } = useContextMenu(onExtendHandleContextMenu);


  useEffect(() => {
    if (collections.length === 0) dispatch(fetchTodoCollectionsStart());
  }, [dispatch, collections.length]);

  const renderToolBar = () => {
    return <ToolBar className="expanded">
      {showToolbar && <ToolBar.Btn ><ToolBar.BtnIcon className="iconfont icon-Search" /></ToolBar.Btn>}
      <ToolBar.Btn onClick={onAddTodoBtnClick}><ToolBar.BtnIcon className="iconfont icon-plus" /></ToolBar.Btn>
      {showToolbar && <ToolBar.Btn onClick={() => dispatch(toggleSideBarOpen())}><ToolBar.BtnIcon className="iconfont icon-sidebardefaulticon2x" /></ToolBar.Btn>}
      <ToolBar.Btn onClick={() => dispatch(toggleCheckTodoItemsMode())}><ToolBar.BtnIcon className="iconfont icon-huabanfuben" /></ToolBar.Btn>
      {showCheckModeBinSvg && <ToolBar.Btn ><ToolBar.BtnIcon><Todo.BinSvg className="mx-auto" nobg="true" svgSize="1.1rem" /></ToolBar.BtnIcon></ToolBar.Btn>}
    </ToolBar>
  }


  // 0 - 640px mobile view
  return <div className="flex">
    {<Todo.TodoSideBar showSideBar={isSideBarOpened} withOverlay={showToolbar} closeTodoSideBar={closeTodoSideBar} onCreateCollectionClick={onCreateCollectionClick} className="TodoSideBar"
      collections={isFetchingCollections ? new Array(5).fill(1).map((row, idx) => <Preloader.PreloaderRow key={idx} className="h-5 mb-4 w-3/4 mx-auto" />)
        : collections.map((collection) => <Todo.PairButton key={collection.id} onContextMenu={(e) => handleContextMenu(e, "todoCollection", { collection })} onClick={(e) => onCollectionClick(e, collection.id, collection.name, collection.createdAt, collection.sortMethod)} className="flex items-center sm:pl-16" buttonText={collection.name}><Todo.CollectionSingleLogo className="mr-4" /></Todo.PairButton>)}
    />}
    {renderDesktopApp ?
      <TodoContainer filteredTodos={filteredTodos} collections={collections} activeTodoItem={activeTodoItem} onTodoItemClick={onTodoItemClick} popupProps={popupProps} />
      : <TodoMobileContainer filteredTodos={filteredTodos} activeTodoItem={activeTodoItem} onTodoItemClick={onTodoItemClick} />
    }

    {renderToolBar()}

    <Popup.DefaultPopup open={openPopup} toggleOpenPopup={toggleOpenPopup} className="flex flex-col">
      {renderPopup === "addTodo" && <AddTodoPopup toggleOpenPopup={toggleOpenPopup} openedCollection={openedCollection} />}
      {renderPopup === "createCollection" && <CreateCollectionPopup toggleOpenPopup={toggleOpenPopup} />}
      {renderPopup === "deleteTodoItem" && <DeleteTodoItemPopup toggleOpenPopup={toggleOpenPopup} />}
      {renderPopup === "deleteCollection" && <DeleteCollectionPopup toggleOpenPopup={toggleOpenPopup} />}
    </Popup.DefaultPopup>

    {renderMenu === "todoCollection" && <ContextMenu.TodoCollectionMenu contextMenuTgt={contextMenuTgt} popupProps={popupProps} xPos={xPos} yPos={yPos} />}
  </div>
}

export default TodoPage;

const AddTodoPopup = ({ toggleOpenPopup, openedCollection }) => {
  const dispatch = useDispatch();
  const isCreatingTodoItem = useSelector(state => state.todo.isCreatingTodoItem);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onInputChange = (e, setFnc) => {
    const { value } = e.target;
    setFnc(value);
  }

  const onCancelClick = () => {
    toggleOpenPopup();
  }

  const onSubmit = () => {
    const onSubmitCallbackFn = () => {
      toggleOpenPopup();
      setBody("");
      setTitle("");
    }
    dispatch(createTodoItemStart(title, body, openedCollection.id, onSubmitCallbackFn));
  }

  useEffect(() => {
    return () => {
      dispatch(setTodoContextMenuTgt({}));
    }
  }, [])

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
            value={body} type="text" id="body" name="body" style={{ resize: "none" }} onChange={(e) => onInputChange(e, setBody)}></Formik.Textarea>
        </Formik.Group>
      </Formik.Group>
    </Popup.Body>
    <Popup.Footer className="px-4 py-2 flex justify-end">
      <Formik.CancelBtn onClick={onCancelClick} className="text-xs capitalize text-white px-4 mr-2">Cancel</Formik.CancelBtn>
      <Formik.CustomSubmitBtn className="text-xs capitalize text-white px-4" onClick={onSubmit}>
        Save to {openedCollection.name}
        {isCreatingTodoItem && <PixelSpinner size={1.2} animationDuration={1500} style={{ marginLeft: "4px" }} />}
      </Formik.CustomSubmitBtn>
    </Popup.Footer>
  </>
}

const CreateCollectionPopup = ({ toggleOpenPopup }) => {
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
          <Formik.Input className="text-xs" placeholder="Collection Name" disabled={false} value={name} onChange={(e) => { setName(e.target.value) }}></Formik.Input>
        </Formik.Group>
      </Formik.Group>
    </Popup.Body>
    <Popup.Footer className="px-4 py-2 flex justify-end">
      <Formik.CancelBtn onClick={onCancelClick} className="text-xs capitalize text-white px-4 mr-2">Cancel</Formik.CancelBtn>
      <Formik.CustomSubmitBtn onClick={onSubmit} className="text-xs capitalize text-white px-4">Create</Formik.CustomSubmitBtn>
    </Popup.Footer>
  </>
}
const DeleteTodoItemPopup = ({ toggleOpenPopup }) => {
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
      : <Todo.Text className="text-sm mb-2">{openedTodoItem.title}</Todo.Text>;
  }

  const onSubmit = () => {
    if (checkTodoItemsMode) {
      const checkModeDeleteSuccessCallback = () => {
        // turn off popup
        toggleOpenPopup();
        // turn off check mode
        dispatch(toggleCheckTodoItemsMode());
      }
      dispatch(deleteTodoItemsStart(checkedTodoItemList.map(todoItem => todoItem.id), openedCollectionId, checkModeDeleteSuccessCallback));
    }
    else {
      const deleteSuccessCallback = () => {
        toggleOpenPopup();
        // for mobile view, return to todo items page from deleted detail page
        dispatch(renderTodoItemsDetailSectionFalse());
      }
      dispatch(deleteTodoItemsStart([openedTodoItem.id], openedCollectionId, deleteSuccessCallback));
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
        capitalize text-white px-4">Delete{isDeletingTodoItems && <PixelSpinner size={1.2} animationDuration={1500} style={{ marginLeft: "4px" }} />}
      </Formik.CustomSubmitBtn>
    </Popup.Footer>
  </>
}

const DeleteCollectionPopup = ({ toggleOpenPopup }) => {
  const dispatch = useDispatch();

  const openedCollectionId = useSelector(state => state.todo.openedCollection.id);
  const openedCollection = useSelector(state => state.todo.openedCollection);
  const isDeletingTodoCollection = useSelector(state => state.todo.isDeletingTodoItems);

  const onSubmit = () => {
    const deleteSuccessCallback = () => {
      toggleOpenPopup();
      // for mobile view, return to todo items page from deleted detail page
      dispatch(renderTodoItemsDetailSectionFalse());
    }
    dispatch(deleteTodoCollectionStart(openedCollectionId, deleteSuccessCallback));
  }

  const onCancelClick = () => {
    toggleOpenPopup();
  }

  return <>
    <Popup.Header className="px-4 py-2">
      <Todo.Text className="lg:text-base">Delete Collection</Todo.Text>
    </Popup.Header>
    <Popup.Body className="px-4 py-6">
      <Todo.Text className="text-sm mb-2">You ae going to delete collection:</Todo.Text>
      <Todo.Text className="text-sm mb-2 text-red-500">{openedCollection.name}</Todo.Text>
    </Popup.Body>
    <Popup.Footer className="px-4 py-2 flex justify-end">
      <Formik.CancelBtn onClick={onCancelClick} className="text-xs capitalize text-white px-4 mr-2">Cancel</Formik.CancelBtn>
      <Formik.CustomSubmitBtn onClick={onSubmit} className="text-xs 
        capitalize text-white px-4">Delete{isDeletingTodoCollection && <PixelSpinner size={1.2} animationDuration={1500} style={{ marginLeft: "4px" }} />}
      </Formik.CustomSubmitBtn>
    </Popup.Footer>
  </>
}