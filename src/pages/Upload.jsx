import { useState } from "react";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [audioFile, setAudioFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, lyrics, audioFile });
    // 🔒 Later: send to backend API or Firebase Storage
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-xl w-full space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Upload Your Verse</h2>

        <div>
          <label className="block mb-1 text-sm text-gray-300">Track Title</label>
          <input
            type="text"
            placeholder="e.g. My Freestyle"
            className="w-full p-2 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-300">Lyrics / Bars</label>
          <textarea
            rows="4"
            placeholder="Drop your bars here..."
            className="w-full p-2 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-300">Audio File</label>
          <input
            type="file"
            accept="audio/*"
            className="w-full p-2 rounded bg-gray-800 text-sm"
            onChange={(e) => setAudioFile(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 rounded hover:bg-indigo-500 transition font-semibold"
        >
          Upload Verse
        </button>
      </form>
    </div>
  );
}
