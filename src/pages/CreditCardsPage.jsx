import PageLayout from "./PageLayout";
import { motion } from "framer-motion";

export default function CreditCardsPage() {
  const steps = [
    { num: "01", title: "link your card", desc: "Add your credit card securely. CRED supports all major banks and card networks." },
    { num: "02", title: "get bill reminders", desc: "Never miss a due date. CRED sends smart reminders before your bill is due." },
    { num: "03", title: "pay in seconds", desc: "Pay your full bill or custom amount with one tap. Fast, secure, hassle-free." },
    { num: "04", title: "earn rewards", desc: "Every payment earns you CRED coins, cashback, and access to exclusive rewards." }
  ];

  const banks = ["HDFC Bank", "ICICI Bank", "SBI Card", "Axis Bank", "Kotak Mahindra", "AMEX", "Citibank", "RBL Bank", "IndusInd Bank", "Yes Bank", "HSBC", "Standard Chartered"];

  return (
    <PageLayout title="credit card bill payments" subtitle="PRODUCTS">
      <div className="content-section">
        <p className="content-text">
          Pay your credit card bills on CRED and earn exclusive rewards every time.
          CRED supports all major Indian banks and card networks, making bill payment
          simpler, faster, and more rewarding than ever.
        </p>
      </div>

      <div className="content-section">
        <h2 className="content-heading">how it works</h2>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2 className="content-heading">supported banks</h2>
        <div className="chips-grid">
          {banks.map((b, i) => (
            <motion.span
              key={i}
              className="chip"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              {b}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="content-section">
        <div className="content-card highlight-card">
          <h3>₹10,000 Cr+</h3>
          <p>rewards distributed to CRED members for paying their bills on time</p>
        </div>
      </div>
    </PageLayout>
  );
}
