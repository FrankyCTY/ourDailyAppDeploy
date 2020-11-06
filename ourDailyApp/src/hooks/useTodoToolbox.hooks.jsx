import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function useTodoToolbox(defaultState) {
  const openedTodoItem = useSelector(state => state.todo.openedTodoItem);
  const isEditMode = useSelector(state => state.todo.editTodoItemMode);

  return [openedTodoItem, isEditMode];
}