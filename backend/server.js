const express = require('express');
const path = require('path');
const session = require('express-session');
const MongoStore = require("connect-mongo");
const dbConnection = require("./database/database.js"); // loads our connection to the mongo database
const passport = require('./passport');
const routes = require('./routes');
const server = express();
const PORT = process.env.PORT || 3001;

process.env.NODE_ENV === 'production' ? MONGO_STORE = process.env.PROD_DB : MONGO_STORE = process.env.DEV_DB

require('dotenv').config();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(
    session({
        secret: process.env.SECRET || "this is the default passphrase",
        store: MongoStore.create({ mongoUrl: MONGO_STORE }),
        resave: false,
        saveUninitialized: false,
    })
);

server.use(passport.initialize());
server.use(passport.session());

if (process.env.NODE_ENV === "production") {
    server.use("/static", express.static(path.join(__dirname, "../frontend/build/static")));
    server.get("/", (req, res) => { res.sendFile(path.join(__dirname, "../frontend/build/")); });
}

// server.use(routes);

// Base Error handler
server.use(function (err, req, res, next) {
    console.log("====== ERROR =======");
    console.error(err.stack);
    res.status(500);
});

server.listen(PORT, () => console.log(`API Server Listening On Port ${PORT} `));
