import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.innerWidth < 768;

    if (isTouchDevice) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    const mouse = { x: -100, y: -100 };
    const trail = { x: -100, y: -100 };
    let hasMoved = false;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        trail.x = mouse.x;
        trail.y = mouse.y;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      // Direct GPU transform update for 0-latency inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }

      // Check interactive hover state efficiently
      const target = e.target as HTMLElement | null;
      if (target) {
        const exploreTarget = target.closest('[data-cursor="explore"]');
        const interactive = target.closest('a, button, input, select, textarea, [data-cursor="interactive"], [role="button"]');

        if (exploreTarget) {
          setIsHovered(true);
          setCursorText((prev) => (prev === 'EXPLORE' ? prev : 'EXPLORE'));
        } else if (interactive) {
          setIsHovered(true);
          setCursorText((prev) => (prev === null ? prev : null));
        } else {
          setIsHovered(false);
          setCursorText((prev) => (prev === null ? prev : null));
        }
      }
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      if (hasMoved) {
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    // Smooth RAF loop for trailing ring without triggering React re-renders
    const render = () => {
      if (hasMoved && ringRef.current) {
        const factor = 0.22;
        trail.x += (mouse.x - trail.x) * factor;
        trail.y += (mouse.y - trail.y) * factor;
        ringRef.current.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isSupported) return null;

  return (
    <>
      {/* Instant zero-lag inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full will-change-transform opacity-0 transition-opacity duration-200 hidden md:block"
        style={{
          width: cursorText ? '0px' : isHovered ? '8px' : '6px',
          height: cursorText ? '0px' : isHovered ? '8px' : '6px',
          backgroundColor: '#287DFA',
          boxShadow: '0 0 10px rgba(40, 125, 250, 0.8)',
        }}
      />

      {/* Fluid GPU-accelerated trailing ring / interactive pill */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full will-change-transform opacity-0 flex items-center justify-center font-sans tracking-widest text-[10px] font-bold text-white uppercase hidden md:flex transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out ${
          cursorText
            ? 'w-[84px] h-[84px] bg-[#287DFA] shadow-[0_8px_24px_rgba(40,125,250,0.45)] backdrop-blur-xs border-0'
            : isHovered
            ? 'w-[54px] h-[54px] bg-[#287DFA]/15 border border-[#287DFA]/60 shadow-[0_0_20px_rgba(40,125,250,0.3)]'
            : 'w-[32px] h-[32px] bg-transparent border border-[#287DFA]/40 shadow-none'
        }`}
      >
        {cursorText}
      </div>
    </>
  );
}
