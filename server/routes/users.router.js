import express from "express"
import { updateUser } from "../controllers/users.controllers.js";


const router = express.Router();

router.patch("/update/:id", updateUser);

export default router;
