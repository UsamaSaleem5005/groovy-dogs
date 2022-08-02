import cutdog from './Assets/cutdog.png';
import redbg from './Assets/red-bg.jpg';
import dog1 from './Assets/d1.jpeg';
import dog2 from './Assets/d2.jpeg';
import dog3 from './Assets/d3.jpeg';
import dog4 from './Assets/d4.png';
import dog5 from './Assets/d5.jpeg';
import dog6 from './Assets/d6.jpeg';
import dog7 from './Assets/d7.jpeg';
import dog8 from './Assets/d8.jpeg';
import dog9 from './Assets/d9.jpeg';
import dog10 from './Assets/d10.jpeg';
import dog11 from './Assets/d11.jpeg';
import dog12 from './Assets/d12.jpeg';
import dog13 from './Assets/d13.jpeg';
import dog14 from './Assets/d14.jpeg';
import dog15 from './Assets/d15.jpeg';
import dog16 from './Assets/d16.jpeg';
import dog17 from './Assets/d17.png';
import dog18 from './Assets/d18.jpeg';
import dog19 from './Assets/dog-img6.jpeg';
import dog20 from './Assets/dog-img4.jpeg';
import dog21 from './Assets/dog-img2.jpeg';
import dog22 from './Assets/dog-img8.jpeg';
import r2 from './Assets/roadmap2.png';
import r3 from './Assets/roadmap3.png';
import w1 from './Assets/w1.png';
import w2 from './Assets/w2.png';
import w3 from './Assets/w3.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
//You can import using 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//Demo slider 
import React, { Component } from "react";
import Slider from "react-slick";
import Counter from "./Views/Counter/Index";

function App() {
    const bannerslider = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
    const collectionslider = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <section className='main'>
      <div className='sec-main-banner'>
      <Container>
      
        <div className='main-banner-head'>
          <h1>
          Groovy <span>Dogs</span>
          </h1>
        </div>
        <Row>
        <Col md={6}>
            <div className='banner-dog'>
            <img src={cutdog} alt='' />
            </div>
          </Col>
          <Col md={4}>
            <div className='banner-slick'>
        <Slider {...bannerslider}>
          <div>
          <p>
          A community driven brand built around giving back, helping others and building together. Groovy souls growing both in Web3 and in “real life”, powered by NFTs
              </p>
          </div>
          
        </Slider>
        <Counter />
             
            </div>
          </Col>
          
        </Row>
      </Container>
      </div>
      <div className='collection-sec'>
        <Container>
          <div className='collection-head'>
            <h3>Collections</h3>
          </div>
          <div className='collection-slider'>
          <Slider {...collectionslider}>
          <div className='coll-slide'>
          <img src={dog1} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog2} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog3} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog4} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog5} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog6} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog7} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog8} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog9} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog10} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog11} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog12} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog13} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog14} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog15} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog16} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog17} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog18} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog19} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog20} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog21} alt='' />
            </div>
            <div className='coll-slide'>
          <img src={dog22} alt='' />
            </div>
        </Slider>
<p>The GroovyDogs NFT collection includes 5,500 GroovyDogs and consists of over 250 hand drawn traits. GroovyDog NFT ownership includes IP trademark rights to build under the GroovyDog name using your GroovyDog and license your dog for passive income as well as entitle you to discounted merch/apparel for you and your furry friends!</p>
  
         </div>
        </Container>
      </div>
      <div className='why-sec'>
        <img src={redbg} alt='' />
        <Container>
          <div className='why-txt-main'>
          <Row>
            <Col md={12} lg={6} xl={6}>
              <div className='why-buy-txt'>
                <h3>Why Buy A GroovyDog?</h3>
                <p>GroovyDog holders are known for being charitable  and being kind,
                    with the GroovyDog being your access to the grooviest community in
                    the world. As a holder you will get</p>
                    <ul>
                      <li>
                        <span><i>1</i></span>
                        <p>Holders get free and discounted access to exclusive educational content and branded products/merchandise.</p>
                      </li>
                      <li>
                        <span><i>2</i></span>
                        <p>FREE2MINT companion collection for holders, chosen by holders.</p>
                      </li>
                      <li>
                        <span><i>3</i></span>
                        <p>An inclusive community of passionate and creative people, focused on giving back. 50% of GroovyDog profits are being donated to animal shelters chosen by the community.</p>
                      </li>
                      <li>
                        <span><i>4</i></span>
                        <p>True Web3 ownership within the Groovy brand.</p>
                        
                      </li>
                    </ul>
              </div>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
      {/* <div className='top-sale-sec'>
        <Container>
        <div className='top-sale-head'>
          <h3>Top Sales</h3>
          <a href="">view all</a>
        </div>
        <div className='top-wid-main'>
          <Row>
            <Col md={3}>
              <div className='wid-img'>
              <Link to="/">
              <img src={dog11} alt='' />
              <div className='wid-txt'>
                <h6>Heading Here</h6>
                <Link to="/" className='grey-btn'>$25</Link>
              </div>
              </Link>
              </div>
            </Col>
            <Col md={3}>
              <div className='wid-img'>
              <Link to="/">
              <img src={dog12} alt='' />
              <div className='wid-txt'>
                <h6>Heading Here</h6>
                <Link to="/" className='purple-btn'>$25</Link>
              </div>
              </Link>
              </div>
            </Col>
            <Col md={3}>
              <div className='wid-img'>
              <Link to="/">
              <img src={dog13} alt='' />
              <div className='wid-txt'>
                <h6>Heading Here</h6>
                <Link to="/" className='grey-btn'>$25</Link>
              </div>
              </Link>
              </div>
            </Col>
            <Col md={3}>
              <div className='wid-img'>
              <Link to="/">
              <img src={dog4} alt='' />
              <div className='wid-txt'>
                <h6>Heading Here</h6>
                <Link to="/" className='green-btn'>$25</Link>
              </div>
              </Link>
              </div>
            </Col>
            <Col md={3}>
              <div className='wid-img'>
              <Link to="/">
              <img src={dog14} alt='' />
              <div className='wid-txt'>
                <h6>Heading Here</h6>
                <Link to="/" className='pink-btn'>$25</Link>
              </div>
              </Link>
              </div>
            </Col>
            <Col md={3}>
              <div className='wid-img'>
              <Link to="/">
              <img src={dog7} alt='' />
              <div className='wid-txt'>
                <h6>Heading Here</h6>
                <Link to="/" className='grey-btn'>$25</Link>
              </div>
              </Link>
              </div>
            </Col>
            <Col md={3}>
              <div className='wid-img'>
              <Link to="/">
              <img src={dog9} alt='' />
              <div className='wid-txt'>
                <h6>Heading Here</h6>
                <Link to="/" className='blue-btn'>$25</Link>
              </div>
              </Link>
              </div>
            </Col>
            <Col md={3}>
              <div className='wid-img'>
              <Link to="/">
              <img src={dog6} alt='' />
              <div className='wid-txt'>
                <h6>Heading Here</h6>
                <Link to="/" className='yellow-btn'>$25</Link>
              </div>
              </Link>
              </div>
            </Col>
          </Row>
        </div>
        </Container>
      </div> */}
      <div className='sec-roadmap'>
        <Container>
          <div className='roadmap-map'>
            <h3>Roadmap Launch Timeline</h3>
          </div>
          <Row className='road-row'>
            <Col md={12} lg={4} xl={4}>
              <div className='roadmap-imgs'> 
              <img src={r3} alt='' />
              <img src={r2} alt='' />
              </div>
            </Col>
            <Col md={12} lg={8} xl={8}>
              <div className='roadmap-wids-main'>
                <Row>
                  <Col md={6}>
                    <div className='road-wid'>
                      <div className='percent-div'>
                        <h6>April 23rd</h6>
                        <span>01</span>
                      </div>
                      <p>The GroovyDogs are released through our website.</p>
                    </div>
                    </Col>
                    <Col md={6}>
                    <div className='road-wid'>
                      <div className='percent-div'>
                        <h6>25%</h6>
                        <span>02</span>
                      </div>
                      <p>1st Donation chosen by the community. Giveaway GroovyDogs and Groovy Merchandise to holders.</p>
                    </div>
                    </Col>
                    <Col md={6}>
                    <div className='road-wid'>
                      <div className='percent-div'>
                        <h6>50%</h6>
                        <span>03</span>
                      </div>
                      <p>2nd Donation by the community. Giveaway rare GroovyDogs and physical art.</p>
                    </div>
                    </Col>
                    <Col md={6}>
                    <div className='road-wid'>
                      <div className='percent-div'>
                        <h6>75%</h6>
                        <span>04</span>
                      </div>
                      <p>3rd Donation chosen by the community. Giveaway rare GroovyDogs and more groovy merchandise.</p>
                    </div>
                    </Col>
                    <Col md={6}>
                    <div className='road-wid'>
                      <div className='percent-div'>
                        <h6>100%</h6>
                        <span>05</span>
                      </div>
                      <p> Final donation. Community decides companion collection. Groovy store discounts go live.</p>
                    </div>
                    </Col>
                    <Col md={6}>
                    <div className='road-wid'>
                      <div className='percent-div'>
                        <h6>Q2 2022</h6>
                        <span>06</span>
                      </div>
                      <p>Educational content starts being put out and community projects get underway.</p>
                    </div>
                    </Col>
                    <Col md={6}>
                    <div className='road-wid'>
                      <div className='percent-div'>
                        <h6>Q4 2022</h6>
                        <span>07</span>
                      </div>
                      <p>Expanding partnerships. Companion collection launch. Educational content being built.</p>
                    </div>
                    </Col>
                    <Col md={6}>
                    <div className='road-wid'>
                      <div className='percent-div'>
                        <h6>Q2 2023</h6>
                        <span>08</span>
                      </div>
                      <p>Community driven projects start launching. Free courses and books being published. Implement staking and a coin.</p>
                    </div>
                    </Col>
                    <Col md={6}>
                    <div className='road-wid'>
                      <div className='percent-div'>
                        <h6>Q4 2023</h6>
                        <span>09</span>
                      </div>
                      <p>Metaverse buildout begins with your GroovyDog as your ticket. Groovy getaway.</p>
                    </div>
                    </Col>
                    <Col md={6}>
                    <div className='road-wid'>
                      <div className='percent-div'>
                        <h6>2024 ++</h6>
                        <span>10</span>
                      </div>
                      <p>Groovy becomes a worldwide brand, completely community and Web3 driven.</p>
                    </div>
                    </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='sec-who'>
        <Container>
          <div className='who-txt'>
            <h3>
            Who is Behind the <span>Groovydogs?</span>
            </h3>
            <h6>
              Patrick Hagerty & Lisa Petrie
            </h6>
            <p>We work together growing the groovy community from Boston, MA. Our rescue pup, Roxy is the adorable art inspiration and we have always loved animals. We grew up fostering from the local shelter as well as collecting donations. We are creating a group of passionate entrepreneurs, investors, hustlers and groovy souls who want to build together, lift up those around them and make the world a better place.</p>
            <p>We both have a love for animals and a desire to help others!</p>
          </div>
          <Row>
            <Col md={4}>
              <div className='who-wid grad1'>
                 <img src={w1} alt='' />
                 <div className='who-wid-txt'>
                   <h6>Lisa Petrie</h6>
                   {/* <p>Lorem ipsum dolor sit amet dummy</p> */}
                   <ul>
                     <li>
                       <a href='https://www.facebook.com/lisa.petrie.353' target="_blank">
                       <FontAwesomeIcon icon={brands('facebook-f')} />
                         </a>
                     </li>
                     <li>
                        <a href="https://twitter.com/lisa_petrie1?s=21" target="_blank"> <FontAwesomeIcon icon={brands('twitter')} /></a>
                      </li>
                      <li>
                        <a href="https://instagram.com/lisapetriee?utm_medium=copy_link" target="_blank"> <FontAwesomeIcon icon={brands('instagram')} /></a>
                      </li>
                   </ul>
                 </div>
              </div>
            </Col>
            <Col md={4}>
              <div className='who-wid grad3'>
                 <img src={w3} alt='' />
                 <div className='who-wid-txt'>
                   <h6>Roxy</h6>
                   {/* <p>Lorem ipsum dolor sit amet dummy</p> */}
                 </div>
              </div>
            </Col>
            <Col md={4}>
              <div className='who-wid grad2'>
                 <img src={w2} alt='' />
                 <div className='who-wid-txt'>
                   <h6>Patrick Hagerty</h6>
                   {/* <p>Lorem ipsum dolor sit amet dummy</p> */}
                   <ul>
                     <li>
                       <a href='https://www.facebook.com/patrick.hagerty.3576' target="_blank">
                       <FontAwesomeIcon icon={brands('facebook-f')} />
                         </a>
                     </li>
                     <li>
                        <a href="https://twitter.com/patrickjhags?s=21" target="_blank"> <FontAwesomeIcon icon={brands('twitter')} /></a>
                      </li>
                      <li>
                        <a href="https://instagram.com/p.hags?utm_medium=copy_link" target="_blank"> <FontAwesomeIcon icon={brands('instagram')} /></a>
                      </li>
                   </ul>
                 </div>
              </div>
            </Col>
            
          </Row>
          <div className='read-div'>
          {/* <Link to="/Team" className='readmore'>Read More </Link> */}
          </div>
         
        </Container>
      </div>
      <div className='faq-sec'>
        <Container>
          <h3>FrequentlY Asked QUESTIONS</h3>
          <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header><span>Q1</span><p>What are The GroovyDogs?</p></Accordion.Header>
    <Accordion.Body>
      <p>A community driven brand, powered by NFTs. The community is value packed between a free to mint NFT, brand partnerships, discounts and exclusive content. Not to mention the grooviest people around.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><span>Q2</span><p>How/When can I buy a GroovyDog?</p></Accordion.Header>
    <Accordion.Body>
    <p>GroovyDogs will be available to mint at 0.05 ETH  through our website only. Secondary sales will be listed on OpenSea. You will need to use an Ethereum wallet for the transaction.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header><span>Q3</span><p>Where did the groovy idea come from?</p></Accordion.Header>
    <Accordion.Body>
      <p>The idea started with our rescue pup Roxy. We foster dogs for the local animal shelter and we love helping people! Creating a likeminded community that wants to give back to the world while building a genuine brand, by passionate people can lead to unlimited possibilities.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header><span>Q4</span><p>What is the GroovyDog team building currently?</p></Accordion.Header>
    <Accordion.Body>
    <p>We are focused on making education easier. Specifically within Web3, investing and the business spaces. Coming from a blue collar family, teaching ourselves about these topics over the past several years has been exhaustive and we believe we can drastically improve the onboarding experience of the average, everyday person into Web3 and also the business/financial world.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header><span>Q5</span><p>How will the FREE2MINT companion collection work?</p></Accordion.Header>
    <Accordion.Body>
      <p>The GroovyDog holders will vote on the cause supported and the theme of an additional collection. Holders will be able to mint 1 companion NFT per GroovyDog they hold at the time of the snapshot.
</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header><span>Q6</span><p>Whats the deal with the Groovy Store and discounts?</p></Accordion.Header>
    <Accordion.Body>
    <p>The Groovy store will hold hats, shirts, bags and plenty of different apparel. Merchandise like stickers, physical art, and even IP projects will also be on the site. Holders will receive a discount on everything In the store, while being eligible for free giveaways regularly. We plan on partnering with established brands for further discounts for holders as well.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </Container>
       
      </div>
    </section >
  );
}

export default App;
