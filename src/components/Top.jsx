import { Link } from "react-router";
import CartTotalItems from "./CartTotalItems";
import { useState } from "react";
import SideMenu from "./SideMenu";

const Header = ({onCartClick}) => {

const [sideMenuOpen, setSideMenuOpen] = useState(false);
const toggleSideMenu = () => setSideMenuOpen((prev) => !prev);
const handleGenreSelect = async (mediaType, genreName) => {

const genreId =
    mediaType === "movie"
      ? movieGenreList[genreName]
      : tvGenreList[genreName];
    if (!genreId) return;
    const results = await genreAPI(mediaType, genreId);
    setItems(results ?? []);
    };

const handlePopularSelect = async (searchWord) => {
    if (!searchWord) return;
    const results = await popularAPI(searchWord);
    setItems(results ?? []);
    };
    

    return (
    <section className="header">
        <div className="menu-container">
            <SideMenu 
                isOpen={sideMenuOpen}
                toggleSideMenu={toggleSideMenu}
                onGenreSelect={handleGenreSelect}
                onPopularSelect={handlePopularSelect}
            />
            <img className="menu-image" src="./menu.svg" alt="menu" onClick={toggleSideMenu}/>
        </div>

        <Link to="/">
            <span id="logo">Movieshop</span>
        </Link>
            
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