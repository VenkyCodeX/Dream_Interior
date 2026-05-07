import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Globe, Send, CheckCircle } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="15" height="15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.813A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-5.03-1.36l-.36-.22-4.6 1.077 1.1-4.47-.24-.37A9.944 9.944 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.5 5c-.28 0-.74.105-1.13.525C10.98 10.945 10 12.07 10 13.75c0 1.68 1.22 3.305 1.39 3.535.17.23 2.39 3.79 5.87 5.165 2.9 1.145 3.49.917 4.12.86.63-.058 2.03-.83 2.32-1.63.29-.8.29-1.485.2-1.63-.09-.145-.33-.23-.69-.4-.36-.17-2.13-1.05-2.46-1.17-.33-.12-.57-.17-.81.17-.24.34-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.955-1.79-2.135-2-2.495-.21-.36-.02-.555.16-.735.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.955-1.11-2.675-.29-.7-.59-.6-.81-.61-.21-.01-.45-.01-.69-.01z"/>
  </svg>
);

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. I'm interested in ${form.service || 'your services'}. ${form.message} My phone: ${form.phone}`;
    window.open(`https://wa.me/917702254560?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    outline: 'none',
    padding: '0.9rem 1rem',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '13px',
    color: '#f5f0e8',
    transition: 'border-color 0.3s ease',
  };

  const onFocus = e => { e.currentTarget.style.borderColor = '#c9a84c'; };
  const onBlur  = e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; };

  return (
    <section id="contact" ref={sectionRef} className="py-28" style={{ background: '#111111', paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="text-center mb-16">
          <p className="reveal font-montserrat text-[10px] tracking-[0.4em] text-[#c9a84c] uppercase mb-4">Get In Touch</p>
          <h2 className="reveal font-playfair text-4xl md:text-5xl text-[#f5f0e8] leading-tight">
            Contact <span className="italic gold-text">Us</span>
          </h2>
        </div>

        <div className="grid-2col">
          {/* Info side */}
          <div className="reveal">
            <p className="font-poppins text-sm text-white/55 leading-relaxed mb-10">
              Visit our studio or reach out — we'd love to discuss your dream home project. Free consultation available.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[#c9a84c]/30 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#c9a84c]" />
                </div>
                <div>
                  <p className="font-poppins text-xs text-white/40 uppercase tracking-widest mb-1">Address</p>
                  <p className="font-poppins text-sm text-white/70 leading-relaxed">
                    Villa No 57, OORJITA GRAND VIE II,<br />
                    Near Kompally, Laxmi Nagar Colony,<br />
                    Gundlapochampally, Hyderabad – 500100
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[#c9a84c]/30 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#c9a84c]" />
                </div>
                <div>
                  <p className="font-poppins text-xs text-white/40 uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+917702254560" className="font-poppins text-sm text-white/70 hover:text-[#c9a84c] transition-colors">
                    +91 77022 54560
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[#c9a84c]/30 flex items-center justify-center shrink-0">
                  <Globe size={16} className="text-[#c9a84c]" />
                </div>
                <div>
                  <p className="font-poppins text-xs text-white/40 uppercase tracking-widest mb-1">Website</p>
                  <a href="https://dream-home-interiors4.odoo.com" target="_blank" rel="noopener noreferrer"
                    className="font-poppins text-sm text-white/70 hover:text-[#c9a84c] transition-colors">
                    dream-home-interiors4.odoo.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden border border-white/8" style={{ height: '220px' }}>
              <iframe
                title="Dream Home Interiors Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3!2d78.4867!3d17.5326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e7b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sGundlapochampally%2C%20Hyderabad%2C%20Telangana%20500100!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, filter: 'grayscale(1) contrast(0.85) brightness(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form side */}
          <div className="reveal glass p-8 md:p-10">
            <h3 className="font-playfair text-2xl text-[#f5f0e8] mb-8">Send Us a Message</h3>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <CheckCircle size={48} className="text-[#c9a84c]" />
                <p className="font-playfair text-xl text-[#f5f0e8]">Message Sent!</p>
                <p className="font-poppins text-xs text-white/50">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  style={inputStyle} placeholder="Your Name *"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  onFocus={onFocus} onBlur={onBlur} required
                />
                <input
                  style={inputStyle} placeholder="Phone Number *" type="tel"
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  onFocus={onFocus} onBlur={onBlur} required
                />
                <select
                  style={{ ...inputStyle, background: 'rgba(255,255,255,0.06)' }}
                  value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  onFocus={onFocus} onBlur={onBlur}
                >
                  <option value="" style={{ background: '#1a1a1a' }}>Select Service</option>
                  {['Modular Kitchen','Living Room Design','Bedroom Interiors','Space Planning','Home Renovation','Luxury Decor'].map(s => (
                    <option key={s} value={s} style={{ background: '#1a1a1a' }}>{s}</option>
                  ))}
                </select>
                <textarea
                  style={{ ...inputStyle, resize: 'none' }} placeholder="Tell us about your project..."
                  rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={onFocus} onBlur={onBlur}
                />
                <button
                  type="submit"
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    padding: '1rem', cursor: 'pointer',
                    background: 'linear-gradient(135deg,#c9a84c,#e8c97a)', color: '#000',
                    fontFamily: 'Montserrat, sans-serif', fontWeight: '700',
                    fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
                    border: 'none', boxShadow: '0 4px 24px rgba(201,168,76,0.4)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.55)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(201,168,76,0.4)'; }}
                >
                  <WhatsAppIcon />
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
