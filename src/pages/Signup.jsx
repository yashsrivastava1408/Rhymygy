import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Signup() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(-45deg,rgb(17, 62, 199),rgb(108, 36, 36),rgb(73, 15, 117),rgb(149, 32, 90))',
      backgroundSize: '400% 400%',
      animation: 'gradientMove 15s ease infinite',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      color: 'white',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: '2rem',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '450px',
        backdropFilter: 'blur(10px)',
        opacity: animate ? 1 : 0,
        transform: animate ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-in-out',
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          textAlign: 'center',
          background: 'linear-gradient(to right, #60a5fa, #a855f7, #f472b6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Create Your Rhymygy Account
        </h2>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="yourrapname"
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="you@example.com"
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="••••••••"
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', textAlign: 'center', color: '#ccc' }}>
          Already have an account? <Link to="/login" style={{ color: '#60a5fa' }}>Log in</Link>
        </p>
      </div>

      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
}

const inputStyle = {
  padding: '0.8rem 1rem',
  borderRadius: '0.75rem',
  border: 'none',
  backgroundColor: '#222',
  color: 'white',
  fontSize: '1rem',
  outline: 'none',
};

const buttonStyle = {
  background: 'linear-gradient(to right, #d946ef, #6366f1)',
  padding: '0.8rem',
  borderRadius: '2rem',
  color: 'white',
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'transform 0.2s',
};

