import { Account } from "../models";
import { encryptPassword } from "../helpers";

const signup = async (name: string, email: string, password: string) => {
  const encryptedPassword = await encryptPassword(password);
  const account = new Account({
    name,
    email,
    password: encryptedPassword,
  });
  const savedAccount = await account.save();
  return savedAccount;
};

export { signup };
