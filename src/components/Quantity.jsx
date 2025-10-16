import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../features/CartSlice";

function Quantity({id}) {

    const isAdded = useSelector((state) => state.cart.items[id]);
    const dispatch = useDispatch();
    
    const itemInCart = useSelector((state) => 
        state.cart.value.find((item) => item.id === id)
        );
        const itemAmount = itemInCart?.quantity ?? 0;

    function increaseAmount (id) {
        dispatch(increaseQuantity(id));
    }
    function decreaseAmount (id) {
        dispatch(decreaseQuantity(id))
    }

    return (
        <div className="quantity">
            <img className={isAdded ? 'arrow' : 'arrow_hidden'} src="arrow_up.png" onClick={(e) => 
            {
            e.preventDefault();
            e.stopPropagation();
            increaseAmount(id);
            }} />
            <span className={isAdded ? 'amount' : 'amount_hidden'}>{itemAmount}</span>
            <img className={isAdded ? 'arrow' : 'arrow_hidden'} src="arrow_down.png" onClick={(e) => 
            {
            e.preventDefault();
            e.stopPropagation();
            decreaseAmount(id);
            }} />
        </div>
    )
}

export default Quantity;

