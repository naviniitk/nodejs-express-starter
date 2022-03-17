import express, { NextFunction, Request, Response } from "express";
import * as userService from "../services/user-service";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const message = await userService.helloFunction();
  return res.status(200).send(message);
});

router.get("/other",  async (req: Request, res: Response, next: NextFunction) => {
  const message = await userService.otherHelloFuncion();
  return res.status(200).send(message);
})

module.exports = router;
