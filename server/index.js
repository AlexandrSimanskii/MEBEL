import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productsRouter from "./routes/products.router.js";
import authRouter from "./routes/auth.router.js";
import userRouter from "./routes/users.router.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connect with MongoDB");
  })
  .catch((err) => console.log("Не удалось подключиться к MongoDB", err));

const app = express();

const PORT = 3004;

app.listen(PORT, () => {
  console.log("Server is connectig");
});
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);










app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});
