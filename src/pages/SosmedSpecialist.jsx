import { useEffect, useState } from 'react';
import './SosmedSpecialist.css';

export default function SosmedSpecialist() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sosmed-page">
      <main className="ss-main">
        {/* Background Decorations */}
        <div className="ss-page-background" aria-hidden="true">
          <img className="ss-background-waves" src="/assets/Vector 1850.png" alt="" />
          <img className="ss-background-wave-lower" src="/assets/Vector 1832.png" alt="" />
          <img className="ss-background-tree" src="/assets/Pohon kelapa.png" alt="" />
          <img className="ss-background-birds" src="/assets/burung.png" alt="" />
        </div>

        <section className="ss-hero container">
          <h1 className="ss-title">SOSIAL MEDIA SPECIALIST</h1>
          
          <div className={`ss-description-card fade-up ${isLoaded ? 'visible' : ''}`}>
            <p>
              <strong>Apa yang akan dipelajari?</strong> Siap menguasai dunia Social Media Specialist? Jalur pembelajaran ini akan
              membekali Anda dengan keterampilan manajemen media sosial yang dibutuhkan saat ini.
              Mulai dari memahami platform dan target audience, copywriting, strategi konten,
              hingga analitik dan KOL marketing. Anda juga akan dibimbing langsung oleh praktisi
              untuk berlatih membuat desain visual dan video konten interaktif sebagai portofolio profesional Anda.
            </p>
          </div>
          
          <div className={`ss-action fade-up ${isLoaded ? 'visible' : ''}`} style={{transitionDelay: '0.1s'}}>
            <a href="http://bem-unsoed.com/OpenBootcampSDS2026" target="_blank" rel="noopener noreferrer" className="ss-btn">
              Daftar Sekarang <span>&#8599;</span>
            </a>
          </div>
        </section>

        <section className={`ss-syllabus container fade-up ${isLoaded ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
          <h2 className="ss-syllabus-title">SILABUS</h2>
          
          <div className="ss-syllabus-list">
            {[
              { id: 1, title: 'Peran Social Media Specialist & Pengenalan Tools' },
              { id: 2, title: 'Platform Media Sosial & Target Audience' },
              { id: 3, title: 'Copywriting & Tone of Voice untuk Sosial Media' },
              { id: 4, title: 'Social Media Strategy & Content Planning' },
              { id: 5, title: 'Mid Test', isTest: true },
              { id: 6, title: 'Social Media Analytics & KOL Marketing' },
              { id: 7, title: 'Desain Konten Gambar' },
              { id: 8, title: 'Video Content Creation dengan CapCut' },
              { id: 9, title: 'Final Project', isFinal: true },
            ].map((camp) => (
              <div className={`ss-camp-item ${camp.isTest ? 'ss-camp-item--test' : ''} ${camp.isFinal ? 'ss-camp-item--final' : ''}`} key={camp.id}>
                <div className="ss-camp-badge">CAMP {camp.id}</div>
                <div className="ss-camp-content">
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
