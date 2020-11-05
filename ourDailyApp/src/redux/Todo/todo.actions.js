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