const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todos");

const todosSchema = new mongoose.Schema({
  action: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("todos", todosSchema);
