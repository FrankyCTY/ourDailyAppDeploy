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

export const toggleTodoItemFromList = (checkedTodoItemList, todoItem, todoId) => {

  var index = checkedTodoItemList.findIndex(todoItemObj => todoItemObj.id === todoId);

  if (index === -1) checkedTodoItemList.push(todoItem);
  else checkedTodoItemList.splice(index, 1);

  const newCheckedList = [...checkedTodoItemList];

  return newCheckedList;
}

export const deleteTodoItemsFromTodos = (todos, todoItemIds, collectionId) => {
  const newTodos = {...todos};

  const newCollection = todos[collectionId].filter((todoItem) => {
    return !todoItemIds.includes(todoItem.id);
  })

  newTodos[collectionId] = newCollection;

  return newTodos;
}

export const deleteCollectionFromTodos = (collections, collectionId) => {
  // delete todos[collectionId];
  // const newTodos = {...todos};

  // console.log({newTodos})
  console.log({collections});
  const newCollections = collections.filter(collection => collection.id !== collectionId);
  console.log({newCollections})
  return newCollections;
}

export const deleteTodoItemsBaseOnCollectionFromTodos = (todos, collectionId) => {
  delete todos[collectionId];
  const newTodos = {...todos};

  console.log({newTodos})

  return newTodos;
}

export const modifyCollectionSortMethod = (collections, collectionId, sortMethod) => {
  console.log({collections});
  const newCollections = [...collections];
  /* newCollections[collectionId].sortMethod = sortMethod; */

  const targetIdx = newCollections.findIndex(collection => collection.id === collectionId);
  newCollections[targetIdx].sortMethod = sortMethod;
  console.log({newCollections})
  return newCollections;
}
