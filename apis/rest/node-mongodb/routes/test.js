const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

/* CREATE */
// creating a todo
router.post("/create", (req, res) => {
  if (!req.body.action)
    res.status(400).send({ ok: false, message: "no action sent" });

  res.status(200).send({
    ok: true,
    message: `the todo ${req.body.action} successfully created`,
  });
});

/* READ */
// getting all todos
router.get("/", (req, res) => {
  res.status(200).send({
    ok: true,
    todos: [
      { id: 1, action: "eat", status: "pending" },
      { id: 2, action: "code", status: "done" },
    ],
  });
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
