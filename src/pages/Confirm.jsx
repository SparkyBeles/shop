import React from "react";
import { useLocation, Link } from "react-router-dom";
import Menu from "../components/Menu";
import "../CSS/Confirm.css"; 

function Confirm() {
  const location = useLocation();
  const orderNumber =
    location.state?.orderNumber || Math.floor(100000 + Math.random() * 900000);

  return (
    <>
      <Menu />
      <div className="confirm-container">
        <h1>Tack för din beställning!</h1>
        <p>Din order har bekräftats.</p>
        <h2>
          Ordernummer: <strong>{orderNumber}</strong>
        </h2>

        <Link to="/" className="confirm-button">
          Tillbaka till startsidan
        </Link>
      </div>
    </>
  );
}

export default Confirm;

