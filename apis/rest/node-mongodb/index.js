require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());

const todosRouter = require("./routes/todos");
app.use("/todos", todosRouter);

app.listen(process.env.PORT, () =>
  console.log(`its alive on http://localhost:${process.env.PORT}`)
);
