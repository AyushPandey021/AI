import { askAI } from "./aiService.js";

export const summarizeDoc = async (text) => {
  return await askAI(`Summarize this document:\n${text}`);
};