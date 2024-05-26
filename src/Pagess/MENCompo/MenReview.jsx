import React from 'react'
import './MenReview.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import RatingSec from '../../common/RatingSec'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import reviewmen1 from '../../imaggess/reviewMen1.png'
import reviewmen2 from '../../imaggess/reviewMen2.png'
import reviewmen3 from '../../imaggess/reviewMne3.png'
import reviewmen4 from '../../imaggess/reviewMen4.png'
import reviewmen5 from '../../imaggess/reviewMen5.png'
import { FaUserCircle } from "react-icons/fa";
import CustomReview from '../../common/CustomReview';


const MenReview = () => {
    return (
        <div className='py-5'>
            <hr />
            <Container>
                <Row>
                    <Col md={4} sm={12}>
                     <RatingSec/>
                    </Col>
                    <Col> 
                        <div className="fstReview text-white">
                            <h5>Customers say</h5>
                            <p className='pt-4'>Customers like the comfort, quality, color and value of the shoes. For example, they mention that it's super comfortable, the sole is very soft and that it is heavy duty. That said, some disagree on the fit.</p>
                            <div className="btnGrp">
                            <Button><BsFillArrowUpRightCircleFill/>Comfort</Button>
                            <Button><BsFillArrowUpRightCircleFill/>Quality</Button>
                            <Button><BsFillArrowUpRightCircleFill/>Color</Button>
                            <Button><BsFillArrowUpRightCircleFill/>Value</Button>
                            </div>
                            <div className="reviewwithImg mt-3">
                                <h4 className='mb-4'>Reviews with images</h4>
                                <img src={reviewmen1} alt=""  className='reviewImg'/>
                                <img src={reviewmen2} alt=""  className='reviewImg'/>
                                <img src={reviewmen3} alt=""  className='reviewImg'/>
                                <img src={reviewmen4} alt=""  className='reviewImg'/>
                                <img src={reviewmen5} alt=""  className='reviewImg'/>
                          
                            </div>
                            <hr />

                            <div className="topReview">
                                <CustomReview />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MenReview
