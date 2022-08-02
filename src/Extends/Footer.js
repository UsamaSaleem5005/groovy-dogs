import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import sitelogo from '../Assets/logo.png';
// SITE LOGO


function Footer() {
  return (
    <div className="main-footer">
      <Container>
        <div className="ftr-top">
        <Row>
          <Col md={4}>
            <div className="ftr-logo">
            <Nav.Link as={Link} to="/">
               <img src={sitelogo} alt='' />
               </Nav.Link>
            </div>
          </Col>
          <Col md={2}>
            {/* <div className="quick-link">
              <h6>Quick Links</h6>
              <ul>
                <li>
                  <Nav.Link as={Link} to="/" className='hover-underline-animation'>Home</Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} to="/" className='hover-underline-animation'>Roadmap</Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} to="/" className='hover-underline-animation'>Teams</Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} to="/" className='hover-underline-animation'>Collections</Nav.Link>
                </li>
              </ul>
            </div> */}
          </Col>
          <Col md={6}>
          <div className="quick-link">
              <h6>Subscribe Newsletter</h6>
              <p>Get your groove on with all the important news & updates you need</p>
              <Form>
                  <Form.Control type="email" placeholder="Enter email" />
                <Button type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        </div>
        <div className="ftr-btm">
          <p>© Copyright 2022 The GroovyDogs, ALL Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
