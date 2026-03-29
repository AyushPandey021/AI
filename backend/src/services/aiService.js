import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const askAI = async (prompt) => {
  const res = await groq.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
model: "llama-3.1-8b-instant"
  });

  return res.choices[0].message.content;
};