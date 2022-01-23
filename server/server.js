require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const database = require("./database");

const app = express();
const port = 3333;

database();

app.use(routes);
app.listen(port, () => console.log(`http://localhost:${port}`));
