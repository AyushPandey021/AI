import { chat } from "../services/chatServices.js";

export const handleChat = async (req, res) => {
  const result = await chat(req.body.message);
  res.json({ result });
};