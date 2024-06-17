import {
  placeOrder,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";
import express from "express";
import authMiddleware from "../middleware/auth.js";
const orderRouter = express.Router();
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorder", authMiddleware, userOrders);
export default orderRouter;
