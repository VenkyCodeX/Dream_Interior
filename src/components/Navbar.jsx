import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const links = ['Home', 'About', 'Services', 'Portfolio', 'Process', 'Testimonials', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[9000] transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.5rem 0',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 2rem' }} className="flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('home')} className="text-left">
          <p className="font-montserrat text-[10px] tracking-[0.35em] text-[#c9a84c] uppercase">Dream Home</p>
          <p className="font-playfair text-xl text-[#f5f0e8] leading-tight">Interiors</p>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="nav-link font-poppins text-xs tracking-widest uppercase text-white/70 hover:text-[#c9a84c] transition-colors duration-300"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:+917702254560"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '0.6rem 1.4rem',
            border: '1px solid #c9a84c', color: '#c9a84c',
            fontFamily: 'Montserrat, sans-serif', fontSize: '10px',
            letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '600',
            textDecoration: 'none', cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          className="hidden lg:inline-flex"
          onMouseEnter={e => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.color = '#000'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a84c'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          <Phone size={13} />
          Call Now
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-[#c9a84c]">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-500"
        style={{ maxHeight: open ? '400px' : '0' }}
      >
        <div className="px-6 py-4 flex flex-col gap-4" style={{ background: 'rgba(13,13,13,0.97)' }}>
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="font-poppins text-xs tracking-widest uppercase text-white/70 hover:text-[#c9a84c] transition-colors text-left py-1"
            >
              {l}
            </button>
          ))}
          <a href="tel:+917702254560" className="flex items-center gap-2 text-[#c9a84c] font-poppins text-xs tracking-widest uppercase mt-2">
            <Phone size={13} /> +91 77022 54560
          </a>
        </div>
      </div>
    </nav>
  );
}
