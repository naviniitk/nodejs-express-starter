import express, { Application, Request, Response } from "express";
import { userRouter } from "../routers";

const config = require("config");

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);

const port = config.get("server.port");
app.listen(port, () => {
  console.log(`app started successfully on port ${port}`);
});
