import React, { useState } from 'react'
import './CustomReview.css'
import { FaStar, FaUserCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import RatingSec from './RatingSec';
import Fedback from './Fedback';
import { Button } from 'react-bootstrap';

const CustomReview = ( ) => {
   
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <div className="customerReview">
                <h3>Top Reviews</h3>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Add Your Review 
               </Button>

      <Fedback
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                <div className="users mt-4">
                    <p><FaUserCircle className='userIcon'/> <span className='ms-3'>Sonia Pal</span></p>
                    <p><span className='rateCon'><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></span> <span> <b className='text-danger'>Awesome Purchase</b></span></p>
                    <p style={{color:"gray"}}>Reviewed in India on 17 November 2023 <br />
                        Size: 3uk  Colour: White/Navy <span className='text-danger'>Verified Purchase</span></p>
                        <p>I really liked the design and quality. Although the shoe was little loose but they Didn't have any other smaller size available . But still I am satisfied with the purchase. I am using the shoes from past few months and its very comfortable and soft from the bottom.</p>
                </div>
                <div className="users mt-4">
                    <p><FaUserCircle className='userIcon'/> <span className='ms-3'>SPithuiliu IDl</span></p>
                    <p><span className='rateCon'><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></span> <span> <b className='text-danger'> Very Nice and very cozy</b></span></p>
                    <p style={{color:"gray"}}>Reviewed in India on 17 November 2023 <br />
                        Size: 6UK   Colour: White/Navy <span className='text-danger'>Verified Purchase</span></p>
                        <p>I really liked the design and quality. Although the shoe was little loose but they Didn't have any other smaller size available . But still I am satisfied with the purchase. I am using the shoes from past few months and its very comfortable and soft from the bottom.</p>
                </div>
                <div className="users mt-4">
                    <p><FaUserCircle className='userIcon'/> <span className='ms-3'>Amit kumar</span></p>
                    <p><span className='rateCon'><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaRegStar/></span> <span> <b className='text-danger'> Very Nice and very cozy</b></span></p>
                    <p style={{color:"gray"}}>Reviewed in India on 17 November 2023 <br />
                        Size: 6UK   Colour: White/Navy <span className='text-danger'>Verified Purchase</span></p>
                        <p>I really liked the design and quality. Although the shoe was little loose but they Didn't have any other smaller size available . But still I am satisfied with the purchase. I am using the shoes from past few months and its very comfortable and soft from the bottom.</p>
                </div>
                <div className="users">
                  
                </div>
            </div>
        </div>
    )
}

export default CustomReview
