import Navbar from '../components/Navbar';
import VerseCard from '../components/VerseCard';

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

export default function VerseFeed() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">🔥 Verse Feed</h1>
        {sampleVerses.map((verse) => (
          <VerseCard key={verse.id} verse={verse} />
        ))}
      </div>
    </div>
  );
}
