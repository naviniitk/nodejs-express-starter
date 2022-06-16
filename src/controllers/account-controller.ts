import { NextFunction, Request, Response } from "express";
import { userService, accountService } from "../services";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  const account = await accountService.signup(name, email, password);
  return res.status(200).send(account);
};

export { signup };
