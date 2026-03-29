import { useState } from "react";
import { chatAI } from "../services/ai";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await chatAI({ message: msg });
    setReply(res.data.result);
  };

  return (
    <div>
      <h1>Chat AI 💬</h1>

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>

      <p>{reply}</p>
    </div>
  );
}