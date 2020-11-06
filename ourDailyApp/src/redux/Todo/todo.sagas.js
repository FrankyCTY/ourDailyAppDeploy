import {takeLeading, call, put, all} from "redux-saga/effects";

import TodoActionTypes from "./todo.types";

import {createCollection, fetchCollections, fetchTodoItemsForACollection, createTodoItem, modifyTodoItemToBackene} from "./todo.requests";

import {fetchTodoCollectionsSuccess, fetchTodoCollectionsFailure
, isFetchingCollectionsTrue, isFetchingCollectionsFalse, populateTodoCollections
, fetchTodoItemsForACollectionSuccess, fetchTodoItemsForACollectionFailure,
isFetchingTodoItemsTrue, isFetchingTodoItemsFalse, populateTodoItemsToACollection
, isCreatingTodoItemTrue, isCreatingTodoItemFalse, createTodoItemSuccess, createTodoItemFailure, addTodoItem,
modifyTodoItemSuccess, modifyTodoItemFailure, modifyTodoItem, isModifyingTodoItemTrue, isModifyingTodoItemFalse
, setOpenedTodoItem} from "./todo.actions";

import TodoSagaUtils from "./todo.sagaUtils";

// ========================= Sagas ==============================

function* onModifyTodoItemSuccess() {
  yield takeLeading(TodoActionTypes.MODIFY_TODO_ITEM_SUCCESS, fn_modifyTodoItemSuccess);
}

function* onModifyTodoItemStart() {
  yield takeLeading(TodoActionTypes.MODIFY_TODO_ITEM_START, fn_modifyTodoItemStart);
}

function* onCreateTodoItemSuccess() {
  yield takeLeading(TodoActionTypes.CREATE_TODO_ITEM_SUCCESS, fn_createTodoItemSuccess);
}

function* onCreateTodoItemStart() {
  yield takeLeading(TodoActionTypes.CREATE_TODO_ITEM_START, fn_createTodoItemStart);
}

function* onFetchTodoItemsForACollectionStart() {
  yield takeLeading(TodoActionTypes.FETCH_TODO_ITEMS_FOR_A_COLLECTION_START, fn_fetchTodoItemsForACollectionStart);
}

function* onFetchCollectionStart() {
  yield takeLeading(TodoActionTypes.FETCH_TODO_COLLECTIONS_START, fn_fetchCollectionStart);
}

function* onCreateCollectionStart() {
  yield takeLeading(TodoActionTypes.CREATE_TODO_COLLECTION_START, fn_createCollectionStart);
}

export default function* todoSaga() {
  yield all([
    call(onCreateCollectionStart),
    call(onFetchCollectionStart),
    call(onFetchTodoItemsForACollectionStart),
    call(onCreateTodoItemStart),
    call(onCreateTodoItemSuccess),
    call(onModifyTodoItemStart),
    call(onModifyTodoItemSuccess),
  ])
}

function* fn_modifyTodoItemSuccess({successCallbackFn}) {
  yield call(successCallbackFn);
}

function* fn_modifyTodoItemStart({title, body, todoItemId, successCallbackFn}) {
  try {
    // start spinner
    yield put(isModifyingTodoItemTrue());

    // 1) create todo item - backend
    console.log("ready to create in backend")
    console.log({title, body, todoItemId});
    const res = yield call(modifyTodoItemToBackene, [title, body, `${process.env.REACT_APP_URL}/todo/todoItems/${todoItemId}`]);

    // 2) Populate new todo item to a collection in todos state
    yield put(modifyTodoItem(res.data.data.todoItem));

    // 3) Change the current opened todo item
    yield put(setOpenedTodoItem(res.data.data.todoItem));

    // stops spinner
    yield put(isModifyingTodoItemFalse());
    yield put(modifyTodoItemSuccess(successCallbackFn));
  } catch (error) {
    // stops spinner
    yield put(isModifyingTodoItemFalse());
    yield put(modifyTodoItemFailure());
  }
}

function* fn_createTodoItemStart({title, body, collectionId, successCallbackFn}) {
  try {
    // start spinner
    yield put(isCreatingTodoItemTrue());

    // 1) create todo item - backend
    const res = yield call(createTodoItem, [title, body, `${process.env.REACT_APP_URL}/todo/collections/${collectionId}/todoItems`]);

    // 2) Populate new todo item to a collection in todos state
    yield put(addTodoItem(res.data.data.todoItem, collectionId));

    // stops spinner
    yield put(isCreatingTodoItemFalse());
    yield put(createTodoItemSuccess(successCallbackFn));
  } catch (error) {
    // stops spinner
    yield put(isCreatingTodoItemFalse());
    yield put(createTodoItemFailure());
  }
}

function* fn_createTodoItemSuccess({successCallbackFn}) {
  yield call(successCallbackFn);
}

function* fn_fetchTodoItemsForACollectionStart({collectionId}) {
  try {
    // start spinner
    yield put(isFetchingTodoItemsTrue());

    // 1) Fetch todo items from backend
    const res = yield call(fetchTodoItemsForACollection, `${process.env.REACT_APP_URL}/todo/collections/${collectionId}/todoItems`);

    // 2) Populate todo items to a collection in todos state
    console.log("todoitems", res.data.data.todoItems)
    yield put(populateTodoItemsToACollection(res.data.data.todoItems, collectionId));

    // stops spinner
    yield put(isFetchingTodoItemsFalse());
    yield put(fetchTodoItemsForACollectionSuccess());
  } catch (error) {
    // stops spinner
    yield put(isFetchingTodoItemsFalse());
    yield put(fetchTodoItemsForACollectionFailure());
  }
}

function* fn_fetchCollectionStart() {
  try {
    // start spinner
    yield put(isFetchingCollectionsTrue());

    // 1) Fetch Collections from backend
    const res = yield call(fetchCollections, `${process.env.REACT_APP_URL}/todo/collections`);
    
    // 2) Populate Collections data
    yield put(populateTodoCollections(res.data.data.collections));

    yield put(fetchTodoCollectionsSuccess());
    // stop spinner
    yield put(isFetchingCollectionsFalse());
  } catch (error) {
    // stops spinner
    yield put(isFetchingCollectionsFalse());
    yield put(fetchTodoCollectionsFailure());
  }
}

function* fn_createCollectionStart({name}) {
  try {
    // 1) Create Collection to backend
    console.log("creating collection")
    const res = yield call(createCollection, [name, `${process.env.REACT_APP_URL}/todo/collections`])

    // 2) Populate collection to redux
    const todoSagaUtils = new TodoSagaUtils();
    yield todoSagaUtils.createCollection(res.data.data.collection);

  } catch (error) {
    
  }
}