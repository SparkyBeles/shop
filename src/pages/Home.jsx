import { useEffect, useState } from "react";
import tmdbAPI from "../api/tmdbAPI";
import "../css/Home.css";
import MovieListCard from "../components/MovieListCard";
import { Link } from "react-router";

const ImgBase = "https://image.tmdb.org/t/p/w342";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await tmdbAPI();
      setItems(data ?? []);
    })();
  }, []);

  return (
      <section className="movie-grid">
          {items.map((item) => (
            <Link to= {{
              pathname: "/details",
              state: { id: item.id }
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
  );
}
export default Home;
