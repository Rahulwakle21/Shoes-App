import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MenWomCard from '../../common/MenWomCard'
import { Link } from 'react-router-dom'
import { shoesData } from './WomenShoeData'


const WomenHead = () => {

    const [filterOption,setFilterOption] = useState("select");

   const [shoeData,setShoeData] = useState(shoesData)

    const filterShoes = () =>{
        if(filterOption === 'high'){
           return shoeData.sort((a,b) => b.price - a.price);
        }else if(filterOption === 'low'){
            return shoeData.sort((a,b) => a.price- b.price)
        }else{
            return shoeData;
        }
    }

    return (
        <div className='py-4'>
            <Container>

            <div className="filterSec">
                <label htmlFor="" style={{color:"white" , marginRight:"10px"}}> Sort By : </label>
                <select name="shoe" id="" value={filterOption} onChange={(e)=> setFilterOption(e.target.value)}>
                    <option value="">--Price--</option>
                    <option value="high"> High-Low</option>
                    <option value="low"> Low-High</option>
                </select>
            </div>

                <Row>
                   {
                    filterShoes().map((shoe,i)=>(
                        <Col key={i} sm={12} md={6} xl={3} className='mt-4 mx-auto'>
                             <Link to={`/shoedetails?id=${i}`} >

                            <MenWomCard title ={shoe.title}
                                title2={shoe.title2}
                                title3={shoe.title3}
                                price={`MRP : $ ${shoe.price}`}
                                img={shoe.img}
                                
                                />
                                </Link>
                        </Col>
                    ))
                   }
                </Row>
            </Container>
        </div>
    )
}

export default WomenHead
