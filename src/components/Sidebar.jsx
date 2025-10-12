import { useEffect } from "react";
import "../css/Sidebar.css";
import { useSelector } from "react-redux";
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

  function cartTotal(cart) {
    let sum = 0;
    cart.forEach(cartItem => {
      sum += cartItem.price;
    });
    return sum;
  }

  function removeItem(cart) {
    
  }


  const cart = useSelector((state) => state.cart.value);

  return (
    <div
      className={`sidebar ${open ? "is-open" : ""}`}
      aria-hidden={!open}
    >

      <button className="close-btn" onClick={onClose}> x </button>
      {children}
      

      {cart.map((cartItem, index) => (
        <div className="cart-item-sidebar">
          <div className="moviedetails-sidebar" key={index}>
          <button className="remove" onClick={removeItem}>–</button>
          <img src={cartItem.poster}/>
          <span className="cart-item-title">{cartItem.title}</span>
          </div>
          <span className="cart-item-price">{cartItem.price} kr</span>
        </div>
      ))}

      <div className="cart-total"><b>Total:&nbsp;</b> {cartTotal(cart)} kr
            <Link to= {{
              pathname: '/checkout',
              state: { sum: cartTotal(cart) }
              }}>
            <button className="buy_now">
              Checkout
                {/* <img className="cart_button" src="src/assets/coins.png"></img> */}
                 </button>
            </Link>
      </div>
      </div>
  );
}

export default Sidebar;
