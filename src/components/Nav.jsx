import { useState, useEffect } from "react";
import { Download } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Nav({ user, onLogout, onLoginClick, onDownloadClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${mobileMenuOpen ? "menu-open" : ""}`}>
        <Link to="/" className="nav-logo" onClick={handleLinkClick}>
          <img 
            src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" 
            alt="CRED Logo" 
            className="nav-logo-icon"
          />
          CRED
        </Link>
        
        <div className="nav-links">
          <Link to="/#features">credit cards</Link>
          <Link to="/#features">credit score</Link>
          <Link to="/#features">rewards</Link>
          <Link to="/#trust">refer & earn</Link>
          <Link to="/#security">CRED pay</Link>
        </div>

        <div className="nav-right">
          {user ? (
            <div className="nav-user-info">
              <span className="nav-welcome">Hi, {user}</span>
              <button onClick={onLogout} className="nav-logout-btn">logout</button>
            </div>
          ) : (
            <button onClick={onLoginClick} className="nav-login-btn">log in</button>
          )}
          <button className="nav-cta" onClick={onDownloadClick}>
            download app <Download size={16} />
          </button>
        </div>

        <button className="nav-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`nav-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="nav-mobile-links">
          <Link to="/#features" onClick={handleLinkClick}>credit cards</Link>
          <Link to="/#features" onClick={handleLinkClick}>credit score</Link>
          <Link to="/#features" onClick={handleLinkClick}>rewards</Link>
          <Link to="/#trust" onClick={handleLinkClick}>refer & earn</Link>
          <Link to="/#security" onClick={handleLinkClick}>CRED pay</Link>
          
          <div className="nav-mobile-divider"></div>
          
          {user ? (
            <div className="nav-mobile-user">
              <span className="nav-welcome">Hi, {user}</span>
              <button onClick={() => { onLogout(); handleLinkClick(); }} className="nav-logout-btn">logout</button>
            </div>
          ) : (
            <button onClick={() => { onLoginClick(); handleLinkClick(); }} className="nav-mobile-login-btn">log in</button>
          )}
          
          <button className="nav-mobile-cta" onClick={() => { onDownloadClick(); handleLinkClick(); }}>
            download app <Download size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
