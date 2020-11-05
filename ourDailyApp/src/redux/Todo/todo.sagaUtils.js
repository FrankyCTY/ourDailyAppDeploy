import {put, call} from "redux-saga/effects";

import {addTodoCollection} from "./todo.actions";

class TodoSagaUtils {
  * createCollection(collection) {
    // add new collection to redux
    console.log("todo saga utils")
    console.log({collection})
    yield put(addTodoCollection(collection));
  }
}

export default TodoSagaUtils;