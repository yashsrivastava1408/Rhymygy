import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Upload from './pages/Upload';
import CollabZone from './pages/CollabZone';
import Recorder from './pages/Recorder';
import Dashboard from './pages/Dashboard'; // ✅ New

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/collab" element={<CollabZone />} />
        <Route path="/record" element={<Recorder />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}
