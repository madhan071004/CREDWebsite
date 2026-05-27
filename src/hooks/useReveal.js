import { useEffect } from "react";

// ─── useReveal Hook ─────────────────────────────────────────────────────────
// Uses IntersectionObserver to add a "visible" class to elements with
// the "reveal" class when they scroll into view.
export default function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
