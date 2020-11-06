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