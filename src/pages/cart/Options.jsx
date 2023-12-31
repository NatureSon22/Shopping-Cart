import { SHIPPING } from "../../shipping";

const Options = ({ setShippingFee, total }) => {

    const handleSelect = (e) => {
        const id = e.target.value;
        setShippingFee(id);
    }

    return (
        <select onChange={handleSelect} disabled={total == 0 ? true : false} >
            {
                SHIPPING.map((info, index) => {
                    const { name, price } = info;
                    return (
                        <option key={index} value={index}>{`${name} - $${price.toFixed(2)}`}</option>
                    )
                })
            }
        </select>
    )
}

export default Options;
