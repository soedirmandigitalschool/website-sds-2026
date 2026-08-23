import { useEffect } from 'react';
import './ComingSoon.css';

export default function ComingSoon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="coming-soon-page">
      <main className="cs-main-container" aria-label="Coming soon">
        <div className="cs-cloud cs-cloud-top-left" aria-hidden="true" />
        <div className="cs-cloud cs-cloud-top-right" aria-hidden="true" />
        <div className="cs-cloud cs-cloud-middle-left" aria-hidden="true" />
        <div className="cs-cloud cs-cloud-middle-right" aria-hidden="true" />
        <div className="cs-cloud cs-cloud-low-left" aria-hidden="true" />
        <div className="cs-cloud cs-cloud-low-right" aria-hidden="true" />

        <section className="cs-message fade-up visible">
          <h1>COMING SOON</h1>
          <p>Stay tuned for more exciting features and programs!</p>
        </section>

        <div className="cs-sun" aria-hidden="true" />
        <img className="cs-ship" src="/assets/Vector.png" alt="" aria-hidden="true" />
        <div className="cs-wave cs-wave-back" aria-hidden="true" />
        <div className="cs-wave cs-wave-front" aria-hidden="true" />
      </main>
    </div>
  );
}
