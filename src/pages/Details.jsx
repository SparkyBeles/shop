import { useState } from "react";
import Menu from "../components/Menu";
import "../css/Details.css";
import { useLocation} from "react-router";

import Buttons from "../components/Buttons";

function Details() {
  const [isZoomed, setIsZoomed] = useState(false);

  const zooming = () => {
    setIsZoomed(!isZoomed);
  };

  const location = useLocation();
  const { item } = location.state || {};

  console.log(item);

  if (!item) {
    return <div> No movie...</div>;
  }

  return (
    <div className="full-screen">
      <div className="movie">
        {item ? (
          <>
            <div className="movie-poster">
              {item.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  onClick={zooming}
                />
              ) : null}
            </div>

            <div className="movie-info">
              <h1>
                {item.title || "No title available"} (
                {item.release_date?.slice(0, 4) ||
                  item.first_air_date?.slice(0, 4)}
                )
              </h1>
              <p>
                {item.overview?.slice(0, 400) || "No description available"}{" "}
              </p>

              <h2> Price: {item.price} kr </h2>

            <div className="buy-buttons">
              
                <Buttons
                  id={item.id}
                  poster={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  title={item.title}
                  price={item.price}
                />
             </div>
            </div>
          </>
        ) : (
          <p>Loading movie...</p>
        )}
      </div>

      {isZoomed === true ? (
        <div className="overlay" onClick={zooming}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            className="zoomed-img"
          />
        </div>
      ) : null}
    </div>
  );
}

export default Details;
