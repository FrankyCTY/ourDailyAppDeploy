import TodoActionTypes from "./todo.types";

export const fetchTodoCollectionsStart = () => ({
  type: TodoActionTypes.FETCH_TODO_COLLECTIONS_START,
})
export const fetchTodoCollectionsSuccess = () => ({
  type: TodoActionTypes.FETCH_TODO_COLLECTIONS_SUCCESS,
})
export const fetchTodoCollectionsFailure = () => ({
  type: TodoActionTypes.FETCH_TODO_COLLECTIONS_FAILURE,
})
export const deleteTodoCollectionStart = (collectionId, successCallbackFn) => ({
  type: TodoActionTypes.DELETE_TODO_COLLECTION_START,
  collectionId,
  successCallbackFn,
})
export const deleteTodoCollectionSuccess = (collectionId, successCallbackFn) => ({
  type: TodoActionTypes.DELETE_TODO_COLLECTION_SUCCESS,
  collectionId,
  successCallbackFn,
})
export const deleteTodoCollectionFailure = () => ({
  type: TodoActionTypes.DELETE_TODO_COLLECTION_FAILURE,
})
export const fetchTodoItemsForACollectionStart = (collectionId) => ({
  type: TodoActionTypes.FETCH_TODO_ITEMS_FOR_A_COLLECTION_START,
  collectionId,
})
export const fetchTodoItemsForACollectionSuccess = () => ({
  type: TodoActionTypes.FETCH_TODO_ITEMS_FOR_A_COLLECTION_SUCCESS,
})
export const fetchTodoItemsForACollectionFailure = () => ({
  type: TodoActionTypes.FETCH_TODO_ITEMS_FOR_A_COLLECTION_FAILURE,
})
export const deleteTodoItemsStart = (todoItemIds, collectionId, successCallbackFn) => ({
  type: TodoActionTypes.DELETE_TODO_ITEMS_START,
  todoItemIds,
  collectionId,
  successCallbackFn,
})
export const deleteTodoItemsSuccess = (successCallbackFn) => ({
  type: TodoActionTypes.DELETE_TODO_ITEMS_SUCCESS,
  successCallbackFn,
})
export const deleteTodoItemsFailure = () => ({
  type: TodoActionTypes.DELETE_TODO_ITEMS_FAILURE,
})
export const createTodoItemStart = (title, body, collectionId, successCallbackFn) => ({
  type: TodoActionTypes.CREATE_TODO_ITEM_START,
  title,
  body,
  collectionId,
  successCallbackFn,
})
export const createTodoItemSuccess = (successCallbackFn) => ({
  type: TodoActionTypes.CREATE_TODO_ITEM_SUCCESS,
  successCallbackFn,
})
export const createTodoItemFailure = () => ({
  type: TodoActionTypes.CREATE_TODO_ITEM_FAILURE,
})
export const modifyTodoItemStart = (title, body, todoItemId, successCallbackFn) => ({
  type: TodoActionTypes.MODIFY_TODO_ITEM_START,
  title,
  body,
  todoItemId,
  successCallbackFn,
})
export const modifyTodoItemSuccess = (successCallbackFn) => ({
  type: TodoActionTypes.MODIFY_TODO_ITEM_SUCCESS,
  successCallbackFn,
})
export const modifyTodoItemFailure = () => ({
  type: TodoActionTypes.MODIFY_TODO_ITEM_FAILURE,
})
export const addTodoItem = (todoItem, collectionId) => ({
  type: TodoActionTypes.ADD_TODO_ITEMS_TO_A_COLLECTION,
  todoItem,
  collectionId,
})
export const populateTodoCollections = (collections) => ({
  type: TodoActionTypes.POPULATE_TODO_COLLECTIONS,
  collections,
})
export const populateTodoItemsToACollection = (todoItems, parentCollectionId) => ({
  type: TodoActionTypes.POPULATE_TODO_ITEMS_TO_A_COLLECTION,
  todoItems,
  parentCollectionId,
})
export const setOpenedTodoCollection = (collection) => ({
  type: TodoActionTypes.SET_OPENED_TODO_COLLECTION,
  collection,
})
export const setOpenedTodoItem = (todoItem) => ({
  type: TodoActionTypes.SET_OPENED_TODO_ITEM,
  todoItem,
})

export const createTodoCollectionStart = (name) => ({
  type: TodoActionTypes.CREATE_TODO_COLLECTION_START,
  name
})
export const addTodoCollection = (name) => ({
  type: TodoActionTypes.ADD_TODO_COLLECTION,
  name
})
export const isFetchingCollectionsTrue = () => ({
  type: TodoActionTypes.IS_FETCHING_COLLECTIONS_TRUE
})
export const isFetchingCollectionsFalse = () => ({
  type: TodoActionTypes.IS_FETCHING_COLLECTIONS_FALSE
})
export const isCreatingTodoItemTrue = () => ({
  type: TodoActionTypes.IS_CREATING_TODO_ITEM_TRUE
})
export const isCreatingTodoItemFalse = () => ({
  type: TodoActionTypes.IS_CREATING_TODO_ITEM_FALSE
})
export const isDeletingTodoItemsTrue = () => ({
  type: TodoActionTypes.IS_DELETING_TODO_ITEMS_TRUE
})
export const isDeletingTodoItemsFalse = () => ({
  type: TodoActionTypes.IS_DELETING_TODO_ITEMS_FALSE
})
export const isDeletingCollectionTrue = () => ({
  type: TodoActionTypes.IS_DELETING_COLLECTION_TRUE
})
export const isDeletingCollectionFalse = () => ({
  type: TodoActionTypes.IS_DELETING_COLLECTION_FALSE
})
export const isModifyingTodoItemTrue = () => ({
  type: TodoActionTypes.IS_MODIFYING_TODO_ITEM_TRUE
})
export const isModifyingTodoItemFalse = () => ({
  type: TodoActionTypes.IS_MODIFYING_TODO_ITEM_FALSE
})
export const isFetchingTodoItemsTrue = () => ({
  type: TodoActionTypes.IS_FETCHING_TODO_ITEMS_TRUE
})
export const isFetchingTodoItemsFalse = () => ({
  type: TodoActionTypes.IS_FETCHING_TODO_ITEMS_FALSE
})
export const toggleSideBarOpen = () => ({
  type: TodoActionTypes.TOGGLE_SIDEBAR_OPEN
})
export const openTodoSideBar = () => ({
  type: TodoActionTypes.OPEN_TODO_SIDEBAR
})
export const closeTodoSideBar = () => ({
  type: TodoActionTypes.CLOSE_TODO_SIDEBAR
})
export const setTodoSearchTerm = (term) => ({
  type: TodoActionTypes.SET_TODO_SEARCH_TERM,
  term,
})

export const modifyTodoItem = (todoItem) => ({
  type: TodoActionTypes.MODIFY_TODO_ITEM,
  todoItem,
})

export const toggleEditTodoItemMode = () => ({
  type: TodoActionTypes.TOGGLE_EDIT_TODO_ITEM_MODE,
})
export const toggleCheckTodoItemsMode = () => ({
  type: TodoActionTypes.TOGGLE_CHECK_TODO_ITEMS_MODE,
})
export const addToCheckedTodoItemList = (todoItem) => ({
  type: TodoActionTypes.ADD_TO_CHECKED_TODO_ITEM_LIST,
  todoItem,
})
export const removeFromCheckedTodoItemList = (todoItemId) => ({
  type: TodoActionTypes.REMOVE_FROM_CHECKED_TODO_ITEM_LIST,
  todoItemId,
})
export const toggleFromCheckedTodoItemList = (todoItem, todoId) => ({
  type: TodoActionTypes.TOGGLE_FROM_CHECKED_TODO_ITEM_LIST,
  todoItem,
  todoId,
})
// export const toggleTodoPopupOpen = () => ({
//   type: TodoActionTypes.TOGGLE_TODO_POPUP_OPEN,
// })
// export const setRenderTodoPopup = (popup) => ({
//   type: TodoActionTypes.SET_RENDER_TODO_POPUP,
//   popup,
// })
export const deleteTodoItems = (todoItemIds, collectionId) => ({
  type: TodoActionTypes.DELETE_TODO_ITEMS,
  todoItemIds,
  collectionId,
})
export const renderTodoItemsDetailSectionTrue = () => ({
  type: TodoActionTypes.RENDER_TODO_ITEM_DETAIL_SECTION_TRUE
})
export const renderTodoItemsDetailSectionFalse = () => ({
  type: TodoActionTypes.RENDER_TODO_ITEM_DETAIL_SECTION_FALSE
})
// export const setTodoContextMenuTgt = (target) => ({
//   type: TodoActionTypes.SET_TODO_CONTEXT_MENU_TGT,
//   target,
// })
export const deleteTodoCollection = (collectionId) => ({
  type: TodoActionTypes.DELETE_TODO_COLLECTION,
  collectionId,
})
export const deleteTodoItemsBaseOnCollectionId = (collectionId) => ({
  type: TodoActionTypes.DELETE_TODOITEMS_BASE_ON_COLLECTIONID,
  collectionId,
})