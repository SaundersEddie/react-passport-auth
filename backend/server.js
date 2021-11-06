const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const server = express();
const PORT = process.env.PORT || 3001;
const userRoutes = require('./routes/routes.js')

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

require('dotenv').config();

if (process.env.NODE_ENV === "production") {
    server.use("/static", express.static(path.join(__dirname, "../frontend/build/static")));
    server.get("/", (req, res) => { res.sendFile(path.join(__dirname, "../frontend/build/")); });
}

mongoose.connect(process.env.PROD,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.listen(PORT, () => console.log(`API Server Listening On Port ${PORT} `)))
    .then(() => server.use(userRoutes))
    .catch((error) => console.log("An Error Occurred: ", error)
    );
