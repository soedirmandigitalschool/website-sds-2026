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
          <a href="http://bem-unsoed.com/OpenBootcampSDS2026" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--primary">Daftar</a>
          <a href="https://drive.google.com/file/d/1nmdesgmCBE3EJIAOdsU82bOr7MlcJ6xQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--secondary">GUIDEBOOK</a>
        </div>
      </div>

      {/* Bottom scene: layered vector waves + mascot */}
      <div className="hero__bottom-scene">

        {/* Vector Waves Background matching Coming Soon */}
        <div className="hero__waves-container">
          <div className="hero__wave hero__wave-back" aria-hidden="true"></div>
          <div className="hero__wave hero__wave-front" aria-hidden="true"></div>
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
