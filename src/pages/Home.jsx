import { useEffect, useState } from "react";
import tmdbAPI from "../api/tmdbAPI";
import "../css/Home.css";
import SideMenu from "../components/SideMenu";

import MovieListCard from "../components/MovieListCard";
import { Link } from "react-router";


const ImgBase = "https://image.tmdb.org/t/p/w342";

function Home() {
  const [items, setItems] = useState([]);

  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleSideMenu = () => setSideMenuOpen((prev) => !prev);

  useEffect(() => {
    (async () => {
      const data = await tmdbAPI();
      setItems(data ?? []);
    })();
  }, []);

  return (

    <section>
      <SideMenu isOpen={sideMenuOpen} toggleSideMenu={toggleSideMenu} />

      <img src="./menu.svg" alt="menu" onClick={toggleSideMenu} />

      <section className="movie-grid">

          {items.map((item) => (
            <Link 
            key={item.id}
              to= "/details"
              state= {{ item}}
              
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
