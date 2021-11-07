const express = require('express');
const path = require('path');
const session = require ('express-session');
const MongoStore = require("connect-mongo");
const dbConnection = require("./database/database.js"); // loads our connection to the mongo database
const userRoutes = require('./routes/routes.js')
const server = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(
    session({
      secret: process.env.APP_SECRET || "this is the default passphrase",
      store: MongoStore.create({ mongoUrl: process.env.PROD }),
      resave: false,
      saveUninitialized: false,
    })
  );



if (process.env.NODE_ENV === "production") {
    server.use("/static", express.static(path.join(__dirname, "../frontend/build/static")));
    server.get("/", (req, res) => { res.sendFile(path.join(__dirname, "../frontend/build/")); });

}
server.listen(PORT, () => console.log(`API Server Listening On Port ${PORT} `));

// Base Error handler
server.use(function (err, req, res, next) {
    console.log("====== ERROR =======");
    console.error(err.stack);
    res.status(500);
});
