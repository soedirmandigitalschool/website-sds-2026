import { useEffect, useState } from 'react';
import './GraphicDesigner.css';

export default function GraphicDesigner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="graphic-design-page">
      <main className="gd-main">
        {/* Background Decorations */}
        <div className="gd-page-background" aria-hidden="true">
          <img className="gd-background-waves" src="/assets/Vector 1850.png" alt="" />
          <img className="gd-background-wave-lower" src="/assets/Vector 1832.png" alt="" />
          <img className="gd-background-tree" src="/assets/Pohon kelapa.png" alt="" />
          <img className="gd-background-birds" src="/assets/burung.png" alt="" />
        </div>

        <section className="gd-hero container">
          <h1 className="gd-title">GRAPHIC DESIGN</h1>
          
          <div className={`gd-description-card fade-up ${isLoaded ? 'visible' : ''}`}>
            <p>
              <strong>Apa yang akan dipelajari?</strong> Siap menguasai dunia Graphic Design dengan Figma, mulai dari dasar
              visual hingga membangun design product yang solid? Jalur pembelajaran
              ini akan membekali Anda dengan keterampilan desain grafis yang
              dibutuhkan saat ini. Mulai dari memahami elemen dan prinsip desain,
              teori warna dan psikologi visual, typography, hingga branding dan
              ilustrasi vektor, Anda akan dibimbing langsung oleh praktisi untuk
              menghasilkan portofolio desain yang profesional.
            </p>
          </div>
          
          <div className={`gd-action fade-up ${isLoaded ? 'visible' : ''}`} style={{transitionDelay: '0.1s'}}>
            <a href="http://bem-unsoed.com/OpenBootcampSDS2026" target="_blank" rel="noopener noreferrer" className="gd-btn">
              Daftar Sekarang <span>&#8599;</span>
            </a>
          </div>
        </section>

        <section className={`gd-syllabus container fade-up ${isLoaded ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
          <h2 className="gd-syllabus-title">SILABUS</h2>
          
          <div className="gd-syllabus-list">
            {[
              { id: 1, title: 'Introduction to Graphic Design & Figma' },
              { id: 2, title: 'Layout, Composition & Grid System' },
              { id: 3, title: 'Color Theory & Visual Psychology' },
              { id: 4, title: 'Typography & Editorial Design' },
              { id: 5, title: 'Mid Test', isTest: true },
              { id: 6, title: 'Brand Identity & Logo Design' },
              { id: 7, title: 'Vector Illustration with Figma' },
              { id: 8, title: 'Design System & Brand Guidelines' },
              { id: 9, title: 'Final Project', isFinal: true },
            ].map((camp) => (
              <div className={`gd-camp-item ${camp.isTest ? 'gd-camp-item--test' : ''} ${camp.isFinal ? 'gd-camp-item--final' : ''}`} key={camp.id}>
                <div className="gd-camp-badge">CAMP {camp.id}</div>
                <div className="gd-camp-content">
                  {camp.title}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
