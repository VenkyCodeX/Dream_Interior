import { useEffect, useRef } from 'react';
import { Phone, FileText } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.813A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-5.03-1.36l-.36-.22-4.6 1.077 1.1-4.47-.24-.37A9.944 9.944 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.5 5c-.28 0-.74.105-1.13.525C10.98 10.945 10 12.07 10 13.75c0 1.68 1.22 3.305 1.39 3.535.17.23 2.39 3.79 5.87 5.165 2.9 1.145 3.49.917 4.12.86.63-.058 2.03-.83 2.32-1.63.29-.8.29-1.485.2-1.63-.09-.145-.33-.23-.69-.4-.36-.17-2.13-1.05-2.46-1.17-.33-.12-.57-.17-.81.17-.24.34-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.955-1.79-2.135-2-2.495-.21-.36-.02-.555.16-.735.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.955-1.11-2.675-.29-.7-.59-.6-.81-.61-.21-.01-.45-.01-.69-.01z"/>
  </svg>
);

const baseBtn = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
  padding: '1rem 2.5rem', cursor: 'pointer',
  fontFamily: 'Montserrat, sans-serif', fontWeight: '600',
  fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
  transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
  textDecoration: 'none',
};

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.2 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden"
      style={{ background: '#0d0d0d', padding: '7rem 2rem' }}>

      {/* BG glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div style={{ width: '600px', height: '600px', borderRadius: '50%', opacity: 0.05,
          background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p className="reveal font-montserrat text-[10px] tracking-[0.4em] text-[#c9a84c] uppercase mb-6">Ready to Begin?</p>
        <h2 className="reveal font-playfair text-4xl md:text-6xl text-[#f5f0e8] leading-tight mb-6">
          Let's Design Your<br />
          <span className="italic gold-text">Dream Home</span>
        </h2>
        <p className="reveal font-poppins text-sm text-white/50 mb-12 leading-relaxed">
          Take the first step towards your dream living space. Our experts are ready to bring your vision to life.
        </p>

        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>

          {/* Call Now */}
          <a href="tel:+917702254560"
            style={{ ...baseBtn, background: 'linear-gradient(135deg,#c9a84c,#e8c97a)', color: '#000', boxShadow: '0 4px 24px rgba(201,168,76,0.4)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(201,168,76,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(201,168,76,0.4)'; }}
          >
            <Phone size={15} /> Call Now
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/917702254560?text=Hi%2C%20I%27m%20interested%20in%20your%20interior%20design%20services"
            target="_blank" rel="noopener noreferrer"
            style={{ ...baseBtn, background: 'transparent', color: '#25D366', border: '1px solid #25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.15)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.color = '#000'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(37,211,102,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#25D366'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.15)'; }}
          >
            <WhatsAppIcon /> WhatsApp Us
          </a>

          {/* Get Free Quote */}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ ...baseBtn, background: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.2)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#c9a84c'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,168,76,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <FileText size={15} /> Get Free Quote
          </button>

        </div>
      </div>
    </section>
  );
}
