import express from "express";
import { getInventory, addItem } from "../controllers/inventoryController.js";

const router = express.Router();

router.get("/", getInventory);
router.post("/", addItem);

export default router;
