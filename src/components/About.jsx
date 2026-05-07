import { useEffect, useRef, useState } from 'react';
import img4 from '../assets/img4.png';

function Counter({ target, suffix = '+', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 350, suffix: '+', label: 'Projects Completed' },
    { value: 500, suffix: '+', label: 'Happy Clients' },
    { value: 8, suffix: '+', label: 'Years Experience' },
    { value: 4.9, suffix: '★', label: 'Average Rating' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-28" style={{ background: '#0d0d0d', paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 2rem' }} className="grid-2col items-center">
        {/* Image side — pb-10 gives room for the badge inside the flow */}
        <div className="reveal relative pb-10 pr-6">
          {/* Gold accent corner */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#c9a84c] z-10 pointer-events-none" />

          <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
            <img src={img4} alt="Luxury Interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Floating badge — positioned relative to the padded wrapper, not overflowing */}
          <div
            className="glass absolute bottom-0 right-0 p-5 float-anim"
            style={{ border: '1px solid rgba(201,168,76,0.3)' }}
          >
            <p className="font-playfair text-2xl gold-text font-bold">4.9★</p>
            <p className="font-poppins text-xs text-white/60 mt-1">Google Rating</p>
          </div>
        </div>

        {/* Text side */}
        <div>
          <p className="reveal font-montserrat text-[10px] tracking-[0.4em] text-[#c9a84c] uppercase mb-4">Our Story</p>
          <h2 className="reveal font-playfair text-4xl md:text-5xl text-[#f5f0e8] leading-tight mb-6">
            Where Vision Meets<br />
            <span className="italic gold-text">Craftsmanship</span>
          </h2>
          <p className="reveal font-poppins text-sm text-white/55 leading-relaxed mb-4">
            Dream Home Interiors is Hyderabad's most trusted luxury interior design studio. We transform spaces into timeless masterpieces — blending contemporary aesthetics with functional elegance.
          </p>
          <p className="reveal font-poppins text-sm text-white/55 leading-relaxed mb-10">
            From modular kitchens to full home renovations, every project is crafted with precision, passion, and an unwavering commitment to quality that exceeds expectations.
          </p>

          {/* Stats grid */}
          <div className="reveal grid grid-cols-2 gap-6" style={{ marginBottom: '2.5rem' }}>
            {stats.map((s, i) => (
              <div key={i} className="border-l-2 border-[#c9a84c] pl-4">
                <p className="font-playfair text-3xl gold-text font-bold">
                  <Counter target={s.value} suffix={s.suffix} />
                </p>
                <p className="font-poppins text-xs text-white/50 mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="reveal">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '0.9rem 2.2rem', cursor: 'pointer',
                background: 'linear-gradient(135deg,#c9a84c,#e8c97a)', color: '#000',
                fontFamily: 'Montserrat, sans-serif', fontWeight: '700',
                fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
                border: 'none', boxShadow: '0 4px 24px rgba(201,168,76,0.35)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(201,168,76,0.35)'; }}
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
