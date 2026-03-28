import { askAI } from "../services/aiService.js";

export const handleAI = async (req, res) => {
  const result = await askAI(req.body.prompt);
  res.json({ result });
};