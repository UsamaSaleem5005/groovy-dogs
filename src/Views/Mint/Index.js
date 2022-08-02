import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Counter from "../Counter/Index";


function Mint() {
    
    return (
      <div className="App">
          <div id='login-reg'>
              <div className='csoon'>
                  <h2>COMING SOON</h2>
              </div>
              {/* <Container>
                  <div className='mint-box-main'>
                      
                      <Row>
                          <Col sm={6} lg={6} xl={6} md={8}>
                              <div className='mint-box'>
                                  <div className='min-box-head'>
                                      <h4>
                                      Mint your Groovy Dogs
                                      </h4>
                                  </div>
                                  <div className='amt-div'>
                                      <p>Select amount: max 10</p>
                                      <p className='amt-num'>max 10</p>
                                  </div>
                                  <Form>
                                  <input placeholder='0' type="number" min="1"></input>
                                  <div className='price-div'>
                                      <ul>
                                          <li>Price ------ 0.05 ETH </li>
                                          <li><span>Total ------ 0.05 ETH </span></li>
                                      </ul>
                                      
                                  </div>
                                     <Button type="submit" className='btn-mint'>Mint</Button>
                                  </Form>
                                  <div className='mint-btn'>
                                  </div>
                                  <div className='card-div'>
                                      
                                      <p>PS: Gas fee is cheaper if you mint many at once!</p>
                                  </div>
                              </div>
                          </Col>
                      </Row>
                  </div>
              </Container> */}
          </div>
      </div>
    );
  }
  
  export default Mint;
  