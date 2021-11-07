const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const MONGO_LOCAL_URL = "mongodb://localhost/happenings-app";
require('dotenv').config();


if (process.env.PROD) {
  mongoose.connect(process.env.PROD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  mongoose.connect(process.env.PROD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }); // local mongo url
}

// should mongoose.connection be put in the call back of mongoose.connect???
const database = mongoose.connection;
database.on("error", (err) => {
  console.log(`There was an error connecting to the database: ${err}`);
});

database.once("open", () => {
  console.log(
    `You have successfully connected to your mongo database`
  );
});

module.exports = database;