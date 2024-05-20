import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productsRouterDB from "./routes/productsDB.router.js";
import authRouterDB from "./routes/authDB.router.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Failed to connect to MongoDB", err));

const app = express();

const PORT = process.env.PORT || 3004;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://185.185.70.117";

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", CORS_ORIGIN);
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

app.use("/api/productsDB", productsRouterDB);
app.use("/app/authDB", authRouterDB);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Not Found" });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import productsRouter from "./routes/products.router.js";
// import authRouter from "./routes/auth.router.js";

// dotenv.config();

// mongoose
//   .connect(process.env.MONGO)
//   .then(() => {
//     console.log("Connect with MongoDB");
//   })
//   .catch((err) => console.log("Не удалось подключиться к MongoDB", err));

// const app = express();

// const PORT = 3004;

// app.listen(PORT, () => {
//   console.log("Server is connectig");
// });

// app.use((req, res, next) => {
//   // Разрешаем доступ с вашего домена
//   res.setHeader('Access-Control-Allow-Origin', 'http://185.185.70.117');
//   // Разрешаем отправку cookies и других авторизационных данных
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   // Разрешаем запросы с методами GET, POST и OPTIONS
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//   // Разрешаем отправку заголовков 'Content-Type' и 'Authorization'
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   // Если запрос OPTIONS, отправляем только заголовки и завершаем ответ
//   if (req.method === 'OPTIONS') {
//     return res.sendStatus(200);
//   }
//   // Переходим к следующему middleware
//   next();
// });

// app.use(express.json());

// app.use("/api/products", productsRouter);
// app.use("/api/auth", authRouter);
// // app.use("/api/user", userRouter);

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   return res.status(statusCode).json({ success: false, statusCode, message });
// });
