import { askAI } from "./aiService.js";

export const generateFlow = async (input) => {
  const prompt = `
Return ONLY JSON. No explanation.

Format:
{
  "nodes": [{"id":"1","label":"Start"}],
  "edges": [{"source":"1","target":"2"}]
}

Problem:
${input}
`;

  const result = await askAI(prompt);

  console.log("RAW AI:", result);

  try {
    // 🔥 Extract JSON from messy response
    const jsonMatch = result.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      throw new Error("No JSON found");
    }

    return JSON.parse(jsonMatch[0]);

  } catch (err) {
    console.error("PARSE ERROR:", err);
    return { error: "Invalid JSON", raw: result };
  }
};