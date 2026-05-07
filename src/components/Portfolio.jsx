import { useEffect, useRef, useState } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';

const allProjects = [
  { src: img1, title: 'Modern Living Room',   cat: 'Living Room' },
  { src: img2, title: 'Luxury Bedroom Suite', cat: 'Bedroom'     },
  { src: img3, title: 'Premium Kitchen',      cat: 'Kitchen'     },
  { src: img4, title: 'Contemporary Dining',  cat: 'Living Room' },
  { src: img5, title: 'Master Bedroom',       cat: 'Bedroom'     },
  { src: img6, title: 'Modular Kitchen',      cat: 'Kitchen'     },
  { src: img7, title: 'Open Living Space',    cat: 'Living Room' },
  { src: img8, title: 'Luxury Bathroom',      cat: 'Renovation'  },
  { src: img9, title: 'Home Office',          cat: 'Renovation'  },
];

const cats = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Renovation'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const sectionRef = useRef(null);

  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.cat === active);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.05 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-28" style={{ background: '#0d0d0d', paddingBottom: '7rem' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div className="text-center mb-12">
          <p className="reveal font-montserrat text-[10px] tracking-[0.4em] text-[#c9a84c] uppercase mb-4">Our Work</p>
          <h2 className="reveal font-playfair text-4xl md:text-5xl text-[#f5f0e8] leading-tight">
            Project <span className="italic gold-text">Showcase</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-16">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              style={{
                padding: '0.6rem 1.6rem',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '10px',
                fontWeight: '600',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                border: `1px solid ${active === c ? '#c9a84c' : 'rgba(255,255,255,0.2)'}`,
                background: active === c ? 'linear-gradient(135deg,#c9a84c,#e8c97a)' : 'transparent',
                color: active === c ? '#000' : 'rgba(255,255,255,0.6)',
                boxShadow: active === c ? '0 4px 20px rgba(201,168,76,0.35)' : 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                if (active !== c) {
                  e.currentTarget.style.borderColor = '#c9a84c';
                  e.currentTarget.style.color = '#c9a84c';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={e => {
                if (active !== c) {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid — 3 equal columns, fixed height rows */}
        <div className="grid-portfolio">
          {filtered.map((p, i) => (
            <div
              key={`${p.title}-${i}`}
              className="reveal portfolio-card"
              style={{ transitionDelay: `${i * 0.06}s`, height: '280px' }}
            >
              <img
                src={p.src}
                alt={p.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              <div className="portfolio-overlay">
                <div>
                  <p className="font-montserrat text-[9px] tracking-widest uppercase text-[#c9a84c] mb-1">{p.cat}</p>
                  <p className="font-playfair text-lg text-white">{p.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
