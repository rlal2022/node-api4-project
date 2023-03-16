const express = require("express");
const server = express();

server.use(express.json());

server.get("/server", (req, res) => {
  res.json("hello, there");
});

server.use("*", (req, res) => {
  res.json({ message: "API is UP!" });
});

const port = process.env.PORT || 9000;

server.listen(9000, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
