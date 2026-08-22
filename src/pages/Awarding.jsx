import './Awarding.css';

export default function Awarding() {
  return (
    <div className="awarding-page">
      {/* Hero Section */}
      <section className="awarding-hero">
        <div className="awarding-hero__content container">
          <h1 className="awarding-hero__title">TALKSHOW & AWARDING</h1>
          <h2 className="awarding-hero__subtitle">SOEDIRMAN DIGITAL SCHOOL 2026</h2>
          
          <div className="awarding-hero__mascot-area">
            <img src="/assets/MASKOT FIN.png" alt="Mascot Fin" className="awarding-hero__mascot" />
            <div className="awarding-hero__speech-bubble">
              <p>
                <strong>Halo, Explorer!</strong><br/><br/>
                Mari berlabuh sejenak ke pelabuhan SDS 2026! 
                Soedirman Digital School mengundang kamu semua 
                untuk hadir dalam Talkshow & Awarding SDS 2026! 
                Jangan sampai ketinggalan acara puncak kita ya. 
                Sampai jumpa di daratan eksplorasi!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="awarding-info container">
        <p className="awarding-info__intro">
          Talkshow dan Awarding ini merupakan acara talkshow & awarding SDS 2026 yang 
          akan dilaksanakan di akhir acara pelatihan kami.
        </p>

        <div className="awarding-info__details">
          <h3 className="awarding-info__details-title">Detail Acara</h3>
          <ul className="awarding-info__details-list">
            <li><span>Tanggal</span> : Segera Hadir</li>
            <li><span>Waktu</span> : Segera Hadir</li>
            <li><span>Tempat</span> : Segera Hadir</li>
          </ul>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="awarding-timeline-section container">
        <h3 className="awarding-timeline-section__title">ACARA YANG MENANTI</h3>
        
        <div className="awarding-timeline">
          <div className="awarding-timeline__line"></div>
          
          <div className="awarding-timeline__item">
            <div className="awarding-timeline__dot"></div>
            <div className="awarding-timeline__content">
              <h4>Special Performance</h4>
              <p>
                Dimeriahkan oleh bakat-bakat 
                kece Unsoed, mulai dari menari, 
                menyanyi, dan berbagai 
                hiburan lainnya!
              </p>
            </div>
          </div>
          
          <div className="awarding-timeline__item awarding-timeline__item--right">
            <div className="awarding-timeline__dot"></div>
            <div className="awarding-timeline__content">
              <h4>Talkshow Inspiratif</h4>
              <p>
                Bersama narasumber keren yang 
                siap membagikan insight baru dari 
                sudut pandang dan pengalaman mereka!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="awarding-registration container">
        <h3 className="awarding-registration__title">Registrasi Sekarang!</h3>
        <p className="awarding-registration__subtitle">
          Pastikan kamu hadir dan ikut merayakan kemeriahan ajang 
          awarding dari ranah Soedirman Digital School 2026!
        </p>
        
        <div className="awarding-registration__cards">
          <div className="awarding-card">
            <h4>Untuk Peserta SDS 2026</h4>
            <p>Khusus untuk peserta yang telah mengikuti program SDS 2026.</p>
            <a href="#" className="awarding-btn">Daftar Sekarang <span>↗</span></a>
          </div>
          
          <div className="awarding-card">
            <h4>Untuk Umum</h4>
            <p>Terbuka untuk siapa saja pengunjung yang luar biasa.</p>
            <a href="#" className="awarding-btn">Daftar Sekarang <span>↗</span></a>
          </div>
        </div>
        
        <p className="awarding-registration__note">
          Tunggu informasi selanjutnya dan pantau terus ya explorer!
        </p>
      </section>
    </div>
  );
}
