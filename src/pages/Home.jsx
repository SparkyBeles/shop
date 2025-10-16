import { useEffect, useState } from "react";
import tmdbAPI from "../api/tmdbAPI";
import "../css/Home.css";
import MovieListCard from "../components/MovieListCard";
import { Link, useOutletContext } from "react-router";
import searchApi from "../api/searchApi";

const ImgBase = "https://image.tmdb.org/t/p/w342";

function Home() {
  // ======================================================
  //    STATES
  // ======================================================
  // const [items, setItems] = useState([]);

  const { items, setItems } = useOutletContext();


  const [search, setSearch] = useState("");


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
