require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
const booksRouter = require("./routes/books");
app.use("/books", booksRouter);

app.listen(process.env.PORT, () =>
  console.log(`its alive on http://localhost:${process.env.PORT}`)
);
