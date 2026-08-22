import { useInView } from '../hooks/useInView';
import { OceanDecorations } from './Decorations';
import './BenefitProgram.css';

const BENEFITS = [
  {
    title: 'E-Certificate',
    desc: 'Dapat sertifikat sebagai bentuk apresiasi atas partisipasi dan penyelesaian rangkaian bootcamp Soedirman Digital School.',
    image: '/assets/1.jpg',
  },
  {
    title: '2 Bulan Pelatihan',
    desc: 'Pelatihan dilakukan secara intensif bersama mentor yang berpengalaman.',
    image: '/assets/2.jpg',
  },
  {
    title: 'Membangun Portofolio',
    desc: 'Proyek pada pelatihan ini bisa dijadikan portfolio yang menarik.',
    image: '/assets/3.jpg',
  },
  {
    title: 'LMS khusus',
    desc: 'Pembelajaran dapat dilacak dan dipantau melalui platform Moodle.',
    image: '/assets/4.jpg',
  },
  {
    title: 'Talkshow',
    desc: 'Memberikan wawasan dan ruang diskusi mengenai tren, kreativitas, serta perkembangan konten diberbagai platform digital.',
    image: '/assets/1.jpg',
  },
  {
    title: 'Memperluas Networking',
    desc: 'Bertemu dengan berbagai macam orang hebat dan dari berbagai latar belakang untuk saling berkolaborasi.',
    image: '/assets/2.jpg',
  },
];

export default function BenefitProgram() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="benefit" id="benefit" ref={ref}>
      <OceanDecorations bubbleCount={6} fishCount={2} waveTop={30} />
      <div className={`container fade-up ${isInView ? 'visible' : ''}`}>
        <h2 className="section-title">BENEFIT PROGRAM</h2>
        <div className="benefit__grid fade-up-stagger visible">
          {BENEFITS.map((benefit, i) => (
            <div className="benefit__card" key={i}>
              <div className="benefit__card-image">
                <img src={benefit.image} alt={benefit.title} loading="lazy" />
                <div className="benefit__card-overlay">
                  <h3 className="benefit__card-title">{benefit.title}</h3>
                  <p className="benefit__card-desc">{benefit.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
