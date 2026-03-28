import { parsePDF } from "../utils/pdfParser.js";
import { summarizeDoc } from "../services/docService.js";

export const uploadDoc = async (req, res) => {
  const text = await parsePDF(req.file.path);
  const summary = await summarizeDoc(text);

  res.json({ summary });
};