const express = require("express");
const authController = require("../controllers/auth/auth.controller");
const collectionController = require("../controllers/collection/collection.controller");
const todoItemRouter = require("./todoItem.router");
const router = express.Router();

// ============ Redirecting Routes ============
router.use("/:collectionId/todoItems", todoItemRouter);

router.route('/').post(authController.protect, collectionController.createCollection)
.get(authController.protect, collectionController.getAllCollections);

router.route('/:collectionId').delete(authController.protect, collectionController.deleteCollection);

module.exports = router;