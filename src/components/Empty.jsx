import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import "./empty.css"

const Empty = () => {
    return (
        <div className="empty--cart">
            <FontAwesomeIcon className="cart--icon" icon={faCartShopping} />
            <p>Your cart is empty</p>
        </div>
    )
}

export default Empty