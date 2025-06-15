export default function VerseCard({ verse }) {
  return (
    <div className="bg-gray-900 p-5 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-indigo-400">{verse.author}</h3>
        <span className="text-xs text-gray-500">{verse.time}</span>
      </div>

      <p className="text-white text-sm mb-3 whitespace-pre-wrap">
        {verse.lyrics}
      </p>

      {verse.audio && (
        <audio controls className="w-full mt-2">
          <source src={verse.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}

      <div className="mt-4 flex space-x-4 text-sm text-gray-400">
        <button className="hover:text-indigo-400">❤️ {verse.likes}</button>
        <button className="hover:text-indigo-400">💬 {verse.comments} Comments</button>
        <button className="hover:text-indigo-400">🔁 Reply</button>
      </div>
    </div>
  );
}
