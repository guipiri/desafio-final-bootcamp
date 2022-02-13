const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const { port } = require("pg/lib/defaults");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", require("./route/productsRoutes"));
app.use("/", require("./route/usersRoutes"));

app.listen(3000, () => {
  console.log(`Running on port 3000`);
});
