const express = require("express");
const app = express();
const json = express.json;
const path = require("path");
const cors = require("cors");
const static = express.static;
const uuid = require("uuid").v4;
const multer = require("multer");
const router = require("./router");
const config = require("./config");
const urlencoded = express.urlencoded;
const formData = require("express-form-data");

const storage = multer.diskStorage({
  destination: "public/images",
  filename: function(req, file, callback) {
    let extension = path.extname(file.originalname);
    callback(null, `${uuid()}${extension}`);
  }
})

const upload = multer({
  storage: storage
})

app.use(cors(config.cors));
app.use(static("public"));
app.use(upload.single("image"));
app.use(router);

module.exports = app;


