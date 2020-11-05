import {takeLeading, call, put, all} from "redux-saga/effects";

import TodoActionTypes from "./todo.types";

import {createCollection, fetchCollections, fetchTodoItemsForACollection} from "./todo.requests";

import {fetchTodoCollectionsSuccess, fetchTodoCollectionsFailure
, isFetchingCollectionsTrue, isFetchingCollectionsFalse, populateTodoCollections
, fetchTodoItemsForACollectionSuccess, fetchTodoItemsForACollectionFailure,
isFetchingTodoItemsTrue, isFetchingTodoItemsFalse, populateTodoItemsToACollection} from "./todo.actions";

import TodoSagaUtils from "./todo.sagaUtils";

// ========================= Sagas ==============================

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
  ])
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