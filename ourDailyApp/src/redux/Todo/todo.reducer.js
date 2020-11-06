import TodoActionTypes from "./todo.types";

import {populateTodoItemsToCollection, addTodoItemsToCollection, deleteTodoItemsFromTodos, toggleTodoItemFromList, modifyTodoItem} from "./todo.utils";

const INITIATE_STATE = {
  // collections: [{id: 123, name: "new col"}],
  collections: [],
  // todos: {#collection name: [{#todoItems}]}
  todos: {},
  openedCollection: {},
  openedTodoItem: {},
  isSideBarOpened: false,
  isFetchingCollections: false,
  isFetchingTodoItems: false,
  isCreatingTodoItem: false,
  isModifyingTodoItem: false,
  isDeletingTodoItems: false,
  editTodoItemMode: false,
  checkTodoItemsMode: false,
  checkedTodoItemList: [],
  searchTerm: "",
  openPopup: false,
  renderPopup: null,
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
        todos: addTodoItemsToCollection(state.todos, action.todoItem, action.collectionId),
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
    case TodoActionTypes.SET_OPENED_TODO_ITEM:
      return {
        ...state,
        openedTodoItem: action.todoItem,
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
    case TodoActionTypes.IS_CREATING_TODO_ITEM_TRUE:
      return {
        ...state,
        isCreatingTodoItem: true,
      }
    case TodoActionTypes.IS_CREATING_TODO_ITEM_FALSE:
      return {
        ...state,
        isCreatingTodoItem: false,
      }
    case TodoActionTypes.IS_MODIFYING_TODO_ITEM_TRUE:
      return {
        ...state,
        isModifyingTodoItem: true,
      }
    case TodoActionTypes.IS_MODIFYING_TODO_ITEM_FALSE:
      return {
        ...state,
        isModifyingTodoItem: false,
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
    case TodoActionTypes.IS_DELETING_TODO_ITEMS_TRUE:
      return {
        ...state,
        isDeletingTodoItems: true,
      }
    case TodoActionTypes.IS_DELETING_TODO_ITEMS_FALSE:
      return {
        ...state,
        isDeletingTodoItems: false,
      }
    case TodoActionTypes.SET_TODO_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.term,
      }
    case TodoActionTypes.MODIFY_TODO_ITEM:
      return {
        ...state,
        todos: modifyTodoItem(state.todos, action.todoItem, state.openedCollection.id),
      }
    case TodoActionTypes.TOGGLE_EDIT_TODO_ITEM_MODE:
      return {
        ...state,
        editTodoItemMode: !state.editTodoItemMode,
      }
    case TodoActionTypes.TOGGLE_CHECK_TODO_ITEMS_MODE:
      return {
        ...state,
        checkTodoItemsMode: !state.checkTodoItemsMode,
      }
    case TodoActionTypes.ADD_TO_CHECKED_TODO_ITEM_LIST:
      return {
        ...state,
        checkedTodoItemList: [...state.checkedTodoItemList, action.todoItem]
      }
    case TodoActionTypes.REMOVE_FROM_CHECKED_TODO_ITEM_LIST:
      return {
        ...state,
        checkedTodoItemList: state.checkedTodoItemList.filter(checkedTodoItem => checkedTodoItem.id !== action.todoItemId),
      }
    case TodoActionTypes.TOGGLE_FROM_CHECKED_TODO_ITEM_LIST:
      return {
        ...state,
        checkedTodoItemList: toggleTodoItemFromList(state.checkedTodoItemList, action.todoItem),
      }
    case TodoActionTypes.TOGGLE_TODO_POPUP_OPEN:
      return {
        ...state,
        openPopup: !state.openPopup,
      }
    case TodoActionTypes.SET_RENDER_TODO_POPUP:
      return {
        ...state,
        renderPopup: action.popup,
      }
    case TodoActionTypes.DELETE_TODO_ITEMS:
      return {
        ...state,
        todos: deleteTodoItemsFromTodos(state.todos, action.todoItemIds, action.collectionId),
      }
    default:
      return state;
  }
};

export default todoReducer;