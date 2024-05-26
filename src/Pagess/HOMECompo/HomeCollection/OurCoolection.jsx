import React from 'react'
import './OurCoolection.css'
import { Col, Container, Row } from 'react-bootstrap'
import graySaleShoe from '../../../imaggess/nike-dunk-high-chenille-grey-gum-DR8805-003-1-removebg-preview.png'
import BlueShoes from '../../../imaggess/menBlue.png'
import VanShoes from '../../../imaggess/menBuggy.png'

const OurCoolection = () => {
    return (
        <div className='py-5'> 
            <Container>
                <h2 className='text-center py-3' style={{color:"white"}}>OUR COLLECTION</h2>
                <Row>
                    <Col sm={12} md={6} xl={6}>
                        <div className="fridaySale">
                            <div className="saleContent">
                                <h5>BLACK FRIDAY  <span style={{color:"#D90D0A"}}>SALE</span></h5>
                                <h2>UPTO <br />
                                    55% OFF
                                </h2>
                                <button className='btn' style={{backgroundColor:"#D90D0A",color:"white"}}>SHOP NOW</button>
                            </div>
                            <div className="ShowSaleImg">
                                <img src={graySaleShoe} alt=""className='img-fluid' />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} xl={6}>
                        <div className="topNikeDuke">
                            <div className="insideDuke p-3">
                                <h2>NIKE DUNK HIGH</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aliquid.</p>
                                <button className='btn' style={{backgroundColor:"#D90D0A",color:"white"}}>SHOP NOW</button>
                            </div>
                            <div className="blueShoes">
                                <img src={BlueShoes} alt=""   className='blueShoess'/>
                            </div>
                        </div>

                        <div className="VanShoHEad">
                            <div className="vanShoe mt-3">
                                <h3 className='pt-2'>VAN SHOE </h3>
                                <img src={VanShoes} alt=""  style={{height:"100px"}}/>
                                <button className='btn' style={{backgroundColor:"#D90D0A",width:"99%", color:"white"}}>SHOP NOW</button>
                            </div>
                            <div className="vanShoe mt-3 ms-4">
                                <h3 className='pt-2'>VAN SHOE </h3>
                                <img src={VanShoes} alt=""  style={{height:"100px"}}/>
                                <button className='btn' style={{backgroundColor:"#D90D0A",width:"99%", color:"white"}}>SHOP NOW</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurCoolection
