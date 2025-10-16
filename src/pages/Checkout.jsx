
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Menu from "../components/Menu";
import "../css/Checkout.css";

function Checkout() {

    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.value);

    function cartTotal(cart) {
        let sum = 0;
        cart.forEach(item => {
            sum += item.price * (item.quantity || 1);
        });
        return sum;
    }

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
                <strong>Your cart:</strong> {cart.reduce((total, item) => total + (item.quantity || 1), 0)} items
                    </p>
                    <p><strong>Total:</strong> {cartTotal(cart)} kr</p>
                </div>

                <div className="checkout-items">
                    {cart.map((cartItem, index) => (
                        <div className="checkout-item" key={index}>
                            <div className="checkout-item-left">
                            <span className="checkout-item-quantity">
                                x {cartItem.quantity || 1}
                            </span>
                            <img src={cartItem.poster} alt={cartItem.title} />
                            <span className="checkout-item-title">{cartItem.title}</span>
                        </div>

                        <div className="checkout-item-right">
                            <span className="checkout-item-price">
                                {cartItem.price * (cartItem.quantity || 1)} kr
                            </span>
                        </div>
                    </div>
                ))}
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
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={handleCancel}
                        >
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
