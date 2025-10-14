import "../css/MovieCard.css";

function MovieCard({ poster, title, price }) {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={poster} alt={title} />
      <h3 className="movie-name">{title}</h3>
      <h5 className="movie-price">{price}</h5>
      <button className="buy-button">Add to cart</button>
    </div>
  );
}
export default MovieCard;
