import { Link } from "react-router";
import "../css/Menu.css";

function Menu({toggleSideMenu}) {


    return (
        <div className="menu">

            <img src="./menu.svg" alt="menu" 
            onClick={toggleSideMenu}/>

            <Link to="/">
            <h2>Home</h2>
            </Link>
            
            <Link to="/details">
            <h2>Details</h2>
            </Link>

            <Link to="/cart">
            <h2>Cart</h2>
            </Link>

            <Link to="/checkout">
            <h2>Checkout</h2>
            </Link>

            <Link to="/confirm">
            <h2>Confirm</h2>
            </Link>

        </div>
    )
} 

export default Menu;