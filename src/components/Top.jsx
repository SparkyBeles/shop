import { Link } from "react-router";

const Header = () => {


    return (
        <section className="header">
            
            <span id="logo">Movieshop</span>
            <Link to="/cart">
            <img className="cart_icon" src="src/assets/cart.png"></img>
            </Link>
        </section>
    )
}

export default Header;