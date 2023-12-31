import { useShopContextProvider } from "../../context/ShopContextProvider"
import { PRODUCTS } from "../../data";
import Empty from "../../components/Empty";
import ItemSummary from "./ItemSummary";
import { Link } from 'react-router-dom'

const CartSummary = () => {
    const { cartItems } = useShopContextProvider();
    const length = Object.values(cartItems).filter((val) => val > 0).length;

    return (
        <div className="cart--summary">
            <div className="summary--heading">
                <h2>Shopping Cart</h2>
                <p>{`${length} items`}</p>
            </div>

            <div className="summary--items">
                <div className="summary-headings">
                    <p>product details</p>
                    <p>quantity</p>
                    <p>price</p>
                    <p>total</p>
                </div>

                <div className="items--list">  
                    {
                        length == 0 ? <Empty></Empty> : PRODUCTS.map((info, idx) => cartItems[idx + 1] > 0 && <ItemSummary key={idx} info={info} quantity={cartItems[idx + 1]} ></ItemSummary> )
                    }
                </div>
            </div>

            <div className="back--btn">
                <Link className="link" to="/" >
                    <span className="link--icon" >&#10229;</span> Continue Shopping
                </Link>
            </div>
        </div>
    )
}

export default CartSummary