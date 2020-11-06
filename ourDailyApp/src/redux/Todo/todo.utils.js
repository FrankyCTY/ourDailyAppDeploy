export const populateTodoItemsToCollection = (todos, todoItems, parentCollectionId) => {
  todos[parentCollectionId] = todoItems;
  return todos;
}

export const addTodoItemsToCollection = (todos, todoItemToAdd, parentCollectionId) => {
  console.log({todos})
  console.log({todoItemToAdd})

  if(!todos[parentCollectionId]) {
    todos[parentCollectionId] = [];
  }

  todos[parentCollectionId].push(todoItemToAdd);
  console.log({todos})
  return todos;
}