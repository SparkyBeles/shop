function MovieListCard() {

    return (
        <>
        <div class="movie_list_card">
            <img class="poster_grid" src="src/assets/react.svg" />
            <span class="movie_grid_title">Movie title</span>
            <span class="movie_grid_price">€29</span>
        <div class="movie_list_buttons">
            <button class="add_to_cart">+</button>    
        </div>
        </div>
        </>
    )
}

export default MovieListCard;