const express = require("express");
const app = express();
const db = require("./config/db");

// Middlewares

// Routers
const noteRouter = require("./routers/noteRouter");
const noteTypeRouter = require("./routers/noteTypeRouter");

db(); //db bağlantı ayarları
app.use(express.json()); //req.body içindeki json değerleri alır.

app.use("/note", noteRouter);
app.use("/noteType", noteTypeRouter);

module.exports = app;
