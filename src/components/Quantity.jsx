import { useSelector } from "react-redux";

function Quantity({id}) {

    const isAdded = useSelector((state) => state.cart.items[id]);
    
    const itemInCart = useSelector((state) => 
        state.cart.value.find((item) => item.id === id)
        );
        const itemAmount = itemInCart?.quantity ?? 0;

    function increaseAmount (amount) {
    console.log("increase");
}
    function decreaseAmount (amount) {
    console.log("decrease");
    }


console.log(itemAmount)

    return (
        <div className="quantity">
            <img className="arrow" src="arrow_up.png" onClick={(e) => 
            {
            e.preventDefault();
            e.stopPropagation();
            increaseAmount();
            }} />
            <span className={isAdded ? 'amount' : 'amount_hidden'}>{itemAmount}</span>
            <img className="arrow" src="arrow_down.png" onClick={(e) => 
            {
            e.preventDefault();
            e.stopPropagation();
            decreaseAmount();
            }} />
        </div>
    )
}

export default Quantity;

