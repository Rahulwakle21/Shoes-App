import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import './Nav.css'
import { NavLink } from 'react-router-dom';
// import SearchBox from '../../common/SearchBox';

const NavBar = () => {
    return (
        <div>
             <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">SNEA<span style={{color:"#D90D0A"}}>KISS</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
      
          <Nav className="justify-content-end me-5" activeKey="/home">
        <Nav.Item>
          <Nav.Link className='headLink me-4' > <NavLink to='/'>Home</NavLink></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='headLink me-4'  eventKey="link-1"> <NavLink to='/men'>Men</NavLink> </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='headLink me-4' eventKey="link-2"> <NavLink to='/women'>Women</NavLink></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='headLink me-4' eventKey="" >
          <NavLink to='/collection'>Collection</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='headLink me-4' eventKey="link-2"> <NavLink to='/contact'>Contact Us</NavLink></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='headLink me-4' eventKey="link-2"><FaShoppingCart/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='headLink me-4'  eventKey="link-2"><div style={{border:"1px solid white",padding:"5px",borderRadius:"10px"}}> 
            search here <span className='ms-5'><FaSearch/></span>
          </div></Nav.Link>
        </Nav.Item>
      </Nav>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default NavBar
