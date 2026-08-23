import './Awarding.css';

export default function Awarding() {
  return (
    <div className="awarding-page">
      {/* Decorative birds */}
      <img src="/assets/burung.png" alt="" className="awarding-bird awarding-bird--1" aria-hidden="true" />
      <img src="/assets/burung.png" alt="" className="awarding-bird awarding-bird--2" aria-hidden="true" />
      <img src="/assets/burung.png" alt="" className="awarding-bird awarding-bird--3" aria-hidden="true" />

      {/* Hero Section */}
      <section className="awarding-hero">
        <div className="awarding-hero__content container">
          <h1 className="awarding-hero__title">TALKSHOW & AWARDING</h1>
          <h2 className="awarding-hero__subtitle">SOEDIRMAN DIGITAL SCHOOL 2026</h2>

          <div className="awarding-hero__mascot-area">
            <img src="/assets/maskot piko.png" alt="Mascot Piko" className="awarding-hero__mascot" />
            <div className="awarding-hero__speech-bubble">
              <strong>Halo, Digipeeps!</strong>
              <p>
                Tidak terasa sekali ya, perjalanan kita di
                Soedirman Digital School sudah sampai di
                penghujung acara! Tapi tenang, karena kita
                bakal menutup perjalanan ini dengan acara
                yang super spesial dan penuh inspirasi!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="awarding-info container">
        <p className="awarding-info__intro">
          Yuk, jangan sampai ketinggalan acara Talkshow & Awarding SDS 2026 yang
          akan membawa inspirasi dan pengalaman tak terlupakan!
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
                kece Unsoed yang pastinya bikin
                suasana makin hangat dan
                berkesan!
              </p>
            </div>
          </div>

          <div className="awarding-timeline__item awarding-timeline__item--right">
            <div className="awarding-timeline__dot"></div>
            <div className="awarding-timeline__content">
              <h4>Talkshow Inspiratif</h4>
              <p>
                Bareng narasumber keren dan
                penuh insight yang siap berbagi
                pengalaman seru dan motivatif buat
                kita semua!
              </p>
            </div>
          </div>
        </div>

        {/* Decorative mascot beside timeline */}
        <div className="awarding-timeline__mascot" aria-hidden="true">
          <img src="/assets/MASKOT LYRA.png" alt="" />
        </div>
      </section>

      {/* Registration Section */}
      <section className="awarding-registration container">
        <h3 className="awarding-registration__title">Registrasi Sekarang!</h3>
        <p className="awarding-registration__subtitle">
          Pastikan kamu hadir dan ikut merayakan momen berharga ini
          bareng seluruh keluarga besar Soedirman Digital School 2026!
        </p>

        <div className="awarding-registration__cards">
          <div className="awarding-card-wrapper">
            <div className="awarding-card">
              <h4>Untuk Peserta SDS 2026</h4>
              <p>Khusus untuk peserta yang telah mengikuti program SDS 2026.</p>
            </div>
            <a href="http://bem-unsoed.com/OpenBootcampSDS2026" target="_blank" rel="noopener noreferrer" className="awarding-btn">
              Daftar Sekarang 
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="awarding-btn-icon">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <div className="awarding-card-wrapper">
            <div className="awarding-card">
              <h4>Untuk Umum</h4>
              <p>Terbuka untuk siapa saja yang ingin mengikuti acara inspiratif.</p>
            </div>
            <a href="http://bem-unsoed.com/OpenBootcampSDS2026" target="_blank" rel="noopener noreferrer" className="awarding-btn">
              Daftar Sekarang 
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="awarding-btn-icon">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <p className="awarding-registration__note">
          Yuk, siapkan outfit terbaikmu dan jangan sampai ketinggalan yaa!
        </p>
      </section>
    </div>
  );
}
