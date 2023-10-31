import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import SocialIcon from '../SocialIcon/SocialIcon';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='container'>
            <Row>
                <Col md={5}>
                    <div className='footer-info'>
                        <div className='footer-logo'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/self-logo.png'} alt='footer-logo'/>
                        </div>
                        <div className='opening-info'>
                            <h3>opening Time</h3>
                            <p>Everyday: 10:00AM - 11:00PM</p>
                        </div>
                        <div className='footer-contact-info'>
                            <div className='fc-info'>
                                <p><span><FontAwesomeIcon icon={faPhone}/></span> +880 1234 567890</p>
                            </div>
                            <div className='fc-info'>
                                <p><span><FontAwesomeIcon icon={faEnvelope}/></span> info@email.com</p>
                            </div>
                            <div className='fc-info'>
                                <p><span><FontAwesomeIcon icon={faMapMarkerAlt}/></span> House, Street No, Area Name, 1234</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='footer-links'>
                        <h3>Useful Links</h3>
                        <ul>
                            <li><a href="/about"><span><FontAwesomeIcon icon={faAngleRight}/></span>About</a></li>
                            <li><a href='#home'><span><FontAwesomeIcon icon={faAngleRight}/></span>Contact</a></li>
                            <li><a href='#home'><span><FontAwesomeIcon icon={faAngleRight}/></span>Privacy Policy</a></li>
                            <li><a href='#home'><span><FontAwesomeIcon icon={faAngleRight}/></span>Terms & Conditions</a></li>
                        </ul>
                        <h3>Useful Links</h3>
                        <SocialIcon />
                    </div>
                </Col>
                <Col md={4}>
                    <div className='footer-newsletter'>
                        <h3>Subscribe to Our newsletter</h3>
                        <Form>
                            <Form.Group>
                                <Form.Control className='newsletter-field' type="email" placeholder="Email Address" />
                                <Button className='newsletter-btn main-btn'>Subscribe</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Footer