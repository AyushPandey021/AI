import { generateFlow } from "../services/flowService.js";

export const createFlow = async (req, res) => {
  const result = await generateFlow(req.body.input);
  res.json(result);
};