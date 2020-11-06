const withCatchErrAsync = require("../../utils/error/withCatchErrorAsync");
const Collection = require("../../models/collection/collection.model");
const QueryStringHandler = require("../../helpers/QueryStringHandler");
const OperationalErr = require("../../helpers/OperationalErr");
const TodoItem = require("../../models/todoItem/todoItem.model");
const { update } = require("../../models/collection/collection.model");

exports.createTodoItems = withCatchErrAsync(async (req, res, next) => {
  const {collectionId} = req.params;
  const {title, body} = req.body;

  const todoItemDoc = await TodoItem.create({title, body, parentCollection: collectionId});
  
  console.log({collectionId})
  console.log(req.params)

  return res.status(201).json({
    status: "success",
    data: {
        todoItem: todoItemDoc,
    },
});
})

exports.getAllTodoItems = withCatchErrAsync(async (req, res) => {
  const {collectionId} = req.params;

  console.log({collectionId})

  // ) EXCUTE QUERY
  const queryParamFeature = new QueryStringHandler(TodoItem.find({parentCollection: collectionId}), req.query)
  .filter()
  .sort()
  .limitFields()
  .paginate();

  const todoItemsDocs = await queryParamFeature.query;

  return res.status(200).json({
      status: "success",
      results: todoItemsDocs.length,
      data: {
          todoItems: todoItemsDocs,
      },
  });
});

exports.modifyTodoItem = withCatchErrAsync(async (req, res, next) => {
  const {todoItemId} = req.params;
  const {title, body} = req.body;

  const updatedTodoItemDoc = await TodoItem.findByIdAndUpdate(todoItemId, {title, body}, {new: true});

  if(!updatedTodoItemDoc) {
    return next(new OperationalErr("Target todo item not found.", 400, "local"));
  }

  return res.status(200).json({
    status: "success",
    data: {
      todoItem: updatedTodoItemDoc
    }
  })
})