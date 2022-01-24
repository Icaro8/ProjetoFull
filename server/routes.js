const express = require("express");
const userController = require("./controllers/userController");
const ValidateMiddleware = require("./middlewares/usermiddleware");
const routes = express.Router();
routes.get("/", (req, res) => {
  console.log("run go");
});

routes.get("/user", userController.index);
routes.post("/user", userController.createUser);
routes.put(
  "/user/:id",
  ValidateMiddleware.validateUser,
  userController.updateUser
);
routes.delete(
  "/user/:id",
  ValidateMiddleware.validateUser,
  userController.deleteUser
);
module.exports = routes;
