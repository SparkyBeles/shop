import { Link } from "react-router";
import MovieListCard from "./MovieListCard";

function Grid() {

    return (
        <section class="grid">
            <Link to="/details">
            <MovieListCard /></Link>
        </section>
    )
}

export default Grid;