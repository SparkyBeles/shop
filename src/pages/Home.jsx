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
        const data = await tmdbAPI();
        setItems(data ?? []);
      })();
      return;
    }

    // ======================================
    // FUNCTION
    //=======================================

    (async () => {
      const results = await searchApi(search);
      setItems(results);
    })();
  }, [search]);

  // ======================================
  // VIEW
  //=======================================

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


          {items.map((item) => (
            <Link 
            key={item.id}
              to= "/details"
              state= {{ item}}
              
              >

            <MovieListCard
              id={item.id}
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
