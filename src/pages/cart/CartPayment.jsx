import { useState } from "react";
import { useShopContextProvider } from "../../context/ShopContextProvider"
import { PRODUCTS } from "../../data";
import Options from "./Options";
import { SHIPPING } from "../../shipping";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal"

const CartPayment = () => {
    const [ shippingFeeKey, setShippingFee ] = useState(0);
    const [ loader, setLoader ] = useState(false);
    const { cartItems, getDefaultCart, setCartItems } = useShopContextProvider();
    const addedItems = Object.keys(cartItems).filter((val) => cartItems[val] > 0); 
    const length = addedItems.length;
    const total = addedItems.reduce((acc, idx) => {
        return acc + (cartItems[idx] ? cartItems[idx] * PRODUCTS[idx - 1].price : 0);
      }, 0);  
    const overall = total > 0 ? total + SHIPPING[shippingFeeKey].price : 0;

    const reset = () => {
        setCartItems(getDefaultCart());
    }

    const handleLoader = () => {
        setLoader(!loader);
    }
    

    return (
        <div className="cart--payment">
            <div className="summary--heading">
                <h2>Order Summary</h2>
            </div>

            <div className="summary--price">
                <p className="price--num">ITEMS {length}</p>
                <p>${total.toFixed(2)}</p>
            </div>

            <div className="summary--shipping">
                <p>SHIPPING</p>
                <Options setShippingFee={setShippingFee} total={total} ></Options>
            </div>

            <div className="summary--promo" >
                <p>PROMO CODE</p>
                <div className="promo--input">
                    <input type="text" placeholder="Enter your promo code" disabled={ (shippingFeeKey != 5 ) ? true : false } />
                    <button disabled={ (shippingFeeKey != 5 ) ? true : false } >APPLY</button>
                </div>
            </div>

            <div className="summary--total">
                <div className="summary--whole">
                    <p>TOTAL COST</p>
                    <p>${overall.toFixed(2)}</p>
                </div>
                
                <div className="summary--checkout">
                    {
                        loader && <Modal setLoader={setLoader} reset={reset}></Modal>
                    }
                    <button disabled={total == 0 ? true : false} onClick={handleLoader} >CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default CartPayment