import "dotenv/config";   // 🔥 THIS LINE (no dotenv.config())

import express from "express";
import cors from "cors";

import aiRoutes from "./src/routes/aiRoute.js";
import docRoutes from "./src/routes/docRoute.js";
import flowRoutes from "./src/routes/flowRoute.js";
import chatRoutes from "./src/routes/chatRoute.js";

import errorHandler from "./src/middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());
// test
app.get("/",(req,res)=>{
res.send("hello working💣")
})

app.use("/api/ai", aiRoutes);
app.use("/api/doc", docRoutes);
app.use("/api/flow", flowRoutes);
app.use("/api/chat", chatRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});