import { useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import { generateFlow } from "../services/ai";
import Loader from "../components/Loader";
import { getLayoutedElements } from "../utils/flowUtils.js";

export default function Flow() {
  const [input, setInput] = useState("");
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input) return;

    try {
      setLoading(true);

      const res = await generateFlow({ input });
      const flow = res.data;

      // 🔥 Better layout (vertical clean flow)
      const rfNodes = flow.nodes.map((n, i) => ({
        id: n.id,
        data: { label: n.label },
        position: { x: 250, y: i * 120 }, // 👈 vertical alignment
        style: {
          padding: 10,
          borderRadius: 10,
          border: "1px solid #333",
          background: "#f9fafb",
        },
      }));

      const rfEdges = flow.edges.map((e) => ({
        id: e.source + "-" + e.target,
        source: e.source,
        target: e.target,
        animated: true, // 🔥 animation
      }));

  const { nodes: layoutNodes, edges: layoutEdges } =
  getLayoutedElements(rfNodes, rfEdges);

setNodes(layoutNodes);
setEdges(layoutEdges);  
    } catch (err) {
      console.error(err);
      alert("Error generating flow");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col p-5">
      <h1 className="text-2xl font-bold mb-4">FlowMind 🚀</h1>

      {/* Input Section */}
      <div className="flex gap-3 mb-4">
        <input
          className="border p-2 w-80 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter problem (e.g. login system)"
        />

        <button
          className="px-4 py-2 rounded bg-green-500 text-white"
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>

      {/* Loader */}
      {loading && <Loader />}

      {/* Flowchart */}
      {!loading && (
        <div className="flex-1 border rounded">
          <ReactFlow nodes={nodes} edges={edges} fitView>
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      )}
    </div>
  );
}