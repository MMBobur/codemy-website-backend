const express = require("express");
const app = express();
const port = 4000;
var path = require("path");
var multer = require("multer");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", upload.single("file"), function (req, res, next) {
  if (!req.file) {
    res.status(500);
    return next(err);
  }
  res.json({ fileUrl: "http://192.168.0.7:3000/images/" + req.file.filename });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
