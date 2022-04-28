require("dotenv").config();

const express = require("express");
const app = express();
// const { connectToDb, getDb } = require("./db_config/db");

app.use(express.json());

console.log("first");

const todosRouter = require("./routes/todoss");

app.use("/todos", todosRouter);

app.listen(process.env.PORT, () =>
  console.log(`its alive on http://localhost:${process.env.PORT}`)
);
