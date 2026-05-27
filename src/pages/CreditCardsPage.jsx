import { useState } from "react";
import PageLayout from "./PageLayout";
import { motion, AnimatePresence } from "framer-motion";

export default function CreditCardsPage() {
  const steps = [
    { num: "01", title: "link your card", desc: "Add your credit card securely. CRED supports all major banks and card networks." },
    { num: "02", title: "get bill reminders", desc: "Never miss a due date. CRED sends smart reminders before your bill is due." },
    { num: "03", title: "pay in seconds", desc: "Pay your full bill or custom amount with one tap. Fast, secure, hassle-free." },
    { num: "04", title: "earn rewards", desc: "Every payment earns you CRED coins, cashback, and access to exclusive rewards." }
  ];

  const banks = ["HDFC Bank", "ICICI Bank", "SBI Card", "Axis Bank", "Kotak Mahindra", "AMEX", "Citibank", "RBL Bank", "IndusInd Bank", "Yes Bank", "HSBC", "Standard Chartered"];

  // Payment simulator state
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [bankName, setBankName] = useState("HDFC Bank");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("upi"); // upi, netbanking, debit
  const [paymentStatus, setPaymentStatus] = useState("idle"); // idle, loading, success
  const [transactionId, setTransactionId] = useState("");

  const handlePayBill = (e) => {
    e.preventDefault();
    if (!cardNumber || !cardHolder || !amount) {
      alert("Please fill out all billing details.");
      return;
    }
    setPaymentStatus("loading");

    // Simulate payment processing
    setTimeout(() => {
      setTransactionId("TXN" + Math.floor(Math.random() * 900000000 + 100000000));
      setPaymentStatus("success");

      // Give user simulated CRED Coins
      const currentCoins = parseInt(localStorage.getItem("credCoins") || "0");
      const earnedCoins = Math.floor(parseFloat(amount) * 1.5);
      localStorage.setItem("credCoins", (currentCoins + earnedCoins).toString());
      window.dispatchEvent(new Event("storage")); // Trigger Nav component updates
    }, 2500);
  };

  const handleReset = () => {
    setCardNumber("");
    setCardHolder("");
    setAmount("");
    setPaymentStatus("idle");
  };

  return (
    <PageLayout title="credit card bill payments" subtitle="PRODUCTS">
      <div className="content-section">
        <p className="content-text">
          Pay your credit card bills on CRED and earn exclusive rewards every time.
          CRED supports all major Indian banks and card networks, making bill payment
          simpler, faster, and more rewarding than ever.
        </p>
      </div>

      {/* Interactive Payment Portal */}
      <div className="content-section">
        <h2 className="content-heading">quick pay portal</h2>
        
        <div className="payment-portal">
          <AnimatePresence mode="wait">
            {paymentStatus === "idle" && (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handlePayBill}
                className="payment-form"
              >
                <h3>pay your bill</h3>
                
                <div className="payment-input-group">
                  <label>select card bank</label>
                  <select 
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="payment-input"
                  >
                    {banks.map((b) => (
                      <option key={b} value={b} style={{ background: '#0a0a0a' }}>{b}</option>
                    ))}
                  </select>
                </div>

                <div className="payment-input-group">
                  <label>card number</label>
                  <input 
                    type="text" 
                    placeholder="xxxx xxxx xxxx xxxx" 
                    maxLength="19"
                    value={cardNumber.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="payment-input"
                    required
                  />
                </div>

                <div className="payment-input-group">
                  <label>cardholder name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    className="payment-input"
                    required
                  />
                </div>

                <div className="payment-input-group">
                  <label>amount (in ₹)</label>
                  <input 
                    type="number" 
                    placeholder="Enter bill amount" 
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="payment-input"
                    required
                  />
                </div>

                <div className="payment-input-group">
                  <label>payment method</label>
                  <div className="payment-methods">
                    <div 
                      className={`payment-method-card ${paymentMethod === "upi" ? "selected" : ""}`}
                      onClick={() => setPaymentMethod("upi")}
                    >
                      <span className="payment-method-icon">⚡</span>
                      <span>CRED Pay / UPI</span>
                    </div>
                    <div 
                      className={`payment-method-card ${paymentMethod === "netbanking" ? "selected" : ""}`}
                      onClick={() => setPaymentMethod("netbanking")}
                    >
                      <span className="payment-method-icon">🏦</span>
                      <span>Net Banking</span>
                    </div>
                    <div 
                      className={`payment-method-card ${paymentMethod === "debit" ? "selected" : ""}`}
                      onClick={() => setPaymentMethod("debit")}
                    >
                      <span className="payment-method-icon">💳</span>
                      <span>Debit Card</span>
                    </div>
                  </div>
                </div>

                <button type="submit" className="payment-btn">
                  proceed to pay ₹{amount || "0"} →
                </button>
              </motion.form>
            )}

            {paymentStatus === "loading" && (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="payment-loader"
              >
                <div className="spinner"></div>
                <h4>Processing payment securely...</h4>
                <p style={{ color: '#666', fontSize: '13px' }}>Please do not close this window or refresh the page.</p>
              </motion.div>
            )}

            {paymentStatus === "success" && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="payment-success-screen"
              >
                <div className="payment-success-badge">✓</div>
                <h4>Payment Successful!</h4>
                <p>Your credit card bill payment has been successfully credited.</p>
                
                <div className="payment-success-details">
                  <div className="payment-success-row">
                    <span>Paid To</span>
                    <span>{bankName} Credit Card (..{cardNumber.slice(-4)})</span>
                  </div>
                  <div className="payment-success-row">
                    <span>Cardholder</span>
                    <span>{cardHolder}</span>
                  </div>
                  <div className="payment-success-row">
                    <span>Amount Paid</span>
                    <span>₹{amount}</span>
                  </div>
                  <div className="payment-success-row">
                    <span>Transaction ID</span>
                    <span>{transactionId}</span>
                  </div>
                  <div className="payment-success-rewards">
                    ✦ Earned {Math.floor(parseFloat(amount) * 1.5)} CRED Coins!
                  </div>
                </div>

                <button onClick={handleReset} className="payment-btn">
                  make another payment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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
