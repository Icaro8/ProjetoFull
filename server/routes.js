const express = require("express");
const userController = require("./controllers/userController");
const routes = express.Router();
routes.get("/", (req, res) => res.send("Hello world"));

routes.get("/user", userController.index);
routes.post("/user", userController.createUser);
module.exports = routes;
