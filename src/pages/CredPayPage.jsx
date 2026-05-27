import PageLayout from "./PageLayout";
import { motion } from "framer-motion";

export default function CredPayPage() {
  const features = [
    { icon: "📱", title: "Scan & Pay", desc: "Scan any QR code to pay instantly from your bank account." },
    { icon: "💸", title: "Send Money", desc: "Transfer money to phone numbers or UPI IDs securely." },
    { icon: "🎁", title: "Earn Rewards", desc: "Get cashback and CRED coins on every UPI transaction." },
    { icon: "🛡️", title: "Secure", desc: "Bank-grade security for all your payments." }
  ];

  return (
    <PageLayout title="CRED Pay" subtitle="UPI PAYMENTS">
      <div className="content-section">
        <p className="content-text">
          Make UPI payments rewarding with CRED Pay. Scan any QR code, send money to friends, or pay merchants instantly — all while earning exclusive rewards.
        </p>
      </div>

      <div className="content-section">
        <div className="content-grid content-grid--2">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="content-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="content-card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
