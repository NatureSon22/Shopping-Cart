import { PRODUCTS } from '../../data'
import Product from './Product'
import './shop.css'

const Shop = () => {
    return (
        <div className="shop">
            <div className="shop--info">
                <h1>Fresh Finds Await You!</h1>
                <p>Your one-stop destination for the freshest items on the market</p>
            </div>

            <div className="products">
                {
                    PRODUCTS.map((product, key) => <Product key={key} data={product} ></Product> )
                }
            </div>
        </div>
    )
}

export default Shop