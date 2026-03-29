import { chat } from "../services/chatServices.js";

export const handleChat = async (req, res) => {
  try {
    const { message } = req.body;

    const result = await chat(message);

    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Chat failed" });
  }
};