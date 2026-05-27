import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

export default function LoginModal({ isOpen, onClose, onToast, onLogin }) {
  const [step, setStep] = useState(1); // 1=phone, 2=otp, 3=success
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length < 10) {
      setError("Enter a valid 10-digit phone number");
      return;
    }
    if (name.trim().length === 0) {
      setError("Enter your name");
      return;
    }
    setError("");
    onToast("OTP sent to +91 " + phone);
    setStep(2);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length < 4) {
      setError("Enter a valid 4-digit OTP");
      return;
    }
    setError("");
    setStep(3);
    if (onLogin) onLogin(name.trim() || "CRED Member");
    onToast("Login successful! Welcome to CRED");
  };

  const handleClose = () => {
    setStep(1);
    setPhone("");
    setOtp("");
    setName("");
    setError("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={step === 3 ? "" : "log in to CRED"}>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.form
            key="phone"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSendOtp}
            className="modal-form"
          >
            <p className="modal-desc">enter your registered phone number to continue</p>
            <div className="form-group">
              <label htmlFor="login-phone">phone number</label>
              <div className="form-input-wrap">
                <span className="form-prefix">+91</span>
                <input
                  id="login-phone"
                  type="tel"
                  className="form-input"
                  placeholder="9876543210"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  autoFocus
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="login-name">your name</label>
              <div className="form-input-wrap">
                <input
                  id="login-name"
                  type="text"
                  className="form-input"
                  style={{ paddingLeft: "16px" }}
                  placeholder="Rahul"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            {error && <p className="form-error">{error}</p>}
            <button type="submit" className="form-button">
              send OTP →
            </button>
            <p className="modal-legal">
              by logging in, you agree to our <a href="/terms">terms</a> and <a href="/privacy-policy">privacy policy</a>
            </p>
          </motion.form>
        )}

        {step === 2 && (
          <motion.form
            key="otp"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleVerifyOtp}
            className="modal-form"
          >
            <p className="modal-desc">enter the 4-digit OTP sent to +91 {phone}</p>
            <div className="form-group">
              <label htmlFor="login-otp">verification code</label>
              <input
                id="login-otp"
                type="text"
                className="form-input otp-input"
                placeholder="● ● ● ●"
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                autoFocus
              />
            </div>
            {error && <p className="form-error">{error}</p>}
            <button type="submit" className="form-button">
              verify & login →
            </button>
            <button
              type="button"
              className="form-link"
              onClick={() => { setStep(1); setOtp(""); setError(""); }}
            >
              ← change number
            </button>
          </motion.form>
        )}

        {step === 3 && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="login-success"
          >
            <div className="success-icon">✦</div>
            <h3>welcome to CRED</h3>
            <p>you're now part of India's most exclusive rewards club.</p>
            <button className="form-button" onClick={handleClose}>
              start exploring →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}
