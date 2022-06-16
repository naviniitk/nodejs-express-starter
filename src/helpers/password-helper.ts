import bcryptjs from "bcryptjs";

const encryptPassword = async (password: string): Promise<string> => {
  return await bcryptjs.hash(password, 12);
};

export default encryptPassword;
