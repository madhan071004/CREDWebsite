import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles/global.css";

// ─── Components ──────────────────────────────────────────────────────────────
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import FeaturesSection from "./components/FeaturesSection";
import NeoPopSection from "./components/NeoPopSection";
import CountersSection from "./components/CountersSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SecuritySection from "./components/SecuritySection";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import DownloadModal from "./components/DownloadModal";
import Toast from "./components/Toast";

// ─── Pages ───────────────────────────────────────────────────────────────────
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import PressPage from "./pages/PressPage";
import BlogPage from "./pages/BlogPage";
import CreditCardsPage from "./pages/CreditCardsPage";
import CreditScorePage from "./pages/CreditScorePage";
import RewardsPage from "./pages/RewardsPage";
import CredPayPage from "./pages/CredPayPage";
import CredCoinsPage from "./pages/CredCoinsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import FeesPage from "./pages/FeesPage";
import GrievancePage from "./pages/GrievancePage";
import HelpCenterPage from "./pages/HelpCenterPage";
import ContactPage from "./pages/ContactPage";
import FaqsPage from "./pages/FaqsPage";

function Home({ onDownloadClick }) {
  return (
    <>
      <main>
        <Hero onDownloadClick={onDownloadClick} />
        <TrustSection />
        <FeaturesSection />
        <NeoPopSection />
        <CountersSection />
        <TestimonialsSection />
        <SecuritySection />
      </main>
    </>
  );
}

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [user, setUser] = useState(() => localStorage.getItem("credUser"));
  const location = useLocation();

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
  };

  const handleLogin = (name) => {
    setUser(name);
    localStorage.setItem("credUser", name);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("credUser");
    showToast("Logged out successfully");
  };

  useEffect(() => {
    // Scroll to section if hash is present
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      {/* Conditionally render Nav and Footer in App.jsx based on route or let PageLayout handle it? 
          Wait, the Home component has Hero, etc. The original App had Nav, main, Footer. 
          PageLayout renders its own Nav and Footer for the sub-pages.
          So for Home, we need Nav and Footer here. */}
      {location.pathname === "/" && (
        <Nav user={user} onLogout={handleLogout} onLoginClick={() => setIsLoginOpen(true)} onDownloadClick={() => setIsDownloadOpen(true)} />
      )}
      
      <Routes>
        <Route path="/" element={<Home onDownloadClick={() => setIsDownloadOpen(true)} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/credit-cards" element={<CreditCardsPage />} />
        <Route path="/credit-score" element={<CreditScorePage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/cred-pay" element={<CredPayPage />} />
        <Route path="/cred-coins" element={<CredCoinsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/fees" element={<FeesPage />} />
        <Route path="/grievance" element={<GrievancePage />} />
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
      </Routes>

      {location.pathname === "/" && <Footer />}

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onToast={showToast} onLogin={handleLogin} />
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} onToast={showToast} />
      
      <Toast 
        message={toastMessage} 
        isVisible={toastVisible} 
        onDismiss={() => setToastVisible(false)} 
      />
    </>
  );
}
