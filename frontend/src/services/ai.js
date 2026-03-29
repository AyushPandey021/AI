import { API } from "./api";

// Flow
export const generateFlow = (data) =>
  API.post("/flow/generate", data);

// Chat
export const chatAI = (data) =>
  API.post("/chat", data);

// Doc
export const uploadDoc = (formData) =>
  API.post("/doc/upload", formData);