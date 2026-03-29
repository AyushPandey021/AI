import { createRequire } from "module";
import fs from "fs";

const require = createRequire(import.meta.url);

const pdfModule = require("pdf-parse");

// 🔥 handle both cases
const pdfParse = pdfModule.default || pdfModule;

export const parsePDF = async (filePath) => {
  const dataBuffer = fs.readFileSync(filePath);

  const data = await pdfParse(dataBuffer);

  return data.text;
};