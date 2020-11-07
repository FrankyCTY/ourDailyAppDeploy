const Collection = require("../models/collection/collection.model");
const TodoItem = require("../models/todoItem/todoItem.model");

class CollectionService {
  deleteCollection = async (collectionId) => {
    // 1) delete target collection
    await Collection.findByIdAndDelete({_id: collectionId});

    // 2) delete todo items in the target collection
    await TodoItem.deleteMany({parentCollection: collectionId});
  };
}

module.exports = CollectionService;