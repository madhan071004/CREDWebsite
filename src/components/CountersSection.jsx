import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CountersSection() {
  const counters = [
    {
      value: "4.8",
      stars: true,
      label: "app store rating",
      footerIcon: "🍏",
      footerText: "1.2M+ ratings"
    },
    {
      value: "4.6",
      stars: true,
      label: "play store rating",
      footerIcon: "▶️",
      footerText: "3.5M+ ratings"
    },
    {
      value: "10M+",
      label: "credible members and counting",
      footerAvatars: true
    },
    {
      value: "₹10,000Cr+",
      label: "rewards unlocked by members",
      trend: true
    }
  ];

  return (
    <section id="counters" className="counters-section">
      <div className="counters-grid">
        {counters.map((c, i) => (
          <motion.div 
            key={i} 
            className="counter-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="counter-header">
              <span className="counter-value">{c.value}</span>
              {c.stars && <span className="counter-stars">★</span>}
            </div>
            <p className="counter-label">{c.label}</p>
            
            <div className="counter-footer">
              {c.footerIcon && <span>{c.footerIcon} {c.footerText}</span>}
              {c.footerAvatars && <span>👥👥👥</span>}
              {c.trend && <span className="counter-trend"><TrendingUp size={20} /></span>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
