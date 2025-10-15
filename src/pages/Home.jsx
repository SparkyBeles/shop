import { useEffect, useState } from "react";
import tmdbAPI from "../api/tmdbAPI";
import "../css/Home.css";
import SideMenu from "../components/SideMenu";
import MovieListCard from "../components/MovieListCard";
import { Link } from "react-router";
import searchApi from "../api/searchApi";
import { movieGenreList, tvGenreList } from "../api/genreMaps";
import genreAPI from "../api/genreAPI";
import popularAPI from "../api/popularAPI";

const ImgBase = "https://image.tmdb.org/t/p/w342";

function Home() {
  // ======================================================
  //    STATES
  // ======================================================
  const [items, setItems] = useState([]);

  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

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

  // =======================================
  // Initial  Load
  //========================================

  useEffect(() => {
    (async () => {
      const data = await tmdbAPI();
      setItems(data ?? []);
    })();
  }, []);

  // search
  useEffect(() => {
    if (!search || search.trim() === "") {
      (async () => {
        const data = await tmdbAPI();
        setItems(data ?? []);
      })();
      return;
    }

    (async () => {
      const results = await searchApi(search);
      const mapped = (results ?? []).map((r) => ({
        id: r.id,
        title: r.title || r.name,
        poster: r.poster_path || r.poster, // för listkortet
        poster_path: r.poster_path || r.poster, // för Details om den läser poster_path
        description: r.overview || r.description || "",
        overview: r.overview || r.description || "",
        release_date: r.release_date || r.releaseDate,
        type: r.media_type || r.type || "movie",
      }));
      setItems(mapped);
    })();
  }, [search]);

  // ======================================
  // VIEW
  //=======================================

  return (
    <section>
      <SideMenu
        isOpen={sideMenuOpen}
        toggleSideMenu={toggleSideMenu}
        onGenreSelect={handleGenreSelect}
        onPopularSelect={handlePopularSelect}
      />

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
        {items.map((item) => {
          // set price based on the month they were released.
          // parseInt makes e.g 05 (May) to 5. Then 5 get priced 99 (kr).
          const releaseDate = item.release_date || item.first_air_date;

          const itemMonth = releaseDate
            ? parseInt(releaseDate.slice(5, 7))
            : null;

          let price = 49;

          if (itemMonth >= 4 && itemMonth <= 5) {
            price = 99;
          } else if (itemMonth >= 6 && itemMonth <= 7) {
            price = 149;
          } else if (itemMonth >= 8 && itemMonth <= 9) {
            price = 199;
          } else if (itemMonth >= 10) {
            price = 249;
          }

          return (
            <Link
              key={item.id}
              to="/details"
              state={{ item: { ...item, price } }}
            >
              <MovieListCard
                id={item.id}
                key={`${item.type}-${item.id}`}
                poster={item.poster ? `${ImgBase}${item.poster}` : ""}
                title={item.title}
                price={price}
                quantity={item.quantity}
              />
            </Link>
          );
        })}
      </section>
    </section>
  );
}

export default Home;
