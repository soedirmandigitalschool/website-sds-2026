import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__birds">
        <img src="/assets/burung.png" alt="" className="footer__bird footer__bird--1" aria-hidden="true" />
        <img src="/assets/burung.png" alt="" className="footer__bird footer__bird--2" aria-hidden="true" />
      </div>

      <div className="footer__ship">
        <img src="/assets/kapal.png" alt="Pirate Ship" />
      </div>

      <div className="footer__content container">
        <div className="footer__grid">
          
          {/* Column 1: Brand */}
          <div className="footer__col footer__col--brand">
            <div className="footer__brand-header">
              <img src="/assets/LOGO SDS 26.png" alt="SDS Logo" className="footer__logo" />
              <div>
                <h3 className="footer__brand-name">Soedirman Digital School</h3>
                <p className="footer__brand-sub">BEM Unsoed 2026</p>
              </div>
            </div>
            <p className="footer__desc">
              Develop practical digital skills, explore new possibilities, and prepare yourself for the future with Soedirman Digital School.
            </p>
          </div>

          {/* Column 2: Link */}
          <div className="footer__col">
            <h4 className="footer__heading">Link</h4>
            <ul className="footer__list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Course */}
          <div className="footer__col">
            <h4 className="footer__heading">Course</h4>
            <ul className="footer__list">
              <li><a href="#learning-path">Graphic Designer</a></li>
              <li><a href="#learning-path">Data Analyst</a></li>
              <li><a href="#learning-path">Sosmed Specialist</a></li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="footer__col">
            <h4 className="footer__heading">Follow Us</h4>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="LinkedIn">LI</a>
              <a href="#" aria-label="TikTok">TK</a>
            </div>
          </div>

        </div>
        
        <div className="footer__bottom">
          <p>&copy; 2026 Soedirman Digital School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
