/**
 * With MongoDB Client
 */

const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { connectToDb, getDb } = require("../db_config/db");

const COLLECTION_NAME = "books";

let db;
connectToDb((err) => {
  if (!err) db = getDb();
});

/* CREATE */
// creating a todo
router.post("/create", async (req, res) => {
  try {
    const result = await db.collection(COLLECTION_NAME).insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.json(500).json({ error: "could not create a new doc" });
  }
});

/* READ */
// getting all todos
router.get("/", async (req, res) => {
  try {
    const all_books = await db.collection(COLLECTION_NAME).find().toArray();
    res.status(200).json(all_books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// getting one todo
router.get("/:id", async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    try {
      const book = await db
        .collection(COLLECTION_NAME)
        .findOne({ _id: ObjectId(req.params.id) });
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  res.status(400).json({ message: "invalid id" });
});

/* UPDATE */
// updating a todo
router.patch("/:id", async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    try {
      const result = await db
        .collection(COLLECTION_NAME)
        .updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: "could not update document" });
    }
  }
  res.status(400).json({ message: "invalid id" });
});

/* DELETE */
// deleting a todo
router.delete("/:id", async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    try {
      const result = await db
        .collection(COLLECTION_NAME)
        .deleteOne({ _id: ObjectId(req.params.id) });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: "could not delete document" });
    }
  }
  res.status(400).json({ message: "invalid id" });
});

module.exports = router;
