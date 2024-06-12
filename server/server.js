const express = require("express");

const router = require("./router/router");
const cors = require("./cors");
const config = require("config");

const app = express();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use("/image", express.static("uploads"));
app.use((err, req, res, next) => {
  handleError(res, 500, err.message);
});

const PORT = config.get("PORT");
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
