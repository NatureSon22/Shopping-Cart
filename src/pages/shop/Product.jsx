import { useShopContextProvider } from "../../context/ShopContextProvider";

const Product = (props) => {
    const { id, productName, price, img } = props.data;
    const { addItem, cartItems } = useShopContextProvider();

    return (
        <div className="product">
            <div className="product--img">
                <img src={img} alt={productName} />
            </div>
            
            <div className="product--action">
                <div className="product--info">
                    <h2>{productName}</h2>
                    <p>{`$${price}`}</p>
                </div>

                <button className="add-btn" onClick={() => addItem(id )}>
                    Add Item
                    {
                        cartItems[id] > 0 && <span className="item-count" >: { cartItems[id] }</span>
                    }
                </button>
            </div>
        </div>
    )
}

export default Product