import { useInView } from '../hooks/useInView';
import { OceanDecorations } from './Decorations';
import './About.css';

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className="about" id="about" ref={ref}>
      <OceanDecorations bubbleCount={4} fishCount={1} waveTop={10} />
      
      {/* Decorative background elements */}
      <img src="/assets/istana.png" alt="" className="about__bg-istana" aria-hidden="true" />
      <img src="/assets/pohon.png" alt="" className="about__bg-pohon" aria-hidden="true" />

      <div className={`about__inner container fade-up ${isInView ? 'visible' : ''}`}>
        <h2 className="section-title">APA ITU SOEDIRMAN DIGITAL SCHOOL?</h2>
        <p className="about__text">
          Soedirman Digital School (SDS) merupakan program pelatihan digital Unsoed yang
          diselenggarakan oleh Kementerian RIZZMED BEM UNSOED untuk membantu dalam
          mengembangkan dan melatih skill digital guna menghadapi era revolusi industri 4.0
          sehingga diharapkan memiliki keahlian digital yang mumpuni dan bisa
          diimplementasikan di kehidupan sehari-hari ataupun di dunia kerja.
        </p>
      </div>
    </section>
  );
}
