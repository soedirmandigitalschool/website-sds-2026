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

      {/* Main content */}
      <div className={`hero__content fade-up ${isLoaded ? 'visible' : ''}`}>
        <h1 className="hero__title">SOEDIRMAN DIGITAL SCHOOL 2026</h1>
        <p className="hero__subtitle">Start Your Digital Journey with SDS</p>
        <p className="hero__desc">
          Develop practical digital skills, explore new possibilities, and prepare
          yourself for the future with Soedirman Digital School.
        </p>
        <div className="hero__actions">
          <a href="#" className="hero__btn hero__btn--primary">Daftar</a>
          <a href="#" className="hero__btn hero__btn--secondary">GUIDEBOOK</a>
        </div>
      </div>

      {/* Bottom scene: layered clouds + mascot */}
      <div className="hero__bottom-scene">
        {/* Layer 1 — main clouds (clean and spaced out) */}
        <img src="/assets/awan.png" alt="" className="hero__cloud hero__cloud--main-left" aria-hidden="true" />
        <img src="/assets/awan.png" alt="" className="hero__cloud hero__cloud--main-right" aria-hidden="true" />

        {/* Glow behind mascot */}
        <div className="hero__glow" aria-hidden="true"></div>

        {/* Mascot centered between clouds */}
        <div className={`hero__character fade-up ${isLoaded ? 'visible' : ''}`} style={{transitionDelay: '0.3s'}}>
          <img src="/assets/MASKOT FIN.png" alt="SDS Pirate Mascot" />
        </div>
      </div>
    </section>
  );
}
