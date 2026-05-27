import PageLayout from "./PageLayout";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqsPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { q: "What is CRED?", a: "CRED is a members-only club that rewards individuals for their timely credit card bill payments by providing them with exclusive offers and access to premium experiences." },
    { q: "How do I become a CRED member?", a: "To become a member, you need to download the CRED app and apply. Your acceptance is based on your credit score (typically 750 or above)." },
    { q: "Is it safe to pay bills through CRED?", a: "Yes, absolutely. CRED uses bank-grade 256-bit encryption to protect your data and transactions. We partner directly with banks and networks to ensure secure settlements." },
    { q: "How do I earn CRED coins?", a: "You earn CRED coins equal to the amount of your credit card bill paid through the platform. For example, paying a ₹10,000 bill earns you 10,000 CRED coins." },
    { q: "Can I pay multiple credit card bills?", a: "Yes, you can add and manage multiple credit cards from different banks within the CRED app and pay all their bills from one place." },
    { q: "Are there any hidden charges?", a: "No. The CRED app is completely free to use. There are no subscription fees or hidden charges for paying bills via standard methods (like UPI)." }
  ];

  return (
    <PageLayout title="Frequently Asked Questions" subtitle="SUPPORT">
      <div className="content-section">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #1a1a1a", padding: "24px 0" }}>
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                style={{ width: "100%", background: "none", border: "none", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "18px", fontWeight: "600", cursor: "pointer", textAlign: "left" }}
              >
                {faq.q}
                <span style={{ fontSize: "24px", color: "#e5b984", transform: activeIndex === i ? "rotate(45deg)" : "none", transition: "transform 0.3s" }}>+</span>
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{ color: "#a0a0a0", lineHeight: "1.6", marginTop: "16px", paddingRight: "40px" }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
