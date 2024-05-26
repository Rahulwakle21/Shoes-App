import React from 'react'
import './HomeAbout.css'
import ShoeAbout from '../../../imaggess/nike-dunk-high-university-red-dd1399-106_1.webp'

const Homebout = () => {
    return (
        <div>
            <div className="container">
                <div className=" row hoomeAboutMain">
                <div className=" col-md-6 m-auto aboutContent">
                    <p style={{color:"#D90D0A"}}>ABOUT US</p>
                    <h1>ELEVATE YOUR <br /> LOOK WITH 
                        <span style={{color:"#D90D0A"}}>SHOES</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti <br /> ex possimus saepe sit reiciendis, perferendis pariatur tempora id.</p>
                    <button className='btn me-3'> SHOP NOW </button> <span>LEARN MORE</span>
                </div>

                        <div className=" col-md-6 mx-auto AboutImg">
                            <img src={ShoeAbout} alt="" className='img-fluid'/>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Homebout
