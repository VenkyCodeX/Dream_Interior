import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Reddy',
    role: 'Homeowner, Jubilee Hills',
    text: 'Dream Home Interiors transformed our 3BHK into an absolute masterpiece. The attention to detail, the quality of materials, and the professionalism of the team was beyond our expectations. Truly world-class!',
    rating: 5,
    initials: 'PR',
  },
  {
    name: 'Arjun Sharma',
    role: 'Villa Owner, Kompally',
    text: 'We hired them for our modular kitchen and living room. The result was stunning — every corner was thoughtfully designed. The team was transparent about costs and delivered on time. Highly recommend!',
    rating: 5,
    initials: 'AS',
  },
  {
    name: 'Kavitha Nair',
    role: 'Apartment Owner, Gachibowli',
    text: 'From the first consultation to the final reveal, the experience was seamless. They understood our vision perfectly and brought it to life with such elegance. Our home is now our favourite place.',
    rating: 5,
    initials: 'KN',
  },
  {
    name: 'Rahul Mehta',
    role: 'Penthouse Owner, Banjara Hills',
    text: 'Exceptional craftsmanship and impeccable taste. Dream Home Interiors elevated our penthouse to a level we never imagined possible. The team is passionate, skilled, and truly dedicated.',
    rating: 5,
    initials: 'RM',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-28" style={{ background: '#0d0d0d', paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal font-montserrat text-[10px] tracking-[0.4em] text-[#c9a84c] uppercase mb-4">Client Stories</p>
          <h2 className="reveal font-playfair text-4xl md:text-5xl text-[#f5f0e8] leading-tight">
            What Our <span className="italic gold-text">Clients Say</span>
          </h2>
        </div>

        {/* Card area — fixed height so controls don't jump */}
        <div className="reveal">
          <div style={{ position: 'relative', minHeight: '300px' }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass"
                style={{
                  padding: '2.5rem',
                  position: 'absolute',
                  inset: 0,
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? 'translateX(0) scale(1)' : i < current ? 'translateX(-30px) scale(0.98)' : 'translateX(30px) scale(0.98)',
                  transition: 'all 0.6s cubic-bezier(0.23,1,0.32,1)',
                  pointerEvents: i === current ? 'auto' : 'none',
                }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1.25rem' }}>
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} size={14} fill="#c9a84c" color="#c9a84c" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-playfair text-lg text-[#f5f0e8] leading-relaxed mb-8 italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '48px', height: '48px', flexShrink: 0,
                    background: '#c9a84c', color: '#000',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Montserrat, sans-serif', fontWeight: '700', fontSize: '13px',
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-poppins text-sm text-[#f5f0e8] font-medium">{t.name}</p>
                    <p className="font-poppins text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls — sits below the fixed-height card area */}
          <div style={{
            marginTop: '320px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            {/* Dot indicators */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    height: '2px',
                    width: i === current ? '2rem' : '0.4rem',
                    background: i === current ? '#c9a84c' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={prev}
                style={{
                  width: '40px', height: '40px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'transparent', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#c9a84c'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                style={{
                  width: '40px', height: '40px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'transparent', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#c9a84c'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
