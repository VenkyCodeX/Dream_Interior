import { useEffect, useRef, useState } from 'react';
import './index.css';

import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        {/* Scroll progress bar */}
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

        {/* Custom cursor (desktop only) */}
        <div className="hidden md:block">
          <Cursor />
        </div>

        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/917702254560?text=Hi%2C%20I%27m%20interested%20in%20your%20interior%20design%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float w-14 h-14 flex items-center justify-center shadow-2xl"
          style={{ background: '#25D366', borderRadius: '50%', boxShadow: '0 8px 32px rgba(37,211,102,0.4)' }}
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.813A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-5.03-1.36l-.36-.22-4.6 1.077 1.1-4.47-.24-.37A9.944 9.944 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.5 5c-.28 0-.74.105-1.13.525C10.98 10.945 10 12.07 10 13.75c0 1.68 1.22 3.305 1.39 3.535.17.23 2.39 3.79 5.87 5.165 2.9 1.145 3.49.917 4.12.86.63-.058 2.03-.83 2.32-1.63.29-.8.29-1.485.2-1.63-.09-.145-.33-.23-.69-.4-.36-.17-2.13-1.05-2.46-1.17-.33-.12-.57-.17-.81.17-.24.34-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.955-1.79-2.135-2-2.495-.21-.36-.02-.555.16-.735.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.955-1.11-2.675-.29-.7-.59-.6-.81-.61-.21-.01-.45-.01-.69-.01z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
