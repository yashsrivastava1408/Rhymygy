import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const stats = [
    { number: "0", label: "Verses Shared" },
    { number: "0", label: "Artists Joined" },
    { number: "0", label: "Collabs Completed" }
  ];

  const testimonials = [
    "“Mt Dekh Kya Kahega Samaaj,Likh Daal Apne Jasbaat,” – YASH SRIVASTAVA",
    "“Ek Kalam Ek Shyahi,Or ek mauka” – YASH SRIVASTAVA",
    "“Uski Khoobsurti Likhte Likhte bhar gyi Kitab” – YASH SRIVASTAVA"
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: 'linear-gradient(-45deg,rgb(0, 1, 4),rgb(0, 1, 3),rgb(34, 12, 51),rgb(12, 6, 9))',
      backgroundSize: '400% 400%',
      animation: 'gradientMove 15s ease infinite',
      color: 'white',
      padding: '2rem',
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 1.2s ease'
    }}>
      {/* Title */}
      <h1 style={{
        fontSize: '13rem',
        fontWeight: '900',
        background: 'linear-gradient(to right, #60a5fa, #8b5cf6, #ec4899)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '0.5rem'
      }}>RhymyGy</h1>

      {/* Subtitle */}
      <p style={{
        fontSize: '1.5rem',
        color: '#d1d5db',
        marginBottom: '1rem'
      }}>
        The Verse Playground
      </p>

      {/* Description */}
      <p style={{
        fontSize: '1.1rem',
        color: '#e5e7eb',
        maxWidth: '600px',
        marginBottom: '2rem'
      }}>
        Where rhythm meets creativity. Share your verses, collab with talent, and let the world feel your flow.
      </p>

      {/* Login CTA */}
      <Link to="/login">
        <button
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          style={{
            background: 'linear-gradient(to right, #d946ef, #6366f1)',
            border: 'none',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            borderRadius: '2rem',
            color: 'white',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s',
            marginBottom: '3rem'
          }}
        >
          Login
        </button>
      </Link>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
        {stats.map((item, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{item.number}</p>
            <p style={{ fontSize: '1rem', color: '#cbd5e1' }}>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div style={{
        maxWidth: '500px',
        padding: '1.2rem 1.5rem',
        backgroundColor: 'rgba(80, 24, 118, 0.05)',
        borderRadius: '1rem',
        fontStyle: 'italic',
        color: '#e0e0e0',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
      }}>
        {testimonials[testimonialIndex]}
      </div>

      {/* Inject Keyframes Animation */}
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

