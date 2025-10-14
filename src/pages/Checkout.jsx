import { useNavigate } from "react-router";
import "../css/Checkout.css";
import { useState } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/Add To Cart Success.json";
import { useRef } from "react";

function Checkout() {
  const navigate = useNavigate();
  const lottieRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCancel = () => {
    navigate("/cart");
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    setIsPlaying(true);
    requestAnimationFrame(() => {
      lottieRef.current?.stop();
      lottieRef.current?.play();
    });

    setTimeout(() => {
      navigate("/confirm");
    }, 1500);
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
        {isPlaying && (
          <div className="load-ani">
            <Lottie
              lottieRef={lottieRef}
              animationData={loaderAnimation}
              loop={false}
              autoPlay={false}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
