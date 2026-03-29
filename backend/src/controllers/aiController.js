import { askAI } from "../services/aiService.js";

export const generateText = async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await askAI(prompt);

    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI failed" });
  }
};