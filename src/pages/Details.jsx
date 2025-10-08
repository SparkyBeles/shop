import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import '../css/Details.css'; 
import { useNavigate } from "react-router";

function Details() {

    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/Checkout');
    }

    const [movie, setMovie] = useState();

    const APIKey = import.meta.env.VITE_API_KEY
    const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=Troy`

    useEffect(() => {

        const fetchMovie = async () => {
            const response = await fetch(apiURL);
            const movieData = await response.json();

            const foundMovie = movieData.results.find(m => m.title === "Troy"); 
            setMovie(foundMovie);

        }

        fetchMovie()
        console.log('Fetch work...')

    }, [apiURL]);

  return (

    <>
      <Menu></Menu>

      <div className="movie">

        {movie ? (
            <>
         <div className="movie-poster">

            {movie.poster_path && (

                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            )}
        </div>
        <div className="movie-info">


          <h1>{movie.title}  ({movie.release_date?.slice(0 , 4) }) </h1>
          <p>{movie.overview?.slice(0 , 400)} </p>

          <h2> €29</h2>

          <div className="buy-buttons">
          

          {/* add to cart, cart-icon change number of items it has */}
          <button>Add to cart</button> 
          {/* Buy now, adds to cart and navigate to check out. */}
          <button id="buy-now-btn" onClick={goToCheckout}>Buy now</button>
          </div>
          
           
        </div>
           </>
        ) : (
            <p>Laddar...</p>
        )
    }

       
      </div>
    
    </>
    
  );
}

export default Details;
