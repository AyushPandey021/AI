import { useState, useEffect } from "react";
import { uploadDoc } from "../services/ai";

export default function Doc() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [language, setLanguage] = useState("english");
  const [loading, setLoading] = useState(false);
  const [voices, setVoices] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // 🔥 Load voices properly
  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleUpload = async () => {
    if (!file) return alert("Please select file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await uploadDoc(formData);

      // 🔥 Language conversion via AI
      const translated = await fetch("http://localhost:8000/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Explain this in ${language} in very simple words:\n${res.data.summary}`,
        }),
      });

      const data = await translated.json();
      setSummary(data.result);

    } catch (err) {
      console.error(err);
      alert("Error processing doc");
    } finally {
      setLoading(false);
    }
  };

  // 🔊 VOICE FUNCTION (ADVANCED 🔥)
  const handleVoice = () => {
    if (!summary) return;

    // Stop previous speech
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(summary);

    let selectedVoice;

    if (language === "hindi") {
      selectedVoice = voices.find(v => v.lang.includes("hi"));
      speech.lang = "hi-IN";
    } else if (language === "hinglish") {
      selectedVoice = voices.find(v => v.lang.includes("en"));
      speech.lang = "en-US"; // 👈 Hinglish better in English voice
    } else {
      selectedVoice = voices.find(v => v.lang.includes("en"));
      speech.lang = "en-US";
    }

    if (selectedVoice) speech.voice = selectedVoice;

    speech.rate = 0.9;
    speech.pitch = 1;

    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(speech);
  };

  // 🔴 STOP VOICE
  const stopVoice = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">

      <h1 className="text-3xl font-bold mb-6">📄 Doc AI</h1>

      {/* Controls */}
      <div className="flex gap-4 mb-4 items-center flex-wrap">

        <input
          type="file"
          accept=".pdf,.txt"
          className="bg-white/10 p-2 rounded"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <select
          className="bg-gray-300 text-black p-2 rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="hinglish">Hinglish</option>
        </select>

        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
        >
          {loading ? "Processing..." : "Upload"}
        </button>

        {/* Voice Buttons */}
        <button
          onClick={handleVoice}
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          🔊 Speak
        </button>

        {isSpeaking && (
          <button
            onClick={stopVoice}
            className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
          >
            ⛔ Stop
          </button>
        )}
      </div>

      {/* Output */}
      <div className="bg-white/10 p-4 rounded-lg backdrop-blur-md min-h-[150px]">
        {loading ? (
          <p>Generating summary...</p>
        ) : (
          <p className="leading-relaxed">{summary}</p>
        )}
      </div>
    </div>
  );
}