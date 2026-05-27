import { motion } from 'framer-motion';

export default function SecuritySection() {
  const features = [
    {
      icon: "🛡️",
      title: "bank-level security",
      desc: "256-bit encryption\nkeeps your data safe"
    },
    {
      icon: "🔐",
      title: "secure payments",
      desc: "multiple layers of authentication\nfor every transaction"
    },
    {
      icon: "🔒",
      title: "privacy first",
      desc: "your data is yours,\nalways protected"
    },
    {
      icon: "✅",
      title: "100% secure",
      desc: "trusted by millions of\ncredible members"
    }
  ];

  return (
    <section id="security" className="security-section">
      <div className="security-container">
        <div className="security-content">
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            YOUR SECURITY. OUR PRIORITY.
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            safe. secure. credible.
          </motion.h2>
          
          <div className="security-grid">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                className="security-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              >
                <div className="security-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc.split('\n').map((line, idx) => <span key={idx}>{line}<br/></span>)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="security-visual"
          initial={{ opacity: 0, rotateY: -30, scale: 0.8 }}
          whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img 
            src="/security_shield.png" 
            alt="Security Shield"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
