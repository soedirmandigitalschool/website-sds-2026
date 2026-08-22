import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Course', href: '/#learning-path' },
  { label: 'Timeline', href: '/#timeline' },
  { 
    label: 'Showcase', 
    href: '#', 
    isDropdown: true,
    dropdownItems: [
      { label: 'Best Student', href: '/coming-soon' },
      { label: 'After Movie', href: '/coming-soon' },
      { label: 'Awarding', href: '/awarding' },
      { label: 'Media Partner', href: '/coming-soon' },
      { label: 'Kunjungi Kami', href: '/coming-soon' }
    ]
  },
  { label: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsMobileOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/#home" className="navbar__brand">
          <img src="/assets/LOGO SDS 26.png" alt="SDS Logo" className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">Soedirman Digital School</span>
            <span className="navbar__brand-sub">BEM Unsoed 2026</span>
          </div>
        </Link>

        <div className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            link.isDropdown ? (
              <div className="navbar__dropdown-container" key={link.href}>
                <a
                  href="#"
                  className="navbar__link navbar__link--dropdown"
                  onClick={(e) => { e.preventDefault(); handleLinkClick(); }}
                >
                  {link.label}
                </a>
                <div className="navbar__dropdown-menu">
                  {link.dropdownItems.map(item => (
                    <Link key={item.href} to={item.href} className="navbar__dropdown-item" onClick={handleLinkClick}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="navbar__link"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            )
          ))}
          <Link to="/#home" className="navbar__cta" onClick={handleLinkClick}>Daftar</Link>
        </div>

        <button
          className={`navbar__hamburger ${isMobileOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      {isMobileOpen && <div className="navbar__overlay" onClick={() => setIsMobileOpen(false)} />}
    </nav>
  );
}
