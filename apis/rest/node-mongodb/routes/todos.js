/**
 * With Mongoose
 */

const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

/* CREATE */
// creating a todo
router.post("/create", async (req, res) => {
  const todo = new Todo({
    action: req.body.action,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* READ */
// getting all todos
router.get("/", async (req, res) => {
  try {
    const all_todos = await Todo.find();
    res.status(200).json(all_todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// getting one todo
router.get("/:id", (req, res) => {
  res.status(200).send({
    ok: true,
    todo: { id: req.params.id, action: "run", status: "pending" },
  });
});

// updating a todo
router.patch("/:id", (req, res) => {
  res.status(200).send({
    ok: true,
    message: `todo number ${req.params.id} successfully patched`,
  });
});

// deleting a todo
router.delete("/:id", (req, res) => {
  res.status(200).send({
    ok: true,
    message: `todo number ${req.params.id} successfully deleted`,
  });
});

module.exports = router;
