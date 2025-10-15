import { useSelector } from "react-redux";

function CartTotalItems () {
    
    const cartTotalItems = useSelector(state =>
        state.cart.value.reduce((total, item) => total + item.quantity, 0)
    )

    return (
        <div className="cart-total-items-bg">

        <span className="cart-total-items">
            {cartTotalItems}
        </span>
        </div>
    )
}

export default CartTotalItems;