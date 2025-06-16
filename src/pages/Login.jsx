import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // trigger animation after mount
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
        alert("Google login failed.");
      });
  };

  return (
    <div style={backgroundStyle}>
      <div
        className={`login-box ${animate ? "fade-in" : ""}`}
        style={loginBoxStyle}
      >
        <h2 style={gradientHeadingStyle}>Login to Rhymygy</h2>

        <form onSubmit={handleLogin} style={formStyle}>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="animated-input"
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="animated-input"
            style={inputStyle}
          />
          <button type="submit" className="animated-button" style={buttonStyle}>
            Log In
          </button>
        </form>

        <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
          <span style={{ color: '#aaa' }}>or</span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="animated-button"
          style={{
            ...buttonStyle,
            background: '#fff',
            color: '#111',
            fontWeight: '600'
          }}
        >
          Sign in with Google
        </button>

        <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', textAlign: 'center', color: '#ccc' }}>
          Don’t have an account? <Link to="/signup" style={{ color: '#60a5fa' }}>Sign up</Link>
        </p>
      </div>

      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeSlide 1.2s ease-out forwards;
          }
          .animated-button:hover {
            transform: scale(1.05);
            transition: transform 0.2s ease;
          }
          .animated-input:focus {
            box-shadow: 0 0 0 2px #a855f7, 0 0 10px #a855f7;
            transition: box-shadow 0.3s ease;
          }
        `}
      </style>
    </div>
  );
}

// Style objects
const backgroundStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(-45deg,rgb(63, 187, 144),rgb(131, 36, 182),rgb(70, 10, 116),rgba(37, 166, 136, 0.77))',
  backgroundSize: '400% 400%',
  animation: 'gradientMove 15s ease infinite',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  color: 'white',
};

const loginBoxStyle = {
  backgroundColor: 'rgba(120, 52, 122, 0.89)',
  padding: '2rem',
  borderRadius: '1.5rem',
  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
  width: '100%',
  maxWidth: '450px',
  backdropFilter: 'blur(10px)',
  transform: 'translateY(30px)',
  opacity: 0,
};

const gradientHeadingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  textAlign: 'center',
  background: 'linear-gradient(to right, #60a5fa, #a855f7, #f472b6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

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
  transition: 'transform 0.2s ease-in-out',
};

