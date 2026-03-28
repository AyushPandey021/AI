import { askAI } from "./aiService.js";

export const generateFlow = async (input) => {
  const prompt = `
Convert this into flowchart JSON format with:
- nodes (id, label)
- edges (source, target)

Problem:
${input}
`;

  const result = await askAI(prompt);

  try {
    return JSON.parse(result);
  } catch {
    return { raw: result }; // fallback
  }
};