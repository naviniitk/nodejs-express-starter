import express, { NextFunction, Request, Response } from "express";
import { userController } from "../controllers";

const router = express.Router();

router.get("/", userController.helloFunc);

router.get("/other", userController.otherHelloFunc);

export default router;
