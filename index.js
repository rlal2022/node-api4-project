require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());

server.get("/server", (req, res) => {
  res.json("hello, there");
});

server.use("*", (req, res) => {
  res.json({ message: "API is UP!" });
});

const port = process.env.PORT || 9000;

server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message, customMessage: "We ran into an error!" });
});

server.listen(9000, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
