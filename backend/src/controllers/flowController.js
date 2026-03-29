import { generateFlow } from "../services/flowService.js";

export const createFlow = async (req, res) => {
  try {
    const { input } = req.body;

    const result = await generateFlow(input);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Flow generation failed" });
  }
};