import { generateVoice } from "../services/voiceService.js";

export const handleVoice = async (req, res) => {
  try {
    const { text } = req.body;

    const result = await generateVoice(text);

    res.json({ result });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Voice failed" });
  }
};