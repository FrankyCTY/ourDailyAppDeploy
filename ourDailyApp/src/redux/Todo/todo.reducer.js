import TodoActionTypes from "./todo.types";

import {populateTodoItemsToCollection, addTodoItemsToCollection} from "./todo.utils";

const INITIATE_STATE = {
  // collections: [{id: 123, name: "new col"}],
  collections: [],
  // todos: {#collection name: [{#todoItems}]}
  todos: {},
  openedCollection: {},
  isSideBarOpened: false,
  isFetchingCollections: false,
  isFetchingTodoItems: false,
};

const todoReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.POPULATE_TODO_COLLECTIONS:
      return {
        ...state,
        collections: action.collections,
      };
    case TodoActionTypes.POPULATE_TODO_ITEMS_TO_A_COLLECTION:
      return {
        ...state,
        todos: populateTodoItemsToCollection(state.todos, action.todoItems, action.parentCollectionId),
      }
    case TodoActionTypes.ADD_TODO_ITEMS_TO_A_COLLECTION:
      return {
        ...state,
        todos: addTodoItemsToCollection(state.todos, action.todos, action.parentCollectionId),
      }
    case TodoActionTypes.ADD_TODO_COLLECTION:
      return {
        ...state,
        collections: [...state.collections, action.name],
      }
    case TodoActionTypes.SET_OPENED_TODO_COLLECTION:
      return {
        ...state,
        openedCollection: action.collection,
      }
    case TodoActionTypes.SET_OPENED_TODO_COLLECTION_NAME:
      return {
        ...state,
        openedCollectionName: action.collectionName,
      }
    case TodoActionTypes.IS_FETCHING_COLLECTIONS_TRUE:
      return {
        ...state,
        isFetchingCollections: true,
      }
    case TodoActionTypes.IS_FETCHING_COLLECTIONS_FALSE:
      return {
        ...state,
        isFetchingCollections: false,
      }
    case TodoActionTypes.IS_FETCHING_TODO_ITEMS_TRUE:
      return {
        ...state,
        isFetchingTodoItems: true,
      }
    case TodoActionTypes.IS_FETCHING_TODO_ITEMS_FALSE:
      return {
        ...state,
        isFetchingTodoItems: false,
      }
    case TodoActionTypes.TOGGLE_SIDEBAR_OPEN:
      return {
        ...state,
        isSideBarOpened: !state.isSideBarOpened,
      }
    case TodoActionTypes.OPEN_TODO_SIDEBAR:
      return {
        ...state,
        isSideBarOpened: true,
      }
    case TodoActionTypes.CLOSE_TODO_SIDEBAR:
      return {
        ...state,
        isSideBarOpened: false,
      }
    default:
      return state;
  }
};

export default todoReducer;