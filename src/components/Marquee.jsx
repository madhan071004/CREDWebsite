// ─── Marquee ─────────────────────────────────────────────────────────────────
export default function Marquee() {
  const items = [
    "Credit Card Bills", "CRED Coins", "Exclusive Rewards", "UPI Payments",
    "Credit Score", "Cashback", "Members Only", "Zero Hidden Charges",
    "Credit Card Bills", "CRED Coins", "Exclusive Rewards", "UPI Payments",
    "Credit Score", "Cashback", "Members Only", "Zero Hidden Charges",
  ];
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div key={i} className="marquee-item">
            <span>✦</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}
