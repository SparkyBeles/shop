import { useNavigate } from "react-router-dom";

import Menu from "../components/Menu";
import "../css/Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/cart");
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    navigate("/confirm");
  };

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-summary">
          <p>
            <strong>Your cart:</strong> 4 items
          </p>
          <p>
            <strong>Total:</strong> 100kr
          </p>
        </div>

        <form className="checkout-form" onSubmit={handlePurchase}>
          <h3>Ship to:</h3>

          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Address" required />

          <div className="row">
            <input type="text" placeholder="Zip-code" required />
            <input type="text" placeholder="City" required />
          </div>

          <select required>
            <option value="">Country</option>
            <option value="se">Sweden</option>
            <option value="no">Norway</option>
            <option value="fi">Finland</option>
            <option value="dk">Denmark</option>
          </select>

          <hr />

          <input type="text" placeholder="Credit card-number" required />
          <input type="text" placeholder="Name on card" required />

          <div className="row">
            <input type="text" placeholder="Valid through" required />
            <input type="text" placeholder="Security code" required />
          </div>

          <div className="checkout-buttons">
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="purchase-btn">
              Make Purchase!
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Checkout;
