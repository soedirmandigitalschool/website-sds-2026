import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Course', href: '#learning-path' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Showcase', href: '#benefit', isDropdown: true },
  { label: 'FAQ', href: '#faq' },
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
        <a href="#home" className="navbar__brand">
          <img src="/assets/LOGO SDS 26.png" alt="SDS Logo" className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">Soedirman Digital School</span>
            <span className="navbar__brand-sub">BEM Unsoed 2026</span>
          </div>
        </a>

        <div className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${link.isDropdown ? 'navbar__link--dropdown' : ''}`}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a href="#home" className="navbar__cta" onClick={handleLinkClick}>Daftar</a>
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
