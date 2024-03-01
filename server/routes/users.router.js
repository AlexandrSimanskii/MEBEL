import express from "express"
import { updateUserCart ,updateUserOrder} from "../controllers/users.controllers.js";


const router = express.Router();

router.patch("/update/cart/:id", updateUserCart);
router.patch("/update/order/:id", updateUserOrder);

export default router;
