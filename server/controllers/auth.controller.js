import mongoose from "mongoose";
import Users from "../models/user.models.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  console.log(req.body);
  const { email, username, number, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new Users({
    email,
    username,
    number,
    password: hashedPassword,
  });

  try {
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
    await newUser.save();
    const { password, ...rest } = newUser._doc;
    res.cookie("access_token", token, { httpOnly: true });
    res.status(201).json(rest);
  } catch (error) {
    next(errorHandler(401, "Пользователь не создан!"));
  }
};

export const signIn = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await Users.findOne({ email });
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    next(errorHandler(403, "Не удалось получить пользователя!"));
  }
};
