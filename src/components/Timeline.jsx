import { useInView } from '../hooks/useInView';
import { OceanDecorations } from './Decorations';
import './Timeline.css';

const TIMELINE_DATA = [
  { date: '12 - 21 Agustus', title: 'Open Registration Internal', side: 'left' },
  { date: '22 Agustus', title: 'Webinar', side: 'right' },
  { date: '24 - 26 Agustus', title: 'Open Registration Umum', side: 'left' },
  { date: '28 - 29 Agustus', title: 'Pretest', side: 'right' },
  { date: '29 - 30 Agustus', title: 'Pre-Test', side: 'left' },
  { date: '4 September', title: 'Announcement', side: 'right' },
  { date: '8 September', title: 'On Boarding', side: 'left' },
  { date: '12-14, 19-20, 26-27\nSeptember dan 3-4 Oktober', title: 'Bootcamp', side: 'right' },
  { date: '27 September', title: 'Mid-test', side: 'left' },
  { date: '12 - 21 Agustus', title: 'Final Project', side: 'right' },
  { date: '19 Oktober', title: 'Deadline', side: 'left' },
  { date: '24 Oktober', title: 'Graduation', side: 'right' },
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
