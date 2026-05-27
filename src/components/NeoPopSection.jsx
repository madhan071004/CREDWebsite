import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function NeoPopSection() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "CRED Coins",
      label: "Earn Rewards",
      desc: "Earn coins on every rupee paid. Redeem for exclusive rewards, cashback, and premium experiences.",
      btnText: "Start Earning",
      color: "#e5b984",
      link: "/cred-coins"
    },
    {
      title: "CRED Pay",
      label: "Instant Transfer",
      desc: "Send money, pay merchants, split bills. Earn rewards on every UPI transaction.",
      btnText: "Pay Now",
      color: "#3b82f6",
      link: "/cred-pay"
    }
  ];

  return (
    <section className="neopop-section">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">NEOPOP DESIGN</span>
        <h2 className="section-title">Premium experiences<br />everywhere</h2>
      </motion.div>

      <div className="neopop-grid">
        {cards.map((c, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="neopop-card"
            whileHover={{ y: -10, boxShadow: `0 20px 40px rgba(0,0,0,0.8)`, borderColor: 'rgba(255,255,255,0.1)' }}
            onClick={() => navigate(c.link)}
          >
            <div className="neopop-card-tag">{c.label}</div>
            <h3 style={{ color: c.color }} className="neopop-card-title">{c.title}</h3>
            <p className="neopop-card-desc">{c.desc}</p>
            
            <button style={{ color: c.color }} className="neopop-card-button">
              {c.btnText} &rarr;
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
