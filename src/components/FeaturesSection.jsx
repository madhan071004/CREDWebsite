import { ArrowRight, Send, Coins, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function FeaturesSection() {
  const navigate = useNavigate();

  const features = [
    {
      image: "/feature_cc.png",
      title: "credit card\nbill payments",
      desc: "pay instantly and\nearn rewards",
      link: "/credit-cards"
    },
    {
      image: "/feature_gift.png",
      title: "rewards",
      desc: "exclusive rewards\nfor credible members",
      link: "/rewards"
    },
    {
      image: "/feature_dial.png",
      title: "credit score",
      desc: "track your score\nand improve financial health",
      link: "/credit-score"
    },
    {
      icon: <Send size={40} color="#3b82f6" />,
      title: "CRED pay",
      desc: "secure. fast.\nrewarding.",
      link: "/cred-pay"
    },
    {
      icon: <Coins size={40} color="#eab308" />,
      title: "CRED coins",
      desc: "earn coins and\nredeem exciting benefits",
      link: "/cred-coins"
    },
    {
      icon: <CreditCard size={40} color="#ec4899" />,
      title: "cashback",
      desc: "real cashback on\nbill payments",
      link: "/credit-cards"
    }
  ];

  return (
    <section id="features" className="features-section">
      <motion.div 
        className="features-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">EVERYTHING YOU NEED. AND MORE.</span>
        <h2 className="section-title">features that elevate</h2>
      </motion.div>
      
      <div className="features-grid">
        {features.map((f, i) => (
          <motion.div 
            key={i} 
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            onClick={() => navigate(f.link)}
          >
            {f.image ? (
              <motion.img 
                src={f.image} 
                alt={f.title.replace('\n', ' ')} 
                className="feature-image"
                whileHover={{ scale: 1.05 }}
              />
            ) : (
              <motion.div className="feature-icon-placeholder" whileHover={{ scale: 1.05 }}>
                {f.icon}
              </motion.div>
            )}
            <h3>{f.title.split('\n').map((line, idx) => <span key={idx}>{line}<br/></span>)}</h3>
            <p>{f.desc.split('\n').map((line, idx) => <span key={idx}>{line}<br/></span>)}</p>
            <ArrowRight size={18} className="feature-arrow" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
