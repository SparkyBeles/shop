import Grid from "../components/Grid";
import '../css/home.css'
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import tmdbAPI from "../api/tmdbAPI";
import "../css/Home.css";
import MovieCard from "../components/MovieCard";

const ImgBase = "https://image.tmdb.org/t/p/w342";
function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await tmdbAPI();
      setItems(data ?? []);
    })();
  }, []);

return(
    <>
    <Grid />
    </>
);
  return (
    <section>
      <Menu />

      <section className="movie-container">
        <div className="movie-grid">
          {items.map((item) => (
            <MovieCard
              key={`${item.type}-${item.id}`}
              poster={item.poster ? `${ImgBase}${item.poster}` : ""}
              title={item.title}
              price={Math.floor(Math.random() * 250) + 50}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
export default Home;
