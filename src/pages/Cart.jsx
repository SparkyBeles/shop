import "../css/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../features/CartSlice"; 

function Cart() {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  function cartTotal(cart) {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }

  return (
    <div>
      <h2>Cart Items:</h2>

      {cart.map((cartItem, index) => (
        <div className="cart-item-sidebar" key={index}>
          <div className="moviedetails-sidebar">
            <button 
              className="remove" 
              onClick={() => dispatch(remove(cartItem.id))}
            >
              –
            </button>
            <img src={cartItem.poster} />
            <span className="cart-item-title">{cartItem.title}</span>
          </div>
          <span className="cart-item-price">{cartItem.price} kr</span>
        </div>
      ))}

      <div className="cart-total">
        <b>Total:&nbsp;</b> {cartTotal(cart)} kr
        <Link
          to={{
            pathname: "/checkout",
            state: { sum: cartTotal(cart) },
          }}
        >
          <button className="buy_now">Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
