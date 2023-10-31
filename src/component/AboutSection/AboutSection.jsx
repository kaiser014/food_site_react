import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './aboutsection.css';

const AboutSection = () => {
    const navigate = useNavigate();
  return (
    <div className='about-section'>
        <div className='about-section-overlay'></div>
        <div className='about-section-content'>
            <div className='container'>
                <Row className='align-items-center'>
                    <Col md={5} lg={5}>
                        <div className='about-content-bg'>
                            <div className='about-content'>
                                <h5>History</h5>
                                <h2 className='primary-color'>About Us</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iusto veniam. Vitae ex eligendi aut doloremque saepe facilis nulla voluptate veritatis ipsam! Sequi, enim ad. Cumque odit veniam totam voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit veniam totam voluptates</p>
                                <Button onClick={e => navigate('/about')} className="main-btn">Learn More</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={7} lg={7}>
                        <div className="about-section-image">
                            <img src={process.env.PUBLIC_URL + "/assets/images/about.jpg"} alt="about-section"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export default AboutSection