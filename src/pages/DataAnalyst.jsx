import { useEffect, useState } from 'react';
import './DataAnalyst.css';

export default function DataAnalyst() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="data-analyst-page">
      <main className="da-main">
        {/* Background Decorations */}
        <div className="da-bg-decoration">
          <div className="da-moon" />
          <div className="da-wave-background" />
          <div className="da-wave-overlay" />
        </div>

        <section className="da-hero container">
          <h1 className="da-title">DATA ANALYST</h1>
          
          <div className={`da-description-card fade-up ${isLoaded ? 'visible' : ''}`}>
            <p>
              <strong>Apa yang akan dipelajari?</strong> Siap menguasai dunia Data Analyst dengan Excel, Tableau, dan Python?
              Jalur pembelajaran ini akan membekali Anda dengan keterampilan
              analisis data yang dibutuhkan industri saat ini. Mulai dari memahami
              dasar statistik, melakukan data cleaning, menjalankan Exploratory Data
              Analysis (EDA), hingga membuat visualisasi data dan report profesional
              dengan Tableau, Anda juga akan dikenalkan pada dasar Machine Learning
              dan Artificial Intelligence menggunakan Python. Anda akan dibimbing
              langsung oleh praktisi untuk menghasilkan final project yang siap
              masuk portofolio.
            </p>
          </div>
          
          <div className={`da-action fade-up ${isLoaded ? 'visible' : ''}`} style={{transitionDelay: '0.1s'}}>
            <a href="http://bem-unsoed.com/OpenBootcampSDS2026" target="_blank" rel="noopener noreferrer" className="da-btn">
              Daftar Sekarang <img src="/assets/panah/Vector 1.png" alt="" />
            </a>
          </div>
        </section>

        <section className={`da-syllabus container fade-up ${isLoaded ? 'visible' : ''}`} style={{transitionDelay: '0.2s'}}>
          <h2 className="da-syllabus-title">SILABUS</h2>
          
          <div className="da-syllabus-list">
            {[
              { id: 1, title: 'Pengantar Data Analyst (Excel)' },
              { id: 2, title: 'Dasar Statistik (Excel)' },
              { id: 3, title: 'Tantangan Pengolahan dan Pembersihan Data (Excel)' },
              { id: 4, title: 'Exploratory Data Analysis (Excel)' },
              { id: 5, title: 'Mid Test', isTest: true },
              { id: 6, title: 'Belajar Visualisasi Data dan Membuat Report (Tableau)' },
              { id: 7, title: 'Belajar Dasar Machine Learning (Python)' },
              { id: 8, title: 'Belajar Supervised dan Unsupervised Learning (Python)' },
              { id: 9, title: 'Final Project', isFinal: true },
            ].map((camp) => (
              <div className={`da-camp-item ${camp.isTest ? 'da-camp-item--test' : ''} ${camp.isFinal ? 'da-camp-item--final' : ''}`} key={camp.id}>
                <div className="da-camp-badge">CAMP {camp.id}</div>
                <div className="da-camp-content">
                  {camp.title}
                  {(camp.id === 5) && <img src="/assets/burung.png" className="da-camp-icon" alt="" aria-hidden="true" />}
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
}
