import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Flow from "./pages/Flow";
import Doc from "./pages/Doc";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-5 bg-gray-300 h-screen text-2xl">

        {/* 🔥 Navbar */}
        <nav className="flex gap-5 mb-5 text-lg">
          <Link to="/">Home</Link>
          <Link to="/flow">Flow</Link>
          <Link to="/doc">Doc AI</Link>
          <Link to="/chat">Chat</Link>
        </nav>

        {/* 🔥 Routes */}
        <Routes>
          <Route path="/" element={<h1 className="text-3xl">FlowMind 🚀</h1>} />
          <Route path="/flow" element={<Flow />} />
          <Route path="/doc" element={<Doc />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App; 