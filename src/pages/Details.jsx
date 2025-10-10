import { useState } from "react";
import Menu from "../components/Menu";
import "../css/Details.css";
import { useLocation, useNavigate } from "react-router";

function Details() {
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/Checkout");
  };

  const [isZoomed, setIsZoomed] = useState(false);

  const zooming = () => {
    setIsZoomed(!isZoomed);
  };

  const location = useLocation();
  const { item } = location.state || {};

  console.log(item)

  if(!item) {
    return <div> No movie...</div>

  }

  return (
    <div className="full-screen">
      

      <div className="movie">
        {item ? (
          <>
            <div className="movie-poster">
              {item.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  onClick={zooming}
                />
              )}
            </div>

            <div className="movie-info">
              <h1>
                {item.title || "No title available"} ({item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4)}){" "}
              </h1>
              <p>{item.overview?.slice(0, 400) || "No description available" } </p>

              <h2> Price: €29</h2>

              <div className="buy-buttons">
                {/* add to cart, cart-icon change number of items it has */}
                <button>Add to cart</button>
                {/* Buy now, adds to cart and navigate to check out. */}
                <button id="buy-now-btn" onClick={goToCheckout}>
                  Buy now
                </button>
              </div>
            </div>
          </>
        ) : (
          <p>Loading movie...</p>
        )}
      </div>

      {isZoomed && (
        <div className="overlay" onClick={zooming}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            className="zoomed-img"
          />
        </div>
      )}
    </div>
  );
}

export default Details;
