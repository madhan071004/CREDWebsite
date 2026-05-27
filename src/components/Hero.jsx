import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

// Now Hero uses window.dispatchEvent to open download modal or we can use React context,
// but actually we passed down onDownloadClick to Nav. In Hero, we can just grab it or 
// use a custom event, or since we only have one App component, we could pass it to Hero too.
// Let's modify Hero to accept onDownloadClick. Wait, App renders Hero directly, so we need to update App to pass it.
export default function Hero({ onDownloadClick }) {
  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hero-title">
          not everyone<br />gets it. <span>you're<br />one of them.</span>
        </h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          CRED is a members-only club where India's most credible earn rewards, exclusive privileges and extraordinary experiences.
        </motion.p>
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="btn-primary" onClick={onDownloadClick}>
            download the app <Download size={18} />
          </button>
          <div className="hero-badge">
            exclusive. by invitation only.
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img 
          src="/hero_phone.png" 
          alt="CRED App Interface" 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
        scroll
      </motion.div>
    </section>
  );
}
