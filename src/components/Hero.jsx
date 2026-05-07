import { useEffect, useRef, useState } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const slides = [img1, img2, img3];

const btnPrimary = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
  padding: '1rem 2.5rem',
  background: 'linear-gradient(135deg, #c9a84c, #e8c97a)',
  color: '#000',
  fontFamily: 'Montserrat, sans-serif', fontWeight: '600',
  fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
  border: 'none', cursor: 'pointer',
  boxShadow: '0 4px 24px rgba(201,168,76,0.35)',
  transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
};

const btnOutline = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
  padding: '1rem 2.5rem',
  background: 'transparent',
  color: '#fff',
  fontFamily: 'Montserrat, sans-serif', fontWeight: '500',
  fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
  border: '1px solid rgba(255,255,255,0.4)', cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {slides.map((src, i) => (
        <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
          <img
            src={src} alt={`Interior ${i + 1}`}
            className="w-full h-full object-cover"
            style={{ transform: `scale(1.08) translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`, transition: 'transform 0.8s ease' }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Mouse glow */}
      <div className="absolute w-96 h-96 rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        left: `calc(50% + ${mousePos.x * 8}px)`, top: `calc(50% + ${mousePos.y * 8}px)`,
        transform: 'translate(-50%,-50%)', transition: 'left 0.3s ease, top 0.3s ease',
      }} />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#c9a84c] uppercase mb-6"
          style={{ animation: 'fadeUp 1s ease 0.3s both' }}>
          Hyderabad's Premier Interior Studio
        </p>
        <h1 className="font-playfair hero-title text-[#f5f0e8] leading-tight mb-6 max-w-5xl"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', animation: 'fadeUp 1s ease 0.5s both' }}>
          Crafting <span className="italic gold-text">Luxury</span><br />Living Spaces
        </h1>
        <p className="font-poppins text-sm md:text-base text-white/60 max-w-xl mb-10 leading-relaxed"
          style={{ animation: 'fadeUp 1s ease 0.7s both' }}>
          Premium Interior Design &amp; Modular Solutions in Hyderabad
        </p>

        <div className="flex flex-col sm:flex-row gap-4" style={{ animation: 'fadeUp 1s ease 0.9s both' }}>
          <button
            onClick={() => scrollTo('portfolio')}
            style={btnPrimary}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(201,168,76,0.35)'; }}
          >
            Explore Projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            style={btnOutline}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#c9a84c'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? '2rem' : '0.4rem', height: '2px', border: 'none', cursor: 'pointer',
            background: i === current ? '#c9a84c' : 'rgba(255,255,255,0.3)', transition: 'all 0.3s ease', padding: 0,
          }} />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 flex flex-col items-center gap-2" style={{ animation: 'fadeUp 1s ease 1.2s both' }}>
        <p className="font-montserrat text-[9px] tracking-[0.3em] text-white/40 uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#c9a84c] to-transparent" />
      </div>
    </section>
  );
}
