import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => { setHide(true); onDone(); }, 400);
          return 100;
        }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onDone]);

  if (hide) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
      style={{ background: '#0d0d0d', transition: 'opacity 0.5s', opacity: hide ? 0 : 1 }}
    >
      <div className="mb-8 text-center">
        <p className="font-montserrat text-xs tracking-[0.4em] text-[#c9a84c] uppercase mb-3">Welcome to</p>
        <h1 className="font-playfair text-4xl md:text-5xl text-[#f5f0e8]">Dream Home Interiors</h1>
      </div>
      <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 font-poppins text-xs text-white/30 tracking-widest">{progress}%</p>
    </div>
  );
}
