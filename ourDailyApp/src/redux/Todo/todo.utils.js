export const populateTodoItemsToCollection = (todos, todoItems, parentCollectionId) => {
  todos[parentCollectionId] = todoItems;
  return todos;
}

export const addTodoItemsToCollection = (todos, todoItemToAdd, parentCollectionId) => {
  const targetCollection = todos[parentCollectionId];

  if(!targetCollection) {
    todos.targetCollection = [];
  }

  todos.targetCollection.push(todoItemToAdd);

  return todos;
}