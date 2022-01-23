const response = require("express");
const User = require("../models/users");
const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");

module.exports = {
  async index(req, resp) {
    try {
      const user = await User.find();
      return resp.status(200).json({ user });
    } catch (error) {
      resp.status(500).json({ error: error.message });
    }
  },

  async createUser(req, resp) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return resp.status(400).json({ error: "Required fields" });
    }

    const user = new User({
      _id: uuid(),
      name,
      email,
      password,
    });

    try {
      await user.save();

      return resp.status(201).json({ name: name });
    } catch (error) {
      resp.status(400).json({ error: error.message });
    }
  },
  async deleteUser(req, resp) {
    const { name, email } = req.body;
  },
};
