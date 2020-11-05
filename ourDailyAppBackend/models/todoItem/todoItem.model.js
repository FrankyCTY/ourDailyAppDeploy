const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    parentCollection: {
      type: mongoose.Schema.ObjectId,
      ref: "Collection",
    },
    createdAt: {
      type: Date,
      default: new Date(),
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
)

const TodoItem = mongoose.model('TodoItem', todoItemSchema);

module.exports = TodoItem;