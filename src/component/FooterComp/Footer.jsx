import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GiLoveSong } from "react-icons/gi";
import './Footer.css'
import SearchBox from '../../common/SearchBox';
import { FaSearch } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
                <div className="container mt-5">
                    <div className="footerHead">
                        <div className="footLogo">
                            <h2>SNEA<span style={{color:"#D90D0A"}}>KISS</span></h2>
                        </div>

                        <div className="footLink">
                            <ul>
                                <li>Home</li>
                                <li>MEN</li>
                                <li>WOMEN</li>
                                <li>COLLECTION</li>
                                <li>CONTACT US</li>
                            </ul>
                        </div>

                        <div className="footMedia">
                            <span><FaFacebookSquare/> </span>
                            <span><FaInstagram/> </span>
                            <span><GiLoveSong/> </span>
                        </div>
                    </div>
                    <hr  style={{color:"white"}}/>
                    <div className="searcBox py-4" style={{display:"flex" , justifyContent:"center"}}>
                       <div className='searchIng'>
                         <SearchBox para="search here" icon={<FaSearch/>} style={{display:"flex", justifyContent:"space-between",color:"white"}}
                         
                         />
                       </div>
                    </div>
                    <hr  style={{color:"white" }}/>

                    <p style={{color:"white"}} className='text-center pb-3'>Lorem ipsum dolor sit amet consectetur 2024 @Rahul adipisicing elit. Odit, commodi.</p>
                </div>
        </div>
    )
}

export default Footer
