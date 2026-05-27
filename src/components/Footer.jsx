import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="CRED" />
            CRED
          </div>
          <p className="footer-copyright">
            © 2024 CRED. All rights reserved.
          </p>
        </div>

        <div className="footer-col">
          <h5>COMPANY</h5>
          <ul>
            <li><Link to="/about">about us</Link></li>
            <li><Link to="/careers">careers</Link></li>
            <li><Link to="/press">press</Link></li>
            <li><Link to="/blog">blog</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>PRODUCTS</h5>
          <ul>
            <li><Link to="/credit-cards">credit cards</Link></li>
            <li><Link to="/credit-score">credit score</Link></li>
            <li><Link to="/rewards">rewards</Link></li>
            <li><Link to="/cred-pay">CRED pay</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>LEGAL</h5>
          <ul>
            <li><Link to="/privacy-policy">privacy policy</Link></li>
            <li><Link to="/terms">terms & conditions</Link></li>
            <li><Link to="/fees">fees & charges</Link></li>
            <li><Link to="/grievance">grievance redressal</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>SUPPORT</h5>
          <ul>
            <li><Link to="/help">help center</Link></li>
            <li><Link to="/contact">contact us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
          
          <div className="social-links" style={{ marginTop: '30px' }}>
            <a href="https://www.instagram.com/caborneplus/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://x.com/CABORNEPLUS" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/cred-club/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.youtube.com/@CREDclub" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
