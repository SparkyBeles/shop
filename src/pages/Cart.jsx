import "../css/Cart.css"
import { useSelector } from "react-redux";
import { Link } from "react-router";


function Cart() {

    const cart = useSelector((state) => state.cart.value);

    function cartTotal(cart) {
        let sum = 0;
        cart.forEach(cartItem => {
        sum += cartItem.price;
        });
        return sum;
    }

    return (
        <div><h2>Cart Items:</h2>
       
              {cart.map((cartItem, index) => (
                  <div className="cart-item-sidebar">
          <div className="moviedetails-sidebar" key={index}>
          <button className="remove"><img class="remove_button" src="public/remove.png"/></button>
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
                 </button>
            </Link>
      </div>
      </div>
    )
}

export default Cart;