const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    optionsSuccessStatus: 200,
  })
);

module.exports = app;
