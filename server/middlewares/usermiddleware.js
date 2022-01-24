const { validate: isUuid } = require("uuid");
const User = require("../models/users");

module.exports = {
  async validateUser(req, res, next) {
    const { id } = req.params;

    if (!isUuid(id)) {
      return res.status(400).json({ error: "Invalid user" });
    }

    try {
      const user = await User.findById(id);
      res.user = user;
      if (!user) {
        return res.status(404).json({ error: "user not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
    next();
  },
};
