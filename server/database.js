const mongoose = require("mongoose");

function conectDatabase() {
  mongoose.connect(process.env.DATABASECONECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("db is on"));
}

module.exports = conectDatabase;
