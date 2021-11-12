const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
require('dotenv').config();
console.log(process.env.PROD_DB)
console.log(process.env.DEV_DB)

if (process.env.NODE_ENV === 'production') {
  console.log("Opening PROD DB")
  mongoose.connect(process.env.PROD_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  console.log("Opening DEV DB")
  mongoose.connect(process.env.DEV_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const database = mongoose.connection;
database.on("error", (err) => {
  console.log(`There was an error connecting to the database you nub: ${err}`);
});

database.once("open", () => {
  console.log(
    `You have successfully connected to your mongo database`
  );
});

module.exports = database;
