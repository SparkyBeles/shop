import { useSelector } from "react-redux";
import Buttons from "./Buttons";
import Quantity from "./Quantity";

function MovieListCard({id, poster, title, price, quantity}) {

    return (
        <>
        <div className="movie_list_card">
                <div className="movie_card_details">
                    <img className="poster_grid" src={poster} />
                    <span className="movie_grid_title">{title}</span>
                    <span className="movie_grid_price">{price} kr</span>
                </div>
        <Buttons id={id} poster={poster} title={title} price={price}></Buttons>
        </div>
        </>
    )
}

export default MovieListCard;