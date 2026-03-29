import fs from "fs";
import { parsePDF } from "../utils/pdfParser.js";
import { summarizeDoc } from "../services/docService.js";

export const uploadDoc = async (req, res) => {
  try {
    const filePath = req.file.path;
    const fileType = req.file.mimetype;

    let text = "";

    // 🔥 HANDLE PDF
    if (fileType === "application/pdf") {
      text = await parsePDF(filePath);
    }

    // 🔥 HANDLE TXT
    else if (fileType === "text/plain") {
      text = fs.readFileSync(filePath, "utf-8");
    }

    else {
      return res.status(400).json({ error: "Unsupported file type" });
    }

    const summary = await summarizeDoc(text);

    res.json({ summary });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Doc processing failed" });
  }
};