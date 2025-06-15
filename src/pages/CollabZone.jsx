import { useState } from "react";

export default function CollabZone() {
  const [openVerse, setOpenVerse] = useState("");
  const [replies, setReplies] = useState([]);

  const handleReply = () => {
    if (openVerse.trim()) {
      setReplies([...replies, openVerse]);
      setOpenVerse("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🤝 Open Collab Zone</h1>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-2">Drop Your Verse</h2>
          <textarea
            className="w-full p-3 rounded bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
            rows={4}
            placeholder="Write a response or start a cypher..."
            value={openVerse}
            onChange={(e) => setOpenVerse(e.target.value)}
          />
          <button
            onClick={handleReply}
            className="mt-4 bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500 transition"
          >
            Submit Verse
          </button>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Replies</h3>
          {replies.length === 0 && (
            <p className="text-gray-400 italic">No replies yet. Be the first!</p>
          )}
          {replies.map((reply, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-lg text-sm text-white">
              {reply}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
