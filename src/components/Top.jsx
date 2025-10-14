import { Link } from "react-router";

const Header = ({onCartClick}) => {


    return (
        <section className="header">
            
            <span id="logo">Movieshop</span>
            
            <img className="cart_icon"
             src="/cart.png"
             onClick={onCartClick}
             
             ></img>
           
        </section>
    )
}

export default Header;