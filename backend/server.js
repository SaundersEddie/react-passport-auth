const express = require('express');
const authRoutes = require('./routes/auth');
const protRoute = require('./routes/protectedRoute');
const dbConnection = require("./database/database.js"); // loads our connection to the mongo database

const server = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const path = require('path');
if (process.env.NODE_ENV === "production") {
    server.use("/static", express.static(path.join(__dirname, "../frontend/build/static")));
    server.get("/", (req, res) => { res.sendFile(path.join(__dirname, "../frontend/build/")); });
}

server.use('/api/user', authRoutes);
server.use('/api/prot', protRoute);

// Base Error handler
server.use(function (err, req, res, next) {
    console.log("====== ERROR =======");
    console.error(err.stack);
    res.status(500);
});

server.listen(PORT, () => console.log(`API Server Listening On Port ${PORT} `));
