import express from "express";
import { generateText } from "../controllers/aiController.js";

const router = express.Router();

router.post("/", generateText);

export default router;