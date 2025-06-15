import Navbar from '../components/Navbar';
import VerseCard from '../components/VerseCard';
import { Link } from 'react-router-dom';

const sampleVerses = [
  {
    id: 1,
    author: 'Lil Byte',
    time: '2 min ago',
    lyrics: "I speak in code, my bars compile,\nEvery rhyme encrypted, every verse in style.",
    audio: "",
    likes: 24,
    comments: 6,
  },
  {
    id: 2,
    author: 'MC Logic',
    time: '10 min ago',
    lyrics: "AI dreams and silicon streets,\nI battle machines with lyrical feats.",
    audio: "",
    likes: 58,
    comments: 14,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">🔥 Verse Feed</h1>
        {sampleVerses.map((verse) => (
          <VerseCard key={verse.id} verse={verse} />
        ))}

        <div className="mt-12 flex justify-center gap-6">
          <Link to="/upload">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg">
              Upload
            </button>
          </Link>
          <Link to="/collab">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg">
              Collab Zone
            </button>
          </Link>
          <Link to="/record">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
              Record
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
