// SITE LOGO
import sitelogo from '../Assets/logo.png';
import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Offcanvas } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from "react-router-dom";


function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row>
        <Col md={4}>
          <div className='nav-wallet'>
            <ul>
              {/* <li>
                <a href=""> <FontAwesomeIcon icon={brands('facebook')} /></a>
              </li>
              <li>
                <a href=""> <FontAwesomeIcon icon={brands('github-alt')} /></a>
              </li> */}
              <li>
                <a href="https://twitter.com/groovynft"> <FontAwesomeIcon icon={brands('twitter')} /></a>
              </li>
              <li>
                <a href="https://discord.gg/5hkeeAFfMA"> <FontAwesomeIcon icon={brands('discord')} /></a>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={4} className='logo'>
          <Navbar.Brand as={Link} to="/">
            <img src={sitelogo} alt='' />
          </Navbar.Brand></Col>
        <Col md={4} className='toggler-menu'>
          <Navbar expand={false} >
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end" 
              
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/" className='hover-underline-animation'>Home</Nav.Link>
                  <Nav.Link as={Link} to="/Mint" className='hover-underline-animation'>Mint</Nav.Link>
                  <Nav.Link as={Link} to="/Team" className='hover-underline-animation'>Vision/Team</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
