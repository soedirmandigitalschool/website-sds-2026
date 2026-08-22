import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { OceanDecorations } from './Decorations';
import './FAQ.css';

const FAQ_DATA = [
  {
    question: 'Apa itu Soedirman Digital School?',
    answer: 'Soedirman Digital School (SDS) adalah program pelatihan digital yang diselenggarakan oleh BEM UNSOED untuk membantu mahasiswa dan umum dalam mengembangkan keterampilan digital di era industri 4.0.',
  },
  {
    question: 'Siapa saja yang dapat mengikuti Soedirman Digital School?',
    answer: 'Program ini terbuka untuk mahasiswa aktif S1/Vokasi Universitas Jenderal Soedirman serta terbuka untuk umum. Semua orang yang memiliki minat dalam pengembangan keterampilan digital dapat mendaftar.',
  },
  {
    question: 'Berapa biaya untuk mengikuti Soedirman Digital School?',
    answer: 'Informasi mengenai biaya pendaftaran dan program dapat dilihat pada guidebook yang tersedia. Silakan unduh guidebook melalui tombol GUIDEBOOK di halaman utama untuk informasi lebih lengkap.',
  },
  {
    question: 'Bagaimana sistem pembelajaran di Soedirman Digital School?',
    answer: 'Pembelajaran dilakukan melalui Learning Management System (LMS) khusus yang telah dirancang untuk pengalaman belajar yang terstruktur.',
  },
];

function ChevronIcon({ isOpen }) {
  return (
    <svg
      className={`faq__chevron ${isOpen ? 'faq__chevron--open' : ''}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq" ref={ref}>
      <OceanDecorations bubbleCount={3} fishCount={1} waveTop={10} />
      <div className={`container fade-up ${isInView ? 'visible' : ''}`}>
        <h2 className="section-title">NEED HELP?</h2>

        <div className="faq__list">
          {FAQ_DATA.map((item, i) => (
            <div
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
              key={i}
            >
              <button
                type="button"
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                id={`faq-btn-${i}`}
                aria-controls={`faq-panel-${i}`}
              >
                <span>{item.question}</span>
                <ChevronIcon isOpen={openIndex === i} />
              </button>
              <div
                className="faq__answer"
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
              >
                <div className="faq__answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
