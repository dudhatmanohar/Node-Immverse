const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const multer = require("multer");
const dotenv = require("dotenv");
const db = require("./db");

dotenv.config();
const app = express();
app.use(bodyParser.json());






app.use("/api/categories", require("./routes/category"));
app.use("/api/products", require("./routes/product"));

app.listen(3000, () => 
    console.log("Server running on port 3000")
);
