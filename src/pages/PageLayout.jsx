import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageLayout({ title, subtitle, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-layout">
      <nav className="page-nav">
        <Link to="/" className="nav-logo">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
            alt="CRED Logo"
            className="nav-logo-icon"
          />
          CRED
        </Link>
        <Link to="/" className="page-back-link">← back to home</Link>
      </nav>

      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-tag">{subtitle}</span>
        <h1 className="page-heading">{title}</h1>
      </motion.header>

      <motion.div
        className="page-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>

      <footer className="page-footer">
        <Link to="/" className="nav-logo" style={{ justifyContent: "center" }}>
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
            alt="CRED Logo"
            className="nav-logo-icon"
          />
          CRED
        </Link>
        <p style={{ color: "#666", fontSize: "12px", marginTop: "16px" }}>
          © 2024 CRED. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
