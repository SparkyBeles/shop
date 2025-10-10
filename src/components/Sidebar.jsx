import { useEffect } from "react";
import "../css/Sidebar.css";
import { useSelector } from "react-redux";

function Sidebar({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const cart = useSelector((state) => state.cart.value);

  return (
    <div
      className={`sidebar ${open ? "is-open" : ""}`}
      aria-hidden={!open}
    >
      <button className="close-btn" onClick={onClose}> x </button>
      {children}
      {cart.map((cartItem, index) => (
        <div key={index}>
          <img src={cartItem.poster}/>
          <h2>{cartItem.title}</h2>
          <p>{cartItem.price}</p>
          </div>
      ))}
    </div>

  );
}

export default Sidebar;
