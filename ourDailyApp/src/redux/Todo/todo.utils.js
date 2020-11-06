export const populateTodoItemsToCollection = (todos, todoItems, parentCollectionId) => {
  todos[parentCollectionId] = todoItems;
  return todos;
}

export const addTodoItemsToCollection = (todos, todoItemToAdd, parentCollectionId) => {
  const newTodos = {...todos};

  if(!todos[parentCollectionId]) {
    newTodos[parentCollectionId] = [];
  }

  newTodos[parentCollectionId].push(todoItemToAdd);
  return newTodos;
}

export const modifyTodoItem = (todos, modifiedTodoItem, parentCollectionId) => {
  console.log({parentCollectionId})
  
  if(!todos[parentCollectionId]) {
    return;
  }
  
  const targetTodoItemId = modifiedTodoItem.id;
  const targetIndex = todos[parentCollectionId].findIndex(todoItem => todoItem.id === targetTodoItemId);
  const newTodos = {...todos};

  if(targetIndex !== -1) {
    console.log("modify todoitem!")
    console.log(todos[parentCollectionId]);
    newTodos[parentCollectionId][targetIndex] = {...modifiedTodoItem};
  }

  return newTodos;
}