import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__birds">
        <img src="/assets/burung.png" alt="" className="footer__bird footer__bird--1" aria-hidden="true" />
        <img src="/assets/burung.png" alt="" className="footer__bird footer__bird--2" aria-hidden="true" />
      </div>

      <div className="footer__sunset">
        <svg viewBox="0 0 100 50" preserveAspectRatio="none">
          <path d="M50 0 A50 50 0 0 1 100 50 L0 50 A50 50 0 0 1 50 0 Z" fill="#FF8C00" opacity="0.3" />
        </svg>
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
              <a href="https://www.instagram.com/soedirman.digital.school?igsi=bGNkY3dmc290MXJj" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.98a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/sekolah-digital-soedirman/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@soedirman.digital.school?_r=1&_t=ZS-9970HJdcmsJ" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.82 5.36-1.5 1.59-3.8 2.21-5.93 1.76-1.91-.4-3.52-1.99-4.08-3.9-.74-2.58.07-5.55 2.12-7.23 1.63-1.34 3.92-1.64 5.91-1.09V14.5c-1.2-.23-2.52-.08-3.52.73-1.06.87-1.47 2.45-1.03 3.73.4 1.14 1.49 1.96 2.68 2.11 1.4.17 2.92-.12 3.82-1.18.91-1.07 1.18-2.54 1.18-3.95V0c.21.02.42.02.63.02z" />
                </svg>
              </a>
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
