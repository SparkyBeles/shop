import { useLocation, Link } from "react-router-dom";
import "../css/Confirm.css";

/**
 * Render a confirmation page showing a Swedish order confirmation and an order number.
 *
 * The component reads an `orderNumber` from location.state if present; otherwise it
 * generates a six-digit fallback number between 100000 and 999999.
 *
 * @returns {JSX.Element} The confirmation UI containing the order number and a link back to the home page.
 */
function Confirm() {
  const location = useLocation();
  const orderNumber =
    location.state?.orderNumber || Math.floor(100000 + Math.random() * 900000);

  return (
    <>
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