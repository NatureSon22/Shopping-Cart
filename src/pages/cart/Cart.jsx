import CartPayment from "./CartPayment"
import CartSummary from "./CartSummary"
import './cart.css'

const Cart = () => {
    return (
        <div className="cart">
            <CartSummary></CartSummary>
            <CartPayment></CartPayment>
        </div>
    )
}

export default Cart