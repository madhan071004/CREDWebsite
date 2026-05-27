import { useState } from "react";
import PageLayout from "./PageLayout";
import { motion } from "framer-motion";

export default function CreditScorePage() {
  const [score] = useState(782);
  const tips = [
    { icon: "✓", title: "Pay bills on time", desc: "On-time payments are the #1 factor in your credit score." },
    { icon: "✓", title: "Keep utilization low", desc: "Try to use less than 30% of your total credit limit." },
    { icon: "✓", title: "Don't close old accounts", desc: "Length of credit history matters. Keep old cards active." },
    { icon: "✓", title: "Limit new applications", desc: "Each new credit application causes a hard inquiry." },
    { icon: "✓", title: "Monitor regularly", desc: "Check your credit report monthly for errors and fraud." },
    { icon: "✓", title: "Diversify credit types", desc: "A mix of credit cards, loans, and EMIs helps your score." }
  ];

  const scorePercent = ((score - 300) / 600) * 100;

  return (
    <PageLayout title="credit score tracking" subtitle="PRODUCTS">
      <div className="content-section">
        <p className="content-text">
          Your credit score is the key to your financial future. With CRED, track your
          score for free, understand what affects it, and get personalized tips to improve it.
        </p>
      </div>

      <div className="content-section" style={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          className="score-meter"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="score-circle">
            <svg viewBox="0 0 200 200" width="200" height="200">
              <circle cx="100" cy="100" r="88" fill="none" stroke="#1a1a1a" strokeWidth="10" />
              <motion.circle
                cx="100" cy="100" r="88"
                fill="none" stroke="#e5b984" strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 88}
                strokeDashoffset={2 * Math.PI * 88 * (1 - scorePercent / 100)}
                transform="rotate(-90 100 100)"
                initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
                whileInView={{ strokeDashoffset: 2 * Math.PI * 88 * (1 - scorePercent / 100) }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <div className="score-value">
              <span className="score-number">{score}</span>
              <span className="score-label">excellent</span>
            </div>
          </div>
          <p className="score-range">score range: 300 — 900</p>
        </motion.div>
      </div>

      <div className="content-section">
        <h2 className="content-heading">tips to improve your score</h2>
        <div className="content-grid content-grid--3">
          {tips.map((t, i) => (
            <motion.div
              key={i}
              className="content-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="content-card-icon" style={{ color: "#10b981" }}>{t.icon}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
