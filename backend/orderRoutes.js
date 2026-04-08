import express from "express";
import { createOrder, getOrders, updateOrder } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/", getOrders);
router.put("/:id", updateOrder);

export default router;
