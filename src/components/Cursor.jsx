import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const ringTarget = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      ringTarget.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', move);

    const animate = () => {
      setRingPos(prev => ({
        x: prev.x + (ringTarget.current.x - prev.x) * 0.12,
        y: prev.y + (ringTarget.current.y - prev.y) * 0.12,
      }));
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    const grow = () => ring.current && (ring.current.style.transform = 'translate(-50%,-50%) scale(1.8)');
    const shrink = () => ring.current && (ring.current.style.transform = 'translate(-50%,-50%) scale(1)');
    document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <div ref={ring} className="cursor-ring" style={{ left: ringPos.x, top: ringPos.y }} />
    </>
  );
}
