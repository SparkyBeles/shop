import { useSelector } from "react-redux";

function Quantity({id}) {

    const isAdded = useSelector((state) => state.cart.items[id]);

  const itemInCart = useSelector((state) => 
    state.cart.value.find((item) => item.id === id)
);

const itemAmount = itemInCart?.quantity ?? 0;

console.log(itemAmount)

    return (
        <span className={isAdded ? 'amount' : 'amount_hidden'}>{itemAmount}</span>
    )
}

export default Quantity;

