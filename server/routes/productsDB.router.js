import express from "express";
import {
  getProductsDB,
  getProductDB,
} from "../controllers/productsDB.controllers.js";

const router = express.Router();

router.get("/get", getProductsDB);
router.get("/get/:id", getProductDB);

export default router;
