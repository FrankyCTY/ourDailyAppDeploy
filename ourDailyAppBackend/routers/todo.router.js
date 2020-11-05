const express = require('express');
const collectionRouter = require('./collection.router');
const router = express.Router();

router.use('/collections', collectionRouter);


module.exports = router;