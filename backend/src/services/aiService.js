import client from "../config/openai.js";

export const askAI = async (prompt) => {
  const res = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return res.choices[0].message.content;
};