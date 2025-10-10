import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { add } from "../features/CartSlice";

function MovieListCard({id, poster, title, price}) {

      const dispatch = useDispatch()
      const addToCart = () => {
        const item = {id, poster, title, price};
        dispatch(add(item));
        console.log(item);
      }

    return (
        <>
        <div className="movie_list_card">
                <div className="movie_card_details">
                    <img className="poster_grid" src={poster} />
                    <span className="movie_grid_title">{title}</span>
                    <span className="movie_grid_price">{price} kr</span>
                </div>
            <div className="movie_list_buttons">
            <button className="add_to_cart" onClick={addToCart}>
                <img className="cart_button" src="src/assets/cart.png"></img>
            </button>
            <Link to="/checkout">
            <button className="buy_now">
                <img className="cart_button" src="src/assets/coins.png"></img>
                 </button>
            </Link>
        </div>
        </div>
        </>
    )
}

export default MovieListCard;