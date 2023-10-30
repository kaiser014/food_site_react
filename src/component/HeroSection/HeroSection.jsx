import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './herosection.css';
import SearchBar from '../SearchBar/SearchBar';

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <div className='container'>
            <Row className='align-items-center'>
                <Col lg={6}>
                    <div className='hero-section-title'>
                        <h1 className='primary-color'>Bangladeshi Food</h1>
                        <h3>Restaurant and Take away</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <SearchBar />
                </Col>
                <Col lg={6}>
                    <div className='hero-section-image'>
                        <div className='hero-section-overlay'></div>
                        <img src={process.env.PUBLIC_URL + '/assets/images/foodbanner.jpg'} alt='food-banner'/>
                        <h3>Savor Health Eats - Keep It Casual And Easy - Going</h3>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default HeroSection