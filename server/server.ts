import express, { Application, Request, Response } from "express";
const userController =  require("../controllers/user-controller");
const config = require("config");

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userController);

const port = config.get("server.port");
app.listen(port, () => {
  console.log(`app started successfully on port ${port}`);
});
