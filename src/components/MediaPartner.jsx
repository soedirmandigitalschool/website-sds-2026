import { useInView } from '../hooks/useInView';
import './MediaPartner.css';

export default function MediaPartner() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className="media-partner" id="media-partner" ref={ref}>
      <div className={`container fade-up ${isInView ? 'visible' : ''}`}>
        <h2 className="section-title">MEDIA PARTNER</h2>
        
        {/* Single pill-shaped container for all logos */}
        <div className="media-partner__container">
          <div className="media-partner__logo"><img src="/assets/MP1.png" alt="Media Partner" /></div>
          <div className="media-partner__logo"><img src="/assets/MP2.png" alt="Media Partner" /></div>
          <div className="media-partner__logo"><img src="/assets/MP3.png" alt="Media Partner" /></div>
          <div className="media-partner__logo"><img src="/assets/MP5.png" alt="Media Partner" /></div>
          <div className="media-partner__logo"><img src="/assets/MP6.png" alt="Media Partner" /></div>
          <div className="media-partner__logo"><img src="/assets/MP7.png" alt="Media Partner" /></div>
          <div className="media-partner__logo"><img src="/assets/MP8.png" alt="Media Partner" /></div>
          <div className="media-partner__logo"><img src="/assets/MP9.png" alt="Media Partner" /></div>
          <div className="media-partner__logo"><img src="/assets/MP10.png" alt="Media Partner" /></div>
        </div>
      </div>
    </section>
  );
}
