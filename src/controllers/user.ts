import { UserTypeBody } from "../types/user-type";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

export const registerUser = async (req: any, res: any) => {
  const body: UserTypeBody = req.body;
  try {
    return res
      .status(200)
      .json({ message: "Register user successfully", data: { name: "admin" } });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};
