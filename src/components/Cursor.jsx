import { useEffect, useRef } from "react";

// ─── Cursor Component ───────────────────────────────────────────────────────
// Custom cursor with a dot and ring that follows the mouse.
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (dotRef.current) { dotRef.current.style.left = e.clientX + "px"; dotRef.current.style.top = e.clientY + "px"; }
      if (ringRef.current) {
        setTimeout(() => { ringRef.current.style.left = e.clientX + "px"; ringRef.current.style.top = e.clientY + "px"; }, 60);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div className="cursor">
      <div ref={dotRef} className="cursor-dot" style={{ position: "fixed" }} />
      <div ref={ringRef} className="cursor-ring" style={{ position: "fixed" }} />
    </div>
  );
}
