import Navbar from '../components/Navbar';
import ParticlesBackground from '../components/ParticlesBackground';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const trendingTracks = [
    {
      title: 'Code in my veins',
      artist: 'MC Neural',
      img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    },
    {
      title: 'Mic Drop on Mars',
      artist: 'Luna Flow',
      img: 'https://images.unsplash.com/photo-1508051123996-69f8caf4891e',
    },
    {
      title: 'Dreams in Binary',
      artist: 'AI Verse',
      img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
    },
    {
      title: 'Beats in the Matrix',
      artist: 'Glitch Poet',
      img: 'https://images.unsplash.com/photo-1531983412531-1cde6e668a91',
    },
    {
      title: 'Quantum Bars',
      artist: 'Logic Synth',
      img: 'https://images.unsplash.com/photo-1581078426770-6b7c5c182f30',
    },
    {
      title: '808 Horizon',
      artist: 'Bass Code',
      img: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1',
    },
  ];

  const categories = [
    {
      name: '🔥 Trending Hits',
      desc: 'Top verses across the platform',
      color: '#f87171',
    },
    {
      name: '🎤 Freestyle Vault',
      desc: 'Raw, unfiltered talent',
      color: '#a78bfa',
    },
    {
      name: '🎧 Loops & Beats',
      desc: 'Instrumentals and hooks',
      color: '#34d399',
    },
    {
      name: '🧠 AI Punchlines',
      desc: 'Generated bars & flow',
      color: '#facc15',
    },
    {
      name: '🌍 Global Flow',
      desc: 'Verses from around the world',
      color: '#60a5fa',
    },
    {
      name: '💡 Idea Generator',
      desc: 'Prompt-based inspiration',
      color: '#f472b6',
    },
  ];

  return (
    <div
      className={`relative min-h-screen w-full text-white font-inter overflow-hidden transition-all duration-1000 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        background: 'linear-gradient(-45deg, rgb(0, 0, 0), rgb(0, 0, 0), rgb(46, 172, 124), rgb(0, 0, 0))',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 15s ease infinite',
      }}
    >
      <ParticlesBackground />
      <Navbar />

      {/* Top Action Buttons */}
      <div className="flex justify-center gap-8 py-6 px-6 bg-white/5 backdrop-blur-md shadow-xl sticky top-0 z-20 rounded-b-2xl">
        <Link to="/upload">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md">
            🎙 Upload
          </button>
        </Link>
        <Link to="/collab">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md">
            🤝 Collab
          </button>
        </Link>
        <Link to="/record">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md">
            🎧 Record
          </button>
        </Link>
      </div>

      {/* 🔥 Trending Tracks */}
      <section className="max-w-7xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold mb-8">🔥 Trending Tracks</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {trendingTracks.map((track, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300 animate-float hover:shadow-yellow-400/30"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <img
                src={track.img}
                alt={track.title}
                className="w-[120px] h-[120px] object-cover rounded-md mt-3"
              />
              <div className="text-center px-2 py-3">
                <h3 className="text-xs font-semibold truncate">{track.title}</h3>
                <p className="text-[11px] text-gray-400 truncate">{track.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🗂️ Categories Section */}
      <section className="max-w-7xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold mb-8">🗂️ Explore Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 text-center animate-float hover:shadow-[0_0_10px_2px] hover:shadow-white/20"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <h3 className="text-sm font-bold mb-1" style={{ color: cat.color }}>{cat.name}</h3>
              <p className="text-xs text-gray-300">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-sm text-gray-400 pb-16">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Rhymygy</span> — Where Every Rhyme Finds Rhythm
      </footer>

      {/* Animations + CSS fixes */}
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            background: black;
            overflow-x: hidden;
          }

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes floatUp {
            0% { transform: translateY(12px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }

          .animate-float {
            animation: floatUp 0.6s ease both;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}
