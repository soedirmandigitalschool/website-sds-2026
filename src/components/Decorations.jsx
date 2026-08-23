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

export function Castle({ top, right, opacity, scale = 1 }) {
  return (
    <div className="ocean-element" style={{ top: `${top}%`, right: `${right}%`, opacity, transform: `scale(${scale})` }}>
      <img src="/assets/istana.png" alt="" />
    </div>
  );
}

export function ShipSilhouette({ top, left, opacity, scale = 1, animationDuration = '20s' }) {
  return (
    <div className="ocean-ship" style={{ top: `${top}%`, left: `${left}%`, opacity, transform: `scale(${scale})`, animationDuration }}>
      <img src="/assets/kapal.png" alt="" style={{ filter: 'brightness(0) invert(1) opacity(0.2)' }} />
    </div>
  );
}

export function Coral({ bottom, left, opacity, scale = 1 }) {
  return (
    <div className="ocean-element ocean-coral" style={{ bottom: `${bottom}%`, left: `${left}%`, opacity, transform: `scale(${scale})` }}>
      <svg viewBox="0 0 100 100" fill="currentColor" opacity="0.3">
        <path d="M50 100 Q45 80 30 70 Q45 60 40 40 Q55 50 50 30 Q65 45 60 70 Q75 80 50 100" />
      </svg>
    </div>
  );
}

export function PalmTree({ bottom, left, right, opacity, scale = 1 }) {
  const style = { bottom: `${bottom}%`, opacity, transform: `scale(${scale})` };
  if (left !== undefined) style.left = `${left}%`;
  if (right !== undefined) style.right = `${right}%`;
  return (
    <div className="ocean-element" style={style}>
      <img src="/assets/pohon.png" alt="" />
    </div>
  );
}

export function Sunset({ bottom, left, opacity, scale = 1 }) {
  return (
    <div className="ocean-element" style={{ bottom: `${bottom}%`, left: `${left}%`, opacity, transform: `scale(${scale})`, zIndex: 0 }}>
      <svg viewBox="0 0 100 100" fill="#FF8C00" opacity="0.4">
        <circle cx="50" cy="50" r="40" />
      </svg>
    </div>
  );
}

export function OceanDecorations({ bubbleCount = 5, fishCount = 4, waveTop = 20, showCastle = false, showShip = false, showCoral = false, showPalmTree = false, showSunset = false }) {
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
      <WaveLine top={waveTop + 80} opacity={0.1} />
      
      {showCastle && <Castle top={40} right={5} opacity={0.15} scale={0.8} />}
      {showShip && <ShipSilhouette top={10} left={-20} opacity={0.8} scale={0.5} />}
      {showCoral && (
        <>
          <Coral bottom={5} left={10} opacity={0.6} scale={1.2} />
          <Coral bottom={2} left={85} opacity={0.5} scale={0.9} />
        </>
      )}
      {showPalmTree && (
        <>
          {/* Left grove */}
          <PalmTree bottom={-15} left={-10} opacity={0.12} scale={1.8} />
          <PalmTree bottom={-5} left={-2} opacity={0.15} scale={1.2} />
          <PalmTree bottom={5} left={8} opacity={0.1} scale={0.8} />
          <PalmTree bottom={15} left={-5} opacity={0.08} scale={1.5} />
          
          {/* Right grove */}
          <PalmTree bottom={-20} right={-15} opacity={0.1} scale={2} />
          <PalmTree bottom={-5} right={-2} opacity={0.15} scale={1.1} />
          <PalmTree bottom={10} right={5} opacity={0.12} scale={1.3} />
          <PalmTree bottom={25} right={-8} opacity={0.08} scale={1.6} />
        </>
      )}
      {showSunset && <Sunset bottom={10} left={40} opacity={0.3} scale={3} />}

      {bubbles.map((b, i) => (
        <Bubble key={`bubble-${i}`} {...b} />
      ))}
      
      {fishes.map((f, i) => (
        <Fish key={`fish-${i}`} {...f} />
      ))}
    </div>
  );
}
