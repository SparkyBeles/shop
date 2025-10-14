import { Link } from "react-router";
import CartTotalItems from "./CartTotalItems";

const Header = ({onCartClick}) => {


    return (
        <section className="header">
            
            <span id="logo">Movieshop</span>
            
            <section className="cart-plus-total">

            <img className="cart_icon"
             src="/cart.png"
             onClick={onCartClick}
             ></img>
            <CartTotalItems></CartTotalItems>

             </section>


           
        </section>
    )
}

export default Header;