import PageLayout from "./PageLayout";
import { motion } from "framer-motion";

export default function RewardsPage() {
  const categories = [
    { icon: "🎁", name: "cashback", desc: "Get real money back on your credit card payments" },
    { icon: "🎫", name: "vouchers", desc: "Exclusive vouchers from top brands and merchants" },
    { icon: "✨", name: "experiences", desc: "Premium events, concerts, and curated experiences" },
    { icon: "🏆", name: "jackpots", desc: "Spin the wheel and win big prizes after every payment" },
    { icon: "💳", name: "partner offers", desc: "Special deals from 500+ partner brands" },
    { icon: "🪙", name: "CRED coins", desc: "Earn coins on every payment, redeem anytime" }
  ];

  const featured = [
    { brand: "Amazon", offer: "Flat ₹500 off on orders above ₹2,000", coins: 5000 },
    { brand: "Swiggy", offer: "40% off up to ₹200 on your next 3 orders", coins: 3000 },
    { brand: "Nike", offer: "Extra 25% off on all products", coins: 8000 },
    { brand: "BookMyShow", offer: "Buy 1 Get 1 free on movie tickets", coins: 4000 },
    { brand: "Cult.fit", offer: "3 months membership at 50% off", coins: 10000 },
    { brand: "Uber", offer: "₹150 off on next 5 rides", coins: 2000 }
  ];

  return (
    <PageLayout title="rewards that matter" subtitle="PRODUCTS">
      <div className="content-section">
        <p className="content-text">
          CRED rewards aren't just points — they're real value. From cashback to exclusive
          experiences, every credit card payment on CRED unlocks rewards that you'll actually love.
        </p>
      </div>

      <div className="content-section">
        <h2 className="content-heading">reward categories</h2>
        <div className="content-grid content-grid--3">
          {categories.map((c, i) => (
            <motion.div
              key={i}
              className="content-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="content-card-icon">{c.icon}</div>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2 className="content-heading">featured rewards</h2>
        <div className="rewards-list">
          {featured.map((r, i) => (
            <motion.div
              key={i}
              className="reward-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="reward-info">
                <h4>{r.brand}</h4>
                <p>{r.offer}</p>
              </div>
              <div className="reward-coins">
                <span className="coin-icon">🪙</span> {r.coins.toLocaleString()} coins
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
