import express from "express";
import { accountController, userController } from "../controllers";

const router = express.Router();

router.get("/", userController.helloFunc);

router.post("/signup", accountController.signup);

router.get("/other", userController.otherHelloFunc);

export default router;
