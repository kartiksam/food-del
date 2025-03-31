// in pkg.json in the scripts we have added "server" :"nodemon server.js" so wen we write npm run server it execute nodemon server.js
// const express = require("express");
// const cors = require("cors");
import express from "express";
import cors from "cors";
import { connnectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
// to support env file
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
//1-To parse data from frontend to backend
app.use(express.json());
//2-access backend from any frontend
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://food-delivery-backend-75wj.onrender.com",
    ],
    credentials: true,
  })
);

//db connection
connnectDB();

//api endpoint

app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
//mount the folder in this endpoint insert anyfile in this folder and use that using this url images and filename-localhost:4000/images/filename
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
