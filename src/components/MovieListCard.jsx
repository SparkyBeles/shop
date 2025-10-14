import Buttons from "./Buttons";

function MovieListCard({id, poster, title, price, quantity}) {
console.log(quantity)
    return (
        <>
        <div className="movie_list_card">
                <div className="movie_card_details">
                    <img className="poster_grid" src={poster} />
                    <span className="movie_grid_title">{title}</span>
                    <span className="movie_grid_price">{price} kr</span>
                </div>
<span>{quantity}</span>
        <Buttons id={id} poster={poster} title={title} price={price}></Buttons>
        </div>
        </>
    )
}

export default MovieListCard;