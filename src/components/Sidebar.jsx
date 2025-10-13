import { useEffect } from "react";
import "../css/Sidebar.css";
import { Link } from "react-router";

function Sidebar({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`sidebar ${open ? "is-open" : ""}`}
      aria-hidden={!open}
    >

      <button className="close-btn" onClick={onClose}> x </button>
      {children}
      


      </div>
  );
}

export default Sidebar;
