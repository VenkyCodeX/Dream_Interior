import { useEffect, useRef } from 'react';
import { ChefHat, Sofa, BedDouble, LayoutDashboard, Hammer, Sparkles } from 'lucide-react';

const services = [
  { icon: ChefHat,        title: 'Modular Kitchen',    desc: 'Precision-crafted modular kitchens with premium finishes, smart storage, and ergonomic layouts tailored to your lifestyle.', tag: 'Most Popular' },
  { icon: Sofa,           title: 'Living Room Design', desc: 'Curated living spaces that balance luxury aesthetics with everyday comfort — your personal statement of style.', tag: null },
  { icon: BedDouble,      title: 'Bedroom Interiors',  desc: 'Serene, bespoke bedroom sanctuaries designed for rest and rejuvenation with premium materials and lighting.', tag: null },
  { icon: LayoutDashboard,title: 'Space Planning',     desc: 'Intelligent space optimization that maximizes functionality without compromising on elegance or flow.', tag: null },
  { icon: Hammer,         title: 'Home Renovation',    desc: 'Complete home transformation services — from structural changes to finishing touches — executed flawlessly.', tag: null },
  { icon: Sparkles,       title: 'Luxury Decor',       desc: 'Handpicked décor elements, art curation, and styling that elevate every corner of your home to gallery-level.', tag: null },
];

const cardStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(201,168,76,0.15)',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
  cursor: 'default',
};

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.05 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} style={{ background: '#111111', padding: '7rem 0' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="reveal font-montserrat text-[10px] tracking-[0.4em] text-[#c9a84c] uppercase mb-4">What We Offer</p>
          <h2 className="reveal font-playfair text-4xl md:text-5xl text-[#f5f0e8] leading-tight">
            Our <span className="italic gold-text">Services</span>
          </h2>
        </div>

        {/* Cards — no reveal class on cards, always visible, animate via CSS delay */}
        <div className="grid-3col">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                style={{ ...cardStyle, animationDelay: `${i * 0.1}s` }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(201,168,76,0.1), 0 0 0 1px rgba(201,168,76,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Most Popular badge */}
                {s.tag && (
                  <span style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    fontFamily: 'Montserrat, sans-serif', fontSize: '9px',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    padding: '4px 10px', background: '#c9a84c', color: '#000', fontWeight: '700',
                  }}>
                    {s.tag}
                  </span>
                )}

                {/* Icon */}
                <div style={{
                  width: '52px', height: '52px', flexShrink: 0,
                  border: '1px solid rgba(201,168,76,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem', transition: 'all 0.3s ease',
                }}>
                  <Icon size={22} color="#c9a84c" />
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#f5f0e8', marginBottom: '0.75rem' }}>
                  {s.title}
                </h3>

                {/* Desc */}
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', flex: 1 }}>
                  {s.desc}
                </p>

                {/* Bottom gold line */}
                <div style={{
                  marginTop: '1.5rem', height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
                  transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.5s ease',
                }}
                  className="card-line"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
