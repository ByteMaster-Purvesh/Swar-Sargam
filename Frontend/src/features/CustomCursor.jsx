import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Framer Motion Precision White Core Dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.9)',
          pointerEvents: 'none',
          zIndex: 99999
        }}
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isClicked ? 0.6 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 50,
          mass: 0.1
        }}
      />

      {/* Framer Motion Smooth Trailing White Glass Ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '1.5px solid rgba(255, 255, 255, 0.65)',
          boxShadow: '0 0 14px rgba(255, 255, 255, 0.25)',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(1px)',
          pointerEvents: 'none',
          zIndex: 99998
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isClicked ? 0.8 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          mass: 0.2
        }}
      />
    </>
  );
}
