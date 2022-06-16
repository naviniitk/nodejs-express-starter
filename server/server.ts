import express, { Application } from "express";
import mongoose from "mongoose";
import { userRouter } from "../src/routers";

const config = require("config");

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);

const port = config.get("server.port");
const mongoUri: string = config.get("mongoDB.uri");

mongoose.connect(mongoUri).then(() => console.log("Connected to mongoDB"));
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

app.listen(port, () => {
  console.log(`app started successfully on port ${port}`);
});
