import { Link } from "react-router";

function MovieListCard() {

    return (
        <>
        <div class="movie_list_card">
            <img class="poster_grid" src="src/assets/react.svg" />
            <span class="movie_grid_title">Movie title</span>
            <span class="movie_grid_price">€29</span>
        <div class="movie_list_buttons">
            <button class="add_to_cart">
                <img class="cart_button" src="src/assets/cart.png"></img>
            </button>
            <Link to="/checkout">
            <button class="buy_now">
                <img class="cart_button" src="src/assets/coins.png"></img>
                 </button>
            </Link>
        </div>
        </div>
        </>
    )
}

export default MovieListCard;