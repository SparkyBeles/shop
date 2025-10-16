import { useLocation, Link } from "react-router-dom";
import "../css/Confirm.css";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/CartSlice";

function Confirm() {
        const dispatch = useDispatch();

  const location = useLocation();
  const [orderNumber] = useState(() => {
    return location.state?.orderNumber || Math.floor(100000 + Math.random() * 900000);
  });

  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showConfetti && <Confetti />}

      <div className="confirm-container">
        <div className="checkmark-wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14 27l7 7 16-16"
            />
          </svg>
        </div>

        <h1 className="fade-in">Tack för din beställning!</h1>
        <p className="fade-in delay">Din order har bekräftats.</p>
        <h2 className="fade-in delay">
          Ordernummer: <strong>{orderNumber}</strong>
        </h2>

        <Link to="/" className="confirm-button fade-in delay" >
          <span onClick={dispatch(clearCart)}
          >
            Tillbaka till startsidan
            </span>
        </Link>
      </div>
    </>
  );
}

export default Confirm;

