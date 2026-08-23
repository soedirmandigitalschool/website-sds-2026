import { useEffect } from 'react';
import './BestStudent.css';

export default function BestStudent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="best-student-page">
      <main className="bs-main-container" aria-label="Coming soon">
        <div className="bs-cloud bs-cloud-top-left" aria-hidden="true" />
        <div className="bs-cloud bs-cloud-top-right" aria-hidden="true" />
        <div className="bs-cloud bs-cloud-middle-left" aria-hidden="true" />
        <div className="bs-cloud bs-cloud-middle-right" aria-hidden="true" />
        <div className="bs-cloud bs-cloud-low-left" aria-hidden="true" />
        <div className="bs-cloud bs-cloud-low-right" aria-hidden="true" />

        <section className="bs-message fade-up visible">
          <h1>COMING SOON</h1>
          <p>Stay tuned for more exciting features and programs!</p>
        </section>

        <div className="bs-sun" aria-hidden="true" />
        <img className="bs-ship" src="/assets/Vector.png" alt="" aria-hidden="true" />
        <div className="bs-wave bs-wave-back" aria-hidden="true" />
        <div className="bs-wave bs-wave-front" aria-hidden="true" />
      </main>
    </div>
  );
}
