import React from 'react'
import './ComCard.css'
import { FaShoppingCart } from "react-icons/fa";


const CommonCard = ({img,style}) => {
    return (
        <div>
            <div className="card">
                <div className="headTitile mt-4">
                    <h5 className='ms-2'>Nike Air</h5>
                </div>
                <div className="cardPara ms-2">
                    <p>GORE-TEX AIR FORCE <br />
                    HIGH WTR 'PHANTOM' <br />
                     $30
                    </p>
                </div>
                <div className="cardPara ms-4">
                    <img src={img} alt="" style={style}/>
                </div>
                <div className="cardCart">
                    <FaShoppingCart/>
                </div>
            </div>
    
        </div>
    )
}

export default CommonCard
