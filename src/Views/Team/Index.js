import w1 from '../../Assets/w1.png';
import w2 from '../../Assets/w2.png';
import w3 from '../../Assets/w3.png';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
function Team() {
    return (
      <div className="App">
          <div className="sec-team">
          <Container>
          <div className='who-txt'>
            <h3>
            Our Team
            </h3>
            <h6>
              Patrick Hagerty & Lisa Petrie
            </h6>
            <p>We are creating a community of groovy, kind and genuine entrepreneurs/investors, based around giving back and helping others. Our rescue pup Roxy is the design inspiration for the art while she doubles as our product tester for dog merch! We are big animal lovers and 50% of net profits will be donated to animal shelters voted on by the community. The community will also get to vote on the theme of a FREE2MINT companion collection, where holders can mint for free, only paying gas, as well as what future causes are supported with this collection</p>
            <p>The GroovyDog merchandise shop for you and your furry friend! Holders receive amazing discounts and are regularly entered into random giveaways to rep the grooviness and get your pup lookin right. Merch is available to anyone, but heavily discounted for holders. Educational and Entertainment content being put out (web3, traditional investing and remote income basics, cook book and travel book along with a newsletter/podcast/blog) would be largely free for holders. Again, available to anyone at full price. </p>
            <p>The idea behind making most things available to anyone, while giving great deals to holders, is that we are focused on onboarding new web3 participants and growing the GroovyDog brand IRL.  We see this as one of the best ways to provide value based on a global, community driven brand, especially with IP ownership. IP ownership will allow holders to build under the GroovyDog name and their own GroovyDog. Licensing the Dog to others looking to build is always another option. </p>
            <p>The very first community driven brand, powered by NFTs</p>
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
        </Container>
          </div>
      </div>
    );
  }
  
  export default Team;
  