import { useState } from "react";
import PageLayout from "./PageLayout";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout title="Contact Us" subtitle="SUPPORT">
      <div className="content-section">
        <div className="contact-form-wrapper" style={{ maxWidth: "600px", margin: "0 auto", background: "#0a0a0a", padding: "40px", borderRadius: "16px", border: "1px solid #1a1a1a" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>Message Sent!</h3>
              <p style={{ color: "#a0a0a0" }}>We've received your message and will get back to you shortly.</p>
              <button className="form-button" style={{ marginTop: "24px" }} onClick={() => setSubmitted(false)}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="form-group">
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#a0a0a0" }}>Name</label>
                <input type="text" required style={{ width: "100%", padding: "12px 16px", background: "#111", border: "1px solid #222", borderRadius: "8px", color: "#fff", outline: "none" }} placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#a0a0a0" }}>Email</label>
                <input type="email" required style={{ width: "100%", padding: "12px 16px", background: "#111", border: "1px solid #222", borderRadius: "8px", color: "#fff", outline: "none" }} placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#a0a0a0" }}>Message</label>
                <textarea required rows="5" style={{ width: "100%", padding: "12px 16px", background: "#111", border: "1px solid #222", borderRadius: "8px", color: "#fff", outline: "none", resize: "vertical" }} placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="form-button" style={{ width: "100%" }}>
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
