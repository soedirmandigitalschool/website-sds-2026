import { useInView } from '../hooks/useInView';
import { OceanDecorations } from './Decorations';
import './Timeline.css';

const TIMELINE_DATA = [
  { date: '12 - 21 Agustus 2026', title: 'Open Regristration Webinar', side: 'left' },
  { date: '22 Agustus 2026', title: 'Webinar', side: 'right' },
  { date: '24-28 Agustus 2026', title: 'Open Registration Umum', side: 'left' },
  { date: '29 - 30 Agustus 2026', title: 'Pre-Test', side: 'right' },
  { date: '4 September 2026', title: 'Announcement', side: 'left' },
  { date: '5 September 2026', title: 'On Boarding', side: 'right' },
  { date: '12-13, 19-20, 26-27 September dan 3-4 Oktober 2026', title: 'Bootcamp', side: 'left' },
  { date: '26 September 2026', title: 'Mid-test', side: 'right' },
  { date: '5-19 Oktober 2026', title: 'Final Project', side: 'left' },
  { date: '19 Oktober 2026', title: 'Deadline', side: 'right' },
  { date: '24 Oktober 2026', title: 'Graduation', side: 'left' },
];

export default function Timeline() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section className="timeline" id="timeline" ref={ref}>
      <OceanDecorations bubbleCount={7} fishCount={2} waveTop={25} showShip={true} showCastle={true} />
      
      <div className="timeline__birds">
        <img src="/assets/burung.png" alt="" className="timeline__bird timeline__bird--1" aria-hidden="true" />
        <img src="/assets/burung.png" alt="" className="timeline__bird timeline__bird--2" aria-hidden="true" />
        <img src="/assets/burung.png" alt="" className="timeline__bird timeline__bird--3" aria-hidden="true" />
      </div>

      <div className={`container fade-up ${isInView ? 'visible' : ''}`}>
        <h2 className="section-title">TIMELINE</h2>

        <div className="timeline__track-container">
          <div className="timeline__track">
            <div className="timeline__line-vertical"></div>

            {TIMELINE_DATA.map((item, i) => (
              <div
                className={`timeline__item timeline__item--${item.side}`}
                key={i}
              >
                <div className="timeline__content">
                  <h4 className="timeline__card-title">{item.title}</h4>
                  <span className="timeline__card-date">{item.date}</span>
                </div>
                <div className="timeline__connector">
                  <div className="timeline__line-horizontal"></div>
                  <div className="timeline__dot"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline__character">
            <img src="/assets/MASKOT LYRA.png" alt="Timeline Mascot" />
          </div>
        </div>
      </div>
    </section>
  );
}
