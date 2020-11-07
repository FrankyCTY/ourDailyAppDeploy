import {put, call} from "redux-saga/effects";

import {addTodoCollection, deleteTodoCollection, deleteTodoItemsBaseOnCollectionId} from "./todo.actions";

class TodoSagaUtils {
  * createCollection(collection) {
    // add new collection to redux
    yield put(addTodoCollection(collection));
  }

  * deleteCollection(collectionId) {
    // 2) delete collection from todos state
    yield put(deleteTodoCollection(collectionId));

    // 3) delete todo items that are in the target collection from todos state
    yield put(deleteTodoItemsBaseOnCollectionId(collectionId));
  }
}

export default TodoSagaUtils;