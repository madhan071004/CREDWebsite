import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ message, isVisible, onDismiss, type = "success" }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => onDismiss(), 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onDismiss]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`toast toast--${type}`}
          initial={{ opacity: 0, y: 60, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 60, x: "-50%" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="toast-icon">
            {type === "success" ? "✓" : type === "error" ? "✕" : "ℹ"}
          </span>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
