require("dotenv").config();

const express = require("express");
const debug = require("debug")("node-server:index");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

var path = require("path");
var multer = require("multer");

const appRouter = require("./router");
const morgan = require("morgan");
const winston = require("./util/winston.logger");
const app = express();
const db = require("./model");

app.use(express.static("public"));
app.use("/img", express.static("img"));
// const appRoot = require("app-root-path");

db.sequelize.sync();

app.use(morgan("combined", { stream: winston.stream }));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.get("/", (req, res) => {
  res.json({ message: "HomePage" });
});

app.use((err, req, res, next) => {
  handleError(err, res);
});

app.use("/api", appRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `server started on port ${process.env.PORT} (${process.env.NODE_ENV})`
  );
  debug(`server started on port ${process.env.PORT} (${process.env.NODE_ENV})`);
});

module.exports = app;
