import React from 'react';
import './Decorations.css';

export function Bubble({ size, left, delay, duration }) {
  const style = {
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
  return <div className="ocean-bubble" style={style}></div>;
}

export function Fish({ type, top, delay, duration, opacity, scale = 1 }) {
  const isRight = type === 'right';
  const style = {
    top: `${top}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    opacity: opacity,
    transform: `scale(${scale}) ${isRight ? 'scaleX(-1)' : ''}`,
  };
  
  return (
    <div className={`ocean-fish ocean-fish--${type}`} style={style}>
      {/* Simple fish silhouette SVG */}
      <svg viewBox="0 0 100 50" fill="currentColor">
        <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" />
      </svg>
    </div>
  );
}

export function WaveLine({ top, opacity }) {
  return (
    <div className="ocean-wave-line" style={{ top: `${top}%`, opacity }}>
      <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
        <path d="M0,25 C320,50 420,0 740,25 C1060,50 1120,0 1440,25" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10, 10" />
      </svg>
    </div>
  );
}

export function OceanDecorations({ bubbleCount = 5, fishCount = 2, waveTop = 20 }) {
  // Generate stable random-looking arrays based on counts
  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
    size: 10 + (i * 7) % 15,
    left: 10 + (i * 27) % 80,
    delay: (i * 3) % 10,
    duration: 10 + (i * 5) % 15
  }));

  const fishes = Array.from({ length: fishCount }).map((_, i) => ({
    type: i % 2 === 0 ? 'right' : 'left',
    top: 20 + (i * 37) % 60,
    delay: (i * 4) % 12,
    duration: 25 + (i * 10) % 20,
    opacity: 0.1 + ((i * 3) % 15) / 100,
    scale: 0.5 + ((i * 5) % 8) / 10
  }));

  return (
    <div className="ocean-decorations">
      <WaveLine top={waveTop} opacity={0.2} />
      <WaveLine top={waveTop + 40} opacity={0.15} />
      
      {bubbles.map((b, i) => (
        <Bubble key={`bubble-${i}`} {...b} />
      ))}
      
      {fishes.map((f, i) => (
        <Fish key={`fish-${i}`} {...f} />
      ))}
    </div>
  );
}
