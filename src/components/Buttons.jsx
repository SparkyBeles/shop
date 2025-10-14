import { useDispatch, useSelector } from "react-redux";
import { add, toggle, remove } from "../features/CartSlice";
import { useEffect } from "react";
import Quantity from "./Quantity";
import { useNavigate } from "react-router";

function Buttons({id, poster, title, price}) {
    
      const dispatch = useDispatch();
      const navigate = useNavigate();

const isAdded = useSelector((state) => state.cart.items[id] || false);

      const addToCart = (id, poster, title, price) => {
        const item = {id, poster, title, price};
        dispatch(add(item));
        dispatch(toggle(id));
      }

      const buyItNow = (id, poster, title, price) => {
        const item = {id, poster, title, price};
        dispatch(add(item));
        navigate('/checkout', {state: {item: item } });
        dispatch(toggle(id));
      }

      const removeItem = (id) => {
        dispatch(remove(id));
        // dispatch(toggle(id));
      }


return (
     <div className="movie_list_buttons">

            <button className={isAdded ? 'added' : 'add_to_cart'} onClick={(e) => 
            {
            
            e.preventDefault();
            e.stopPropagation();
            addToCart( id, poster, title, price );            
            }}>
              <img className="cart_button" src="/cart.png"/>
              </button>

            <Quantity id={id}></Quantity>

            <button className={isAdded ? 'remove' : 'button_hidden'} onClick={(e) => 
            {
            e.preventDefault();
            e.stopPropagation();
            removeItem(id);
            }}>
              <img className="cart_button" src="/remove.png"/>
              </button>
            <button className={isAdded ? 'button_hidden' : 'buy_now'} onClick={(e) =>
            {
            e.preventDefault();
            e.stopPropagation();
            buyItNow( id, poster, title, price );
            }}>
                <img className="cart_button" src="/coins.png"></img>
                 </button>
    </div>
    
)
}

export default Buttons;