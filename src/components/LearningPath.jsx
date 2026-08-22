import { useInView } from '../hooks/useInView';
import { OceanDecorations } from './Decorations';
import './LearningPath.css';

const PATHS = [
  {
    title: 'GRAPHIC DESIGNER',
    image: '/assets/design graphic.jpg',
    points: [
      'Mahasiswa aktif S1/Vokasi Universitas Jenderal Soedirman dan terbuka untuk Umum.',
      'Mengisi form pendaftaran, upload twibbon, dan mengerjakan pretest bagi jalur internal.',
      'Memiliki minat dalam desain visual dan vektor.',
      'Bersedia belajar prinsip-prinsip dasar desain seperti layout, tipografi, dan teori warna.',
      'Siap mempelajari alat desain seperti Figma.',
    ],
  },
  {
    title: 'DATA ANALYST',
    image: '/assets/data anaylst.jpg',
    points: [
      'Mahasiswa aktif S1/Vokasi Universitas Jenderal Soedirman dan terbuka untuk Umum.',
      'Mengisi form pendaftaran, upload twibbon, dan mengerjakan pretest bagi jalur internal.',
      'Tertarik untuk belajar cara mengolah, menganalisis, dan memvisualisasikan data.',
      'Bersedia belajar Excel untuk analisis data, statistik dasar, dan data cleaning.',
      'Bersedia belajar Tableau untuk visualisasi data dan pembuatan report.',
      'Bersedia belajar Python untuk dasar Machine Learning (Supervised & Unsupervised Learning).',
    ],
  },
  {
    title: 'SOSMED SPECIALIST',
    image: '/assets/social media specialist.jpg',
    points: [
      'Mahasiswa aktif S1/Vokasi Universitas Jenderal Soedirman dan terbuka untuk Umum.',
      'Mengisi form pendaftaran, upload twibbon, dan mengerjakan pretest bagi jalur internal.',
      'Tertarik mempelajari peran Social Media Specialist beserta tools pendukungnya secara mendalam dan praktis.',
      'Bersedia belajar strategi konten, copywriting, dan analisis media sosial.',
      'Siap berlatih membuat desain visual serta video konten interaktif.',
    ],
  },
];

export default function LearningPath() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="learning-path" id="learning-path" ref={ref}>
      <OceanDecorations bubbleCount={5} fishCount={1} waveTop={15} />
      <div className={`container fade-up ${isInView ? 'visible' : ''}`}>
        <h2 className="section-title">LEARNING PATH</h2>
        <p className="section-subtitle">
          Pilih jaur pembelajaran yang sesuai dengan minat dan keahlian anda.
        </p>

        <div className="learning-path__grid">
          {PATHS.map((path, i) => (
            <div className="learning-path__wrapper" key={i}>
              <h3 className="learning-path__card-title">{path.title}</h3>
              <div className="learning-path__card">
                <div className="learning-path__card-image">
                  <img src={path.image} alt={path.title} loading="lazy" />
                </div>
                <div className="learning-path__card-body">
                  <ul className="learning-path__card-list">
                    {path.points.map((point, j) => (
                      <li key={j}>
                        <span className="bullet">✦</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="learning-path__card-footer">
                <a href="#" className="learning-path__btn">
                  Selengkapnya
                  <span className="learning-path__arrow">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
