import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

export default function TestimonialsSection() {
  const defaultReviews = [
    {
      text: "this is a great app, paying bills has never been this rewarding. the UI is just incredibly satisfying.",
      author: "Priya Sharma",
      handle: "@priya_s",
      stars: 5
    },
    {
      text: "i love the exclusive rewards. it actually feels like a premium club for paying on time.",
      author: "Rahul Verma",
      handle: "@rahulv",
      stars: 5
    },
    {
      text: "the credit score tracking is so seamless. and the design is out of this world.",
      author: "Ananya Patel",
      handle: "@ananya_p",
      stars: 5
    }
  ];

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('credReviews');
    return saved ? JSON.parse(saved) : defaultReviews;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReviewText, setNewReviewText] = useState("");
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewStars, setNewReviewStars] = useState(5);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('credReviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReviewName.trim().length === 0 || newReviewText.trim().length === 0) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");

    const newReview = {
      text: newReviewText,
      author: newReviewName,
      handle: `@${newReviewName.toLowerCase().replace(/\s+/g, '_')}`,
      stars: newReviewStars
    };

    setReviews([newReview, ...reviews]);
    setSubmitted(true);
    
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
      setNewReviewText("");
      setNewReviewName("");
      setNewReviewStars(5);
    }, 2000);
  };

  return (
    <section className="testimonials-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="testimonials-header"
      >
        <div>
          <span className="section-tag">COMMUNITY</span>
          <h2 className="section-title">what our members say</h2>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="write-review-btn"
        >
          write a review
        </button>
      </motion.div>

      <div className="testimonials-grid">
        {reviews.slice(0, 6).map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="testimonial-card"
          >
            <div>
              <div className="testimonial-stars">
                {"★".repeat(t.stars)}
              </div>
              <p className="testimonial-text">
                "{t.text}"
              </p>
            </div>
            
            <div className="testimonial-author-info">
              <div className="testimonial-avatar">
                {t.author.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="testimonial-author-name">{t.author}</div>
                <div className="testimonial-author-handle">{t.handle}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={submitted ? "" : "write a review"}>
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              onSubmit={handleSubmit}
              className="modal-form"
            >
              <p className="modal-desc">Share your CRED experience with the community.</p>
              
              <div className="form-group">
                <label>your name</label>
                <div className="form-input-wrap">
                  <input
                    type="text"
                    className="form-input"
                    style={{ paddingLeft: "16px" }}
                    placeholder="John Doe"
                    value={newReviewName}
                    onChange={(e) => setNewReviewName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>rating</label>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReviewStars(star)}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        fontSize: '24px', color: star <= newReviewStars ? '#e5b984' : '#333'
                      }}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>your review</label>
                <div className="form-input-wrap">
                  <textarea
                    className="form-input"
                    style={{ paddingLeft: "16px", minHeight: "100px", resize: "vertical" }}
                    placeholder="What do you love about CRED?"
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                  />
                </div>
              </div>

              {error && <p className="form-error">{error}</p>}
              
              <button type="submit" className="form-button">
                submit review →
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="login-success"
            >
              <div className="success-icon">✦</div>
              <h3>thank you</h3>
              <p>your review has been published.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </section>
  );
}
