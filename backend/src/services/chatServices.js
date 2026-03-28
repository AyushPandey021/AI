import { askAI } from "./aiService.js";

export const chat = async (message) => {
  return await askAI(message);
};