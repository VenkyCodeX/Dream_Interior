import { useEffect, useRef } from 'react';
import { Award, Users, DollarSign, Clock, Palette, Shield } from 'lucide-react';

const reasons = [
  { icon: Award,       title: 'Premium Quality',      desc: 'Only the finest materials and finishes — no compromises on quality at any price point.' },
  { icon: Users,       title: 'Expert Designers',     desc: 'A team of seasoned designers with 8+ years of luxury interior experience.' },
  { icon: DollarSign,  title: 'Transparent Pricing',  desc: 'Clear, upfront pricing with no hidden costs. You know exactly what you pay for.' },
  { icon: Clock,       title: 'Timely Delivery',      desc: 'We respect your time. Projects delivered on schedule, every single time.' },
  { icon: Palette,     title: 'Customized Solutions', desc: 'Every design is uniquely crafted to reflect your personality and lifestyle.' },
  { icon: Shield,      title: 'After-Sales Support',  desc: '1-year warranty and dedicated post-project support for complete peace of mind.' },
];

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" ref={sectionRef} className="py-28" style={{ background: '#111111', paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 2rem' }}>

        <div className="text-center mb-16">
          <p className="reveal font-montserrat text-[10px] tracking-[0.4em] text-[#c9a84c] uppercase mb-4">Why Dream Home</p>
          <h2 className="reveal font-playfair text-4xl md:text-5xl text-[#f5f0e8] leading-tight">
            The <span className="italic gold-text">Difference</span> We Make
          </h2>
        </div>

        <div className="grid-3col">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="reveal"
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  background: 'rgba(255,255,255,0.02)',
                  padding: '2rem',
                  border: '1px solid rgba(255,255,255,0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(201,168,76,0.08)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle at 30% 30%, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 border border-[#c9a84c]/20 group-hover:border-[#c9a84c]/60 transition-all duration-300" />
                    <Icon size={22} className="text-[#c9a84c]" />
                  </div>
                  <h3 className="font-playfair text-xl text-[#f5f0e8] mb-3">{r.title}</h3>
                  <p className="font-poppins text-xs text-white/50 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
