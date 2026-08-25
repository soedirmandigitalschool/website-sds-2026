import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsLoaded(true);
      return;
    }
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background light rays */}
      <div className="hero__rays" aria-hidden="true"></div>

      {/* Decorative birds — left group */}
      <img src="/assets/burung.png" alt="" className="hero__bird hero__bird--1" aria-hidden="true" />
      <img src="/assets/burung.png" alt="" className="hero__bird hero__bird--2" aria-hidden="true" />
      <img src="/assets/burung.png" alt="" className="hero__bird hero__bird--3" aria-hidden="true" />
      <img src="/assets/burung.png" alt="" className="hero__bird hero__bird--4" aria-hidden="true" />

      {/* Decorative birds — right group */}
      <img src="/assets/burung.png" alt="" className="hero__bird hero__bird--5" aria-hidden="true" />
      <img src="/assets/burung.png" alt="" className="hero__bird hero__bird--6" aria-hidden="true" />
      <img src="/assets/burung.png" alt="" className="hero__bird hero__bird--7" aria-hidden="true" />
      <img src="/assets/burung.png" alt="" className="hero__bird hero__bird--8" aria-hidden="true" />

      {/* Shooting Stars / Comets */}
      <div className="hero__shooting-stars" aria-hidden="true">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* Main content */}
      <div className={`hero__content fade-up ${isLoaded ? 'visible' : ''}`}>
        <h1 className="hero__title">SOEDIRMAN DIGITAL SCHOOL 2026</h1>
        <p className="hero__subtitle">Start Your Digital Journey with SDS</p>
        <p className="hero__desc">
          Develop practical digital skills, explore new possibilities, and prepare
          yourself for the future with Soedirman Digital School.
        </p>
        <div className="hero__actions">
          <a href="http://bem-unsoed.com/OpenBootcampSDS2026" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--primary">Daftar</a>
          <a href="https://drive.google.com/file/d/1nmdesgmCBE3EJIAOdsU82bOr7MlcJ6xQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--secondary">GUIDEBOOK</a>
        </div>
      </div>

      {/* Bottom scene: layered vector waves + mascot */}
      <div className="hero__bottom-scene">

        {/* Fish School 1 */}
        <div className="hero__fish-school hero__fish-school--1" aria-hidden="true">
          <svg viewBox="0 0 200 100" fill="currentColor">
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(120, 10) scale(0.6)" />
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(60, 30) scale(0.8)" />
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(10, 50) scale(0.5)" />
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(80, 60) scale(0.7)" />
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(150, 40) scale(0.5)" />
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(40, 70) scale(0.6)" />
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(110, 75) scale(0.4)" />
          </svg>
        </div>

        {/* Fish School 2 (Deeper, slower) */}
        <div className="hero__fish-school hero__fish-school--2" aria-hidden="true">
          <svg viewBox="0 0 200 100" fill="currentColor">
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(60, 30) scale(0.5)" />
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(10, 50) scale(0.3)" />
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(80, 60) scale(0.4)" />
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(150, 40) scale(0.35)" />
          </svg>
        </div>

        {/* Fish School 3 (Swimming right to left) */}
        <div className="hero__fish-school hero__fish-school--3" aria-hidden="true">
          <svg viewBox="0 0 200 100" fill="currentColor">
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(120, 10) scale(0.5)" />
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(60, 30) scale(0.6)" />
            <path d="M95,25 Q80,10 60,15 Q40,20 20,25 Q5,30 0,25 Q5,20 20,25 Q40,30 60,35 Q80,40 95,25 Z M5,25 L15,15 L15,35 Z" transform="translate(10, 50) scale(0.4)" />
          </svg>
        </div>



        {/* Seamless Vector Waves Background (Masked PNGs) */}
        <div className="hero__waves-container" aria-hidden="true">
          <div className="hero__wave hero__wave-back"></div>
          <div className="hero__wave hero__wave-front"></div>
        </div>

        {/* Glow behind mascot */}
        <div className="hero__glow" aria-hidden="true"></div>

        {/* Mascot centered in the valley */}
        <div className={`hero__character fade-up ${isLoaded ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <img src="/assets/MASKOT FIN.png" alt="SDS Pirate Mascot" />
        </div>
      </div>
    </section>
  );
}
