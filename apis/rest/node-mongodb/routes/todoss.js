/**
 * With MongoDB Client
 */

const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { connectToDb, getDb } = require("../db_config/db");

let db;
connectToDb((err) => {
  if (!err) db = getDb();
});

console.log(db);

/* CREATE */
// creating a todo
router.post("/create", async (req, res) => {
  try {
    const result = await db.collection("books").insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.json(500).json({ error: "could not create a new doc" });
  }
});

/* READ */
// getting all todos
router.get("/", async (req, res) => {
  try {
    const all_todos = await db.collection("books").find().toArray();
    res.status(200).json(all_todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// getting one todo
router.get("/:id", async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    try {
      const todo = await db
        .collection("books")
        .findOne({ _id: ObjectId(req.params.id) });
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  res.status(400).json({ message: "invalid id" });
});

// updating a todo
router.patch("/:id", async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    try {
      const result = await db
        .collection("books")
        .updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: "could not update document" });
    }
  }
  res.status(400).json({ message: "invalid id" });
});

// deleting a todo
router.delete("/:id", async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    try {
      const result = await db
        .collection("books")
        .deleteOne({ _id: ObjectId(req.params.id) });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: "could not delete document" });
    }
  }
  res.status(400).json({ message: "invalid id" });
});

module.exports = router;
