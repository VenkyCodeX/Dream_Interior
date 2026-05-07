import { useEffect, useRef } from 'react';
import { MessageSquare, Ruler, Paintbrush, HardHat, CheckCircle } from 'lucide-react';

const steps = [
  { icon: MessageSquare, num: '01', title: 'Consultation', desc: 'Free in-depth consultation to understand your vision, lifestyle, and budget.' },
  { icon: Ruler,         num: '02', title: 'Planning',     desc: 'Detailed space planning, measurements, and material selection with 3D previews.' },
  { icon: Paintbrush,    num: '03', title: 'Design',       desc: 'Bespoke design concepts crafted by our senior designers for your approval.' },
  { icon: HardHat,       num: '04', title: 'Execution',    desc: 'Expert craftsmen bring the design to life with precision and premium materials.' },
  { icon: CheckCircle,   num: '05', title: 'Delivery',     desc: 'Final walkthrough, styling, and handover — your dream home, delivered.' },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.2 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-28" style={{ background: '#111111', paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div className="text-center mb-20">
          <p className="reveal font-montserrat text-[10px] tracking-[0.4em] text-[#c9a84c] uppercase mb-4">How We Work</p>
          <h2 className="reveal font-playfair text-4xl md:text-5xl text-[#f5f0e8] leading-tight">
            Our <span className="italic gold-text">Process</span>
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          {/* Step boxes row */}
          <div className="grid-process">

            {/* Connecting line behind boxes */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), rgba(201,168,76,0.4), transparent)',
              zIndex: 0,
            }} />

            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="reveal flex flex-col items-center text-center"
                  style={{ transitionDelay: `${i * 0.15}s`, position: 'relative', zIndex: 1 }}
                >
                  {/* Icon square */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    border: '1px solid rgba(201,168,76,0.4)',
                    background: '#111111',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    marginBottom: '1.25rem',
                    flexShrink: 0,
                  }}>
                    <Icon size={26} color="#c9a84c" />
                    {/* Number badge */}
                    <span style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '-10px',
                      width: '22px',
                      height: '22px',
                      background: '#c9a84c',
                      color: '#000',
                      fontSize: '9px',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {s.num}
                    </span>
                  </div>

                  <h3 className="font-playfair text-base text-[#f5f0e8] mb-2">{s.title}</h3>
                  <p className="font-poppins text-xs text-white/45 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden flex flex-col">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="reveal flex gap-5" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex flex-col items-center">
                  <div style={{
                    width: '48px', height: '48px', flexShrink: 0,
                    border: '1px solid rgba(201,168,76,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color="#c9a84c" />
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: '1px', flex: 1, margin: '6px 0', background: 'rgba(201,168,76,0.2)' }} />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-montserrat text-[9px] tracking-widest text-[#c9a84c] uppercase mb-1">{s.num}</p>
                  <h3 className="font-playfair text-lg text-[#f5f0e8] mb-1">{s.title}</h3>
                  <p className="font-poppins text-xs text-white/45 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
