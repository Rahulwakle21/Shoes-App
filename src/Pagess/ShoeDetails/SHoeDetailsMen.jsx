import React from 'react'
import './ShoeDetailss.css'
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Accordian from './Accordian';
import { shoeData } from '../MENCompo/MenShoeData';
import { FaRegHeart } from 'react-icons/fa';
import ShoeSliderMen from './ShoeSliderMen';
import MenReview from '../MENCompo/MenReview';

const SHoeDetailsMen = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const shoeId = params.get("id");
    const selectedShoe = shoeData[shoeId];
    return (
        <div className="mt-5">
        {selectedShoe && (
          <Container>
            <Row>
              <Col sm={12} md={6} className="stickyy">
                <img src={selectedShoe.img} alt={selectedShoe.title} />
              </Col>
              <Col className="detailSec mx-auto" sm={12} md={6}>
               
                <p>{selectedShoe.title}</p>
                <h1 >{selectedShoe.title2}</h1>
                <p>{selectedShoe.title3}</p>
                <p className="mt-5">MRP: ${selectedShoe.price}</p>
                <p style={{color:"gray"}}>incl. of taxes
                  <br />
                  (Also includes all applicable duties)</p>
  
                  <div className="sizeSec mt-5 ">
                      <div className="sizeHead2">
                          <h5>Select Size </h5> 
                      </div>
                     <div className="sizeMain">
                          <div className="sizeNo">UK 6 (EU 40)</div>
                          <div className="sizeNo">UK 6.5</div>
                          <div className="sizeNo">UK 7</div>
                     </div>
                     <div className="sizeMain">
                          <div className="sizeNo">UK 6 (EU 40)</div>
                          <div className="sizeNo">UK 6.5</div>
                          <div className="sizeNo">UK 7</div>
                     </div>
                     <div className="sizeMain">
                          <div className="sizeNo">UK 6 (EU 40)</div>
                          <div className="sizeNo">UK 6.5</div>
                          <div className="sizeNo">UK 7</div>
                     </div>
                     <div className="sizeMain">
                          <div className="sizeNo">UK 6 (EU 40)</div>
                          <div className="sizeNo">UK 6.5</div>
                          <div className="sizeNo">UK 7</div>
                     </div>
  
                  </div>
  
                  <button className="bagBtn mt-4">Add To Bag</button>
                  <button className="bagBtn mt-2">Favourite <FaRegHeart/></button>
  
                  <div className="paraDe mt-5">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aliquid, inventore, voluptates neque deserunt quia autem  <br />accusamus ex sequi beatae cumque consequuntur similique <br /> aliquam, cum rem quo est praesentium quaerat nihil.</p>
                  </div>
  
                  <div className="ProductDetailss mt-4">
                      <h4 className="pd">Product Details</h4>
  
                      <div className="Accord mt-5">
                          <Accordian/>
                      </div>
                  </div>
              </Col>
            </Row>

            <Row>

              <h3 className='text-white mt-5'>You Might Also Like</h3>
              <ShoeSliderMen/>
            </Row>

            <MenReview/>
          </Container>
        )}
      </div>
    )
}

export default SHoeDetailsMen
