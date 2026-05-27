import PageLayout from "./PageLayout";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    { icon: "✦", title: "trust", desc: "We believe trust is the foundation of every transaction and every relationship." },
    { icon: "◈", title: "exclusivity", desc: "CRED is a members-only community, and that exclusivity drives quality experiences." },
    { icon: "◎", title: "design", desc: "We obsess over every pixel to build products that are beautiful and intuitive." },
    { icon: "⬡", title: "innovation", desc: "We push boundaries to create financial experiences that feel magical." }
  ];

  const milestones = [
    { year: "2018", event: "CRED founded by Kunal Shah with a vision to reward trust." },
    { year: "2019", event: "Crossed 1 million members within the first year of launch." },
    { year: "2020", event: "Launched CRED Pay — UPI payments with rewards." },
    { year: "2021", event: "CRED coins and cashback rewards introduced." },
    { year: "2022", event: "10 million+ members and ₹10,000 Cr+ rewards distributed." },
    { year: "2023", event: "Expanded to personal finance, rent payments, and education loans." },
    { year: "2024", event: "Continued redefining fintech with premium experiences." }
  ];

  return (
    <PageLayout title="about us" subtitle="OUR STORY">
      <div className="content-section">
        <h2 className="content-heading">what is CRED?</h2>
        <p className="content-text">
          CRED is a members-only club for India's most trustworthy and creditworthy individuals.
          Founded in 2018 by Kunal Shah, CRED rewards its members for paying their credit card bills
          on time and being financially responsible. With over 10 million members, CRED has become
          one of India's most premium fintech platforms, offering exclusive rewards, cashback, and
          experiences that money can't buy.
        </p>
        <p className="content-text">
          At its core, CRED is about celebrating trust. In a world where financial responsibility
          often goes unnoticed, CRED flips the script — rewarding members who maintain a credit score
          of 750 and above with access to a world of exclusive benefits.
        </p>
      </div>

      <div className="content-section">
        <h2 className="content-heading">our values</h2>
        <div className="content-grid content-grid--4">
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="content-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="content-card-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2 className="content-heading">our journey</h2>
        <div className="timeline">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="timeline-year">{m.year}</span>
              <p className="timeline-event">{m.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
