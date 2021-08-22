const mongoose = require("mongoose");
const db = () => {
  mongoose.Promise = global.Promise;

  // Connect MongoDB at default port 27017.
  mongoose.connect(
    "mongodb://localhost:27017/noteappDB",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("MongoDB Bağlantısı Başalırı.");
      } else {
        console.log("Error in DB connection: " + err);
      }
    }
  );
};

module.exports = db;
