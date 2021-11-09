const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
require('dotenv').config();

if (process.env.PROD) {
  mongoose.connect(process.env.PROD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  // This would technically be the local PROD call, I dont have local setup
  // so we're calling PROD here too, should probably just whack this code. :)
  mongoose.connect(process.env.PROD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

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
