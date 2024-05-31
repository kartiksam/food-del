// in pkg.json in the scripts we have added "server" :"nodemon server.js" so wen we write npm run server it execute nodemon server.js
// const express = require("express");
// const cors = require("cors");
import express from "express";
import cors from "cors";
import { connnectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
//app config
const app = express();
const port = 4000;

//middleware
//1-To parse data from frontend to backend
app.use(express.json());
//2-access backend from any frontend
app.use(cors());

//db connection
connnectDB();

//api endpoint

app.use("/api/food", foodRouter);
//mount the folder in this endpoint insert anyfile in this folder and use that using this url images and filename
app.use("/images", express.static("uploads"));

//http method
//- get method is http method using that we can request the data from the server
app.get("/", (req, res) => {
  res.send("hello cool your api is working");
});

//run express server-port and callback
app.listen(port, () => {
  console.log(`Server started http://localhost:${port}`);
});
