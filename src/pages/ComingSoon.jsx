import './ComingSoon.css';

export default function ComingSoon() {
  return (
    <div className="coming-soon">
      <div className="coming-soon__content">
        <h1 className="coming-soon__title">COOMING SOON</h1>
        <p className="coming-soon__subtitle">Stay tuned for more exciting features and programs!</p>
      </div>

      <div className="coming-soon__background">
        <div className="coming-soon__sun"></div>
        <div className="coming-soon__ocean"></div>
        <img src="/assets/kapal.png" alt="Pirate Ship" className="coming-soon__ship" />
      </div>
    </div>
  );
}
