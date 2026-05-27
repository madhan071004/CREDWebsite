import { useState } from "react";
import PageLayout from "./PageLayout";
import { motion, AnimatePresence } from "framer-motion";

export default function CredPayPage() {
  const features = [
    { icon: "📱", title: "Scan & Pay", desc: "Scan any QR code to pay instantly from your bank account." },
    { icon: "💸", title: "Send Money", desc: "Transfer money to phone numbers or UPI IDs securely." },
    { icon: "🎁", title: "Earn Rewards", desc: "Get cashback and CRED coins on every UPI transaction." },
    { icon: "🛡️", title: "Secure", desc: "Bank-grade security for all your payments." }
  ];

  // UPI transfer simulator state
  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [payStatus, setPayStatus] = useState("idle"); // idle, pin, paying, success
  const [pin, setPin] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [cashback, setCashback] = useState(0);

  const handleProceed = (e) => {
    e.preventDefault();
    if (!upiId || !amount) {
      alert("Please enter a valid UPI ID / Phone Number and amount.");
      return;
    }
    setPayStatus("pin");
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin.length !== 4) {
      alert("Please enter a 4-digit UPI PIN.");
      return;
    }
    setPayStatus("paying");

    setTimeout(() => {
      setTransactionId("UPI" + Math.floor(Math.random() * 900000000000 + 100000000000));
      const wonCashback = Math.floor(Math.random() * 50 + 5);
      setCashback(wonCashback);
      setPayStatus("success");

      // Save credentials & increase coins
      const currentCoins = parseInt(localStorage.getItem("credCoins") || "0");
      localStorage.setItem("credCoins", (currentCoins + 100).toString());
      window.dispatchEvent(new Event("storage")); // update UI
    }, 2500);
  };

  const handleReset = () => {
    setUpiId("");
    setAmount("");
    setRemarks("");
    setPin("");
    setPayStatus("idle");
  };

  return (
    <PageLayout title="CRED Pay" subtitle="UPI PAYMENTS">
      <div className="content-section">
        <p className="content-text">
          Make UPI payments rewarding with CRED Pay. Scan any QR code, send money to friends, or pay merchants instantly — all while earning exclusive rewards.
        </p>
      </div>

      {/* Interactive UPI Payment Portal */}
      <div className="content-section">
        <h2 className="content-heading">interactive upi portal</h2>
        
        <div className="payment-portal">
          <AnimatePresence mode="wait">
            {payStatus === "idle" && (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleProceed}
                className="payment-form"
              >
                <h3>instant upi transfer</h3>
                
                <div className="payment-input-group">
                  <label>recipient upi id or phone number</label>
                  <input 
                    type="text" 
                    placeholder="e.g. name@upi or 9876543210" 
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="payment-input"
                    required
                  />
                </div>

                <div className="payment-input-group">
                  <label>amount (in ₹)</label>
                  <input 
                    type="number" 
                    placeholder="Enter transfer amount" 
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="payment-input"
                    required
                  />
                </div>

                <div className="payment-input-group">
                  <label>remarks (optional)</label>
                  <input 
                    type="text" 
                    placeholder="What is this payment for?" 
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="payment-input"
                  />
                </div>

                <button type="submit" className="payment-btn">
                  pay now with CRED Pay →
                </button>
              </motion.form>
            )}

            {payStatus === "pin" && (
              <motion.form
                key="pin-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handlePinSubmit}
                className="payment-form"
                style={{ textAlign: 'center' }}
              >
                <h3>enter 4-digit upi pin</h3>
                <p style={{ color: '#a0a0a0', fontSize: '14px', marginBottom: '20px' }}>
                  Paying ₹{amount} to {upiId}
                </p>
                
                <div className="payment-input-group" style={{ maxWidth: '240px', margin: '0 auto' }}>
                  <input 
                    type="password"
                    maxLength="4"
                    pattern="\d{4}"
                    placeholder="••••"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="payment-input"
                    style={{ textAlign: 'center', letterSpacing: '1.5em', fontSize: '24px' }}
                    required
                    autoFocus
                  />
                </div>

                <button type="submit" className="payment-btn" style={{ width: '100%' }}>
                  confirm & submit pin
                </button>
              </motion.form>
            )}

            {payStatus === "paying" && (
              <motion.div
                key="paying-loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="payment-loader"
              >
                <div className="spinner"></div>
                <h4>Contacting bank server...</h4>
                <p style={{ color: '#666', fontSize: '13px' }}>Transferring ₹{amount} to {upiId}</p>
              </motion.div>
            )}

            {payStatus === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="payment-success-screen"
              >
                <div className="payment-success-badge">✓</div>
                <h4>Transfer Successful!</h4>
                <p>Payment has been securely transferred to the recipient's bank account.</p>

                <div className="payment-success-details">
                  <div className="payment-success-row">
                    <span>Paid To</span>
                    <span>{upiId}</span>
                  </div>
                  <div className="payment-success-row">
                    <span>Amount Paid</span>
                    <span>₹{amount}</span>
                  </div>
                  <div className="payment-success-row">
                    <span>Transaction ID</span>
                    <span>{transactionId}</span>
                  </div>
                  <div className="payment-success-row" style={{ display: remarks ? 'flex' : 'none' }}>
                    <span>Remarks</span>
                    <span>{remarks}</span>
                  </div>
                  <div className="payment-success-rewards" style={{ border: '1px dashed #10b981', color: '#10b981', background: 'rgba(16, 185, 129, 0.05)' }}>
                    🎁 Won ₹{cashback} Cashback & 100 CRED Coins!
                  </div>
                </div>

                <button onClick={handleReset} className="payment-btn">
                  make another transfer
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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
