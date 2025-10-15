import { NavLink } from "react-router";
import "../css/SideMenu.css";
import { movieGenreList, tvGenreList } from "../api/genreMaps";

const SideMenu = ({
  isOpen,
  toggleSideMenu,
  onGenreSelect,
  onPopularSelect,
}) => {
  const handleGenreClick = (mediaType, category) => {
    onGenreSelect(mediaType, category);
    toggleSideMenu();
  };

  const handlePopularClick = (searchWord) => {
    onPopularSelect(searchWord);
    toggleSideMenu();
    console.log("fetching.........");
  };

  return (
    <>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <nav>
          <button id="close-btn" onClick={toggleSideMenu}>
            X
          </button>

          <h3>Movieshop</h3>

<div className="about-container">
          <button
            className="top-rated-button"
            onClick={() => handlePopularClick("top_rated")}
          >
            Top rated movies
          </button>
          <button
            className="top-rated-button"
            onClick={() => handlePopularClick("popular")}
          >
             Popular movies
          </button>
          </div>

          <div className="category-conatiner">
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
