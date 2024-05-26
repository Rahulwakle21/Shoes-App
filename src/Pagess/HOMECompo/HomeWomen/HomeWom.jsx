import React from 'react'
import './HomeWom.css'
import CommonCard from '../../../common/CommonCard'
import MenShoe1 from '../../../imaggess/nike-dunk-high-university-red-dd1399-106_1.webp'
import MenShoe2 from '../../../imaggess/menBuggy.png'
// import WomenShoe2 from '../../../imaggess/womenPink.png'

const HomeWom = () => {
    return (
        <div>
        <div className="container">
            <h2 className='text-center' style={{color:"white"}}>FOR Women</h2>
            <div className="row py-5">
                <div className="col-xl-3 col-md-6 col-sm-12 mx-auto  mt-4">
                    <CommonCard img={MenShoe1} style={{width:"70%",height:"30%",marginBottom:"20px",transform: "skewY(-30deg) skewX(30deg)"}}/>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-12 mx-auto  mt-4">
                    <CommonCard img={MenShoe2} style={{width:"70%",height:"30%",marginBottom:"20px",transform: "skewY(-30deg) skewX(30deg)"}}/>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-12 mx-auto  mt-4">
                    <CommonCard img={MenShoe2} style={{width:"70%",height:"20%",marginBottom:"20px",transform: "skewY(-20deg) skewX(20deg)"}}/>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-12 mx-auto  mt-4">
                    <CommonCard img={MenShoe2} style={{width:"70%",height:"30%",marginBottom:"20px",transform: "skewY(-30deg) skewX(30deg)"}}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomeWom
