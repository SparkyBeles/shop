import { useEffect, useState } from "react";
import tmdbAPI from "../api/tmdbAPI";
import "../css/Home.css";
import SideMenu from "../components/SideMenu";
import MovieListCard from "../components/MovieListCard";
import { Link } from "react-router";
import searchApi from "../api/searchApi";

const ImgBase = "https://image.tmdb.org/t/p/w342";

function Home() {
  // ======================================================
  //    STATES
  // ======================================================
  const [items, setItems] = useState([]);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const toggleSideMenu = () => setSideMenuOpen((prev) => !prev);

  // =======================================
  // API CALLS
  //========================================

  useEffect(() => {
    (async () => {
      const data = await tmdbAPI();
      setItems(data ?? []);
    })();
  }, []);

  // =======================================
  // EFFECTS
  //========================================

  // live search
  useEffect(() => {
    if (!search || search.trim() === "") {
      (async () => {
        setIsSearching(true);
        const data = await tmdbAPI();
        setItems(data ?? []);
        setIsSearching(false);
      })();
      return;
    }

    // =======================================
    // FUNCTION
    //========================================

    (async () => {
      setIsSearching(true);
      const results = await searchApi(search);
      setItems(results);
      setIsSearching(false);
    })();
  }, [search]);

  // =======================================
  // VIEW
  //========================================

  return (
    <section>
      <SideMenu isOpen={sideMenuOpen} toggleSideMenu={toggleSideMenu} />

      <img src="./menu.svg" alt="menu" onClick={toggleSideMenu} />

      <section className="searchBar">
        <div className="search-container">
          <input
            type="search"
            placeholder="Search for movies,series or actor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

        </div>
        </section>

      <section className="movie-grid">
        {items.map((item) => (
          <Link
            to={{
              pathname: "/details",
              state: { id: item.id },
            }}
          >
            <MovieListCard
              key={`${item.type}-${item.id}`}
              poster={item.poster ? `${ImgBase}${item.poster}` : ""}
              title={item.title}
              price={Math.floor(Math.random() * 250) + 50}
            />
          </Link>
        ))}
      </section>
    </section>
  );
}

export default Home;
