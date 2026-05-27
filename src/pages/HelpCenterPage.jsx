import PageLayout from "./PageLayout";

export default function HelpCenterPage() {
  const categories = [
    { title: "Account & Profile", icon: "👤", desc: "Manage your CRED account, KYC, and preferences." },
    { title: "Bill Payments", icon: "💳", desc: "Issues with credit card bill payments and settlements." },
    { title: "Rewards & Coins", icon: "🎁", desc: "Questions about earning and redeeming CRED coins." },
    { title: "CRED Pay", icon: "📱", desc: "Help with UPI payments and scan & pay." },
    { title: "Credit Score", icon: "📈", desc: "Understanding your credit report and score changes." },
    { title: "Security & Fraud", icon: "🛡️", desc: "Report suspicious activity or unauthorized transactions." }
  ];

  return (
    <PageLayout title="Help Center" subtitle="SUPPORT">
      <div className="content-section">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <input 
            type="text" 
            placeholder="Search for articles, guides, or FAQs..." 
            style={{ width: "100%", padding: "16px 24px", background: "#111", border: "1px solid #222", borderRadius: "12px", color: "#fff", fontSize: "16px", outline: "none", marginBottom: "48px" }} 
          />
        </div>
        
        <div className="content-grid content-grid--3">
          {categories.map((c, i) => (
            <div key={i} className="content-card" style={{ cursor: "pointer", textAlign: "center" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>{c.icon}</div>
              <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{c.title}</h3>
              <p style={{ fontSize: "14px", color: "#a0a0a0" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
