import { useState } from "react";
import Modal from "./Modal";

export default function DownloadModal({ isOpen, onClose, onToast }) {
  const [phone, setPhone] = useState("");

  const handleSendLink = (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    onToast("Download link sent to +91 " + phone);
    setPhone("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="download CRED">
      <div className="download-modal-body">
        <p className="modal-desc">
          get the CRED app and start earning rewards on your credit card bill payments.
        </p>

        <div className="download-stores">
          <a
            href="https://play.google.com/store/apps/details?id=com.dreamplug.androidapp"
            target="_blank"
            rel="noopener noreferrer"
            className="store-badge"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 01-.612-1.604V3.418c0-.614.226-1.166.611-1.604zm.795-.563l11.18 6.452-2.645 2.645L3.604 1.014a1.9 1.9 0 01.8.237zm11.18 17.498L4.404 25.2a1.9 1.9 0 01-.8.237l9.335-9.335 2.645 2.647zM16.312 8.1l3.08 1.777c.95.549.95 1.697 0 2.246l-3.08 1.777L13.498 12l2.814-3.9z"/>
            </svg>
            Google Play
          </a>
          <a
            href="https://apps.apple.com/in/app/cred-credit-card-bills-upi/id1276566587"
            target="_blank"
            rel="noopener noreferrer"
            className="store-badge"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
        </div>

        <div className="download-divider">
          <span>or</span>
        </div>

        <form className="download-sms-form" onSubmit={handleSendLink}>
          <p className="form-label-text">send download link via SMS</p>
          <div className="form-input-wrap">
            <span className="form-prefix">+91</span>
            <input
              type="tel"
              className="form-input"
              placeholder="9876543210"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            />
          </div>
          <button type="submit" className="form-button form-button--outline">
            send link →
          </button>
        </form>

        <div className="download-qr">
          <div className="qr-placeholder">
            <svg viewBox="0 0 100 100" width="100" height="100">
              <rect x="5" y="5" width="25" height="25" rx="3" fill="#fff"/>
              <rect x="8" y="8" width="19" height="19" rx="2" fill="#0a0a0a"/>
              <rect x="11" y="11" width="13" height="13" rx="1" fill="#fff"/>
              <rect x="70" y="5" width="25" height="25" rx="3" fill="#fff"/>
              <rect x="73" y="8" width="19" height="19" rx="2" fill="#0a0a0a"/>
              <rect x="76" y="11" width="13" height="13" rx="1" fill="#fff"/>
              <rect x="5" y="70" width="25" height="25" rx="3" fill="#fff"/>
              <rect x="8" y="73" width="19" height="19" rx="2" fill="#0a0a0a"/>
              <rect x="11" y="76" width="13" height="13" rx="1" fill="#fff"/>
              <rect x="35" y="5" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="48" y="5" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="35" y="18" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="57" y="18" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="35" y="35" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="48" y="35" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="5" y="48" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="18" y="35" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="70" y="48" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="83" y="35" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="48" y="48" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="70" y="70" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="83" y="70" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="70" y="83" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="48" y="70" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="35" y="83" width="8" height="8" rx="1" fill="#fff"/>
              <rect x="57" y="57" width="8" height="8" rx="1" fill="#fff"/>
            </svg>
          </div>
          <p className="qr-text">scan to download</p>
        </div>
      </div>
    </Modal>
  );
}
