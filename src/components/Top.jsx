import { Link } from "react-router";

const Header = () => {


    return (
        <section class="header">
            
            <span id="logo">Movieshop</span>
            <Link to="/cart">
            <img class="cart_icon" src="src/assets/cart.png"></img>
            </Link>
        </section>
    )
}

export default Header;