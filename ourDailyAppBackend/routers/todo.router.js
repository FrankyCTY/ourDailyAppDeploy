const express = require('express');
const collectionRouter = require('./collection.router');
const todoItemRouter = require('./todoItem.router');
const router = express.Router();

router.use('/collections', collectionRouter);

router.use('/todoItems', todoItemRouter);


module.exports = router;