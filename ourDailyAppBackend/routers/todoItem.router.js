const express = require('express');
const authController = require("../controllers/auth/auth.controller");
const todoItemController = require("../controllers/todoItem/todoItem.controller")

const router = express.Router({ mergeParams: true });

// @NOTE Todo Item must belong to a collection
router.route('/').post(authController.protect, todoItemController.createTodoItems)
.get(authController.protect, todoItemController.getAllTodoItems);


module.exports = router;