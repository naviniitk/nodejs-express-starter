import { NextFunction, Request, Response } from "express";
import { userService } from "../services";

const helloFunc = async (req: Request, res: Response, next: NextFunction) => {
  const message = await userService.helloFunction();
  return res.status(200).send(message);
};

const otherHelloFunc = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = await userService.otherHelloFuncion();
  return res.status(200).send(message);
};

export { helloFunc, otherHelloFunc };
