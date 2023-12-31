import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './navbar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <p className="name" ><ShoppingBagIcon className="logo" ></ShoppingBagIcon>SHOP BY</p>

            <div className="links">
                <Link to="/" >Shop</Link>
                <Link className="icon" to="/cart"><ShoppingCartIcon ></ShoppingCartIcon></Link>
            </div>
        </div>
    )
}

export default NavBar