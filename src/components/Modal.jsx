import "./modal.css"
import delivery from "../../delivery.png"
import Loader from "./Loader"
import { useEffect, useState } from "react"

const Modal = (props) => {
    const [ showLoader, setShowLoader ] = useState(true);
    const { setLoader,  reset } = props;

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(!showLoader);
        }, 1500)
    }, [])

    const handleClick = () => {
        setLoader(prev => !prev);
        reset();
    }

    return (
        <div className="modal">
            <div className="modal--box">
                {
                    showLoader ? <Loader></Loader> : 
                    (
                        <>
                            <div className="modal--img">
                            <img src={delivery} alt="" />
                            </div>
                            <p>Please wait for your product(s) to be delivered</p>
                            <div className="modal--button">
                                <button onClick={handleClick} >OK</button>
                            </div>
                        </>
                    )
                }
                
            </div>
        </div>
    )
}

export default Modal