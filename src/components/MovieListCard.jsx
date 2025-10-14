import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { add, toggle } from "../features/CartSlice";

function MovieListCard({id, poster, title, price}) {

      const dispatch = useDispatch();
      const navigate = useNavigate();
    const isAdded = useSelector((state) => state.cart.items[id]);
      

      const addToCart = () => {
        const item = {id, poster, title, price};
        dispatch(add(item));
      }

      const buyItNow = () => {
        const item = {id, poster, title, price};
        dispatch(add(item));
        navigate('/checkout', {state: {item: item } });
      }

      const addClick = (id) => {
        dispatch(toggle(id));
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
            <button className={`add_to_cart ${isAdded ? 'added' : ''}`} onClick={(e) => 
                {
                    e.preventDefault();
                    e.stopPropagation();
                    addClick(id);
                    addToCart();
                }}>
                    {
                    isAdded ? 
                    <img className="cart_button" src="/remove.png"/> : 
                    <img className="cart_button" src="/cart.png"/>
                    }
                
            </button>
            <button className="buy_now" onClick={(e) =>
            {
            e.preventDefault();
            e.stopPropagation();
            buyItNow();
            }}>
                <img className="cart_button" src="/coins.png"></img>
                 </button>
        </div>
        </div>
        </>
    )
}

export default MovieListCard;