import { NavLink } from "react-router";
import "../css/SideMenu.css";
import { movieGenreList, tvGenreList } from "../api/genreMaps";

const SideMenu = ({ isOpen, toggleSideMenu, onGenreSelect }) => {
  const handleGenreClick = (mediaType, category) => {
    onGenreSelect(mediaType, category);
    toggleSideMenu();
  };

  return (
    <>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <nav>
          <button id="close-btn" onClick={toggleSideMenu}>
            X
          </button>

          <h3>Movieshop</h3>

          <NavLink to="/Cart" onClick={toggleSideMenu} className={"nav-button"}>
            Cart
          </NavLink>

          <NavLink
            to="/Checkout"
            onClick={toggleSideMenu}
            className={"nav-button"}
          >
            Checkout
          </NavLink>

          <div>
            <h3>Movies</h3>

            {Object.keys(movieGenreList).map((category) => (
              <button
                key={category}
                className="nav-button-category"
                onClick={() => handleGenreClick("movie", category)}
              >
                {category}
              </button>
            ))}

            <h3>Tv series</h3>

            {Object.keys(tvGenreList).map((category) => (
              <button
                key={category}
                className="nav-button-category"
                onClick={() => handleGenreClick("tv", category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="about-container">
            <NavLink to="/" onClick={toggleSideMenu} className={"nav-button"}>
              About
            </NavLink>
            <NavLink to="/" onClick={toggleSideMenu} className={"nav-button"}>
              FAQ
            </NavLink>
            <NavLink to="/" onClick={toggleSideMenu} className={"nav-button"}>
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
