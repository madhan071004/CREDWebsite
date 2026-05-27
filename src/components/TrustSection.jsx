import { motion } from 'framer-motion';

export default function TrustSection() {
  const features = [
    {
      icon: "🛡️",
      title: "members-only",
      desc: "exclusivity is in our DNA"
    },
    {
      icon: "👥",
      title: "trusted by millions",
      desc: "credible members across India"
    },
    {
      icon: "🎁",
      title: "always rewarding",
      desc: "pay bills, earn rewards. unlock experiences."
    }
  ];

  return (
    <section id="trust" className="trust-section">
      <div className="trust-container">
        <div className="trust-content">
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            OUR PROMISE
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            built on trust.<br />made for the few.
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            CRED is not just an app. It's a club of trustworthy members who value credibility. we reward you for paying your bills on time and help you unlock a world of privileges.
          </motion.p>
          
          <div className="trust-features">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                className="trust-feature"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
              >
                <div className="trust-feature-icon">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="trust-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img src="/trust_arch.png" alt="Monolith Arch" />
        </motion.div>
      </div>
    </section>
  );
}
