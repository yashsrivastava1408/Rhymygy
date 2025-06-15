import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-gray-800">
      <h1 className="text-white text-2xl font-bold">
        <Link to="/">🎤 Rhymygy</Link>
      </h1>
      <div className="space-x-4">
        <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
        <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
