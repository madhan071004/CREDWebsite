import PageLayout from "./PageLayout";
import { motion } from "framer-motion";

export default function CredCoinsPage() {
  const waysToEarn = [
    { title: "Pay Credit Card Bills", desc: "Earn 1 coin for every ₹1 paid towards your bill." },
    { title: "Use CRED Pay", desc: "Earn up to 1000 coins on UPI transactions." },
    { title: "Refer Friends", desc: "Get 10,000 coins for every successful referral." }
  ];

  return (
    <PageLayout title="CRED Coins" subtitle="YOUR VIRTUAL WEALTH">
      <div className="content-section">
        <p className="content-text">
          CRED coins are your ticket to the good life. Earn them by being financially responsible, and spend them on rewards, exclusive experiences, and jackpots.
        </p>
      </div>

      <div className="content-section">
        <h2 className="content-heading">How to earn</h2>
        <div className="steps-grid">
          {waysToEarn.map((w, i) => (
            <motion.div
              key={i}
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="step-num">0{i + 1}</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
