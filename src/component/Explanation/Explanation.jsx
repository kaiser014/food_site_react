import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './explanation.css';
import SectionHeading from '../SectionHeding/SectionHeading';

const Explanation = () => {
  return (
    <div className='explanation-section'>
        <div className='container'>
            <Row>
                <Col sm={12} md={6} lg={6} className='m-auto text-center'>
                    <SectionHeading title="An Explanation of How it Works"/>
                </Col>
            </Row>
            <div className='explanation-three-item'>
                <Row className='align-items-center'>
                    <Col md={4} lg={4}>
                        <div className='explanation-item'>
                            <div className='explanation-image'>
                                <div className='explanation-img-hold'>
                                    <img className='img-fluid' src={process.env.PUBLIC_URL + '/assets/images/works/w-img1.jpg'} alt=''/>
                                </div>
                            </div>
                            <h3>Pick Your Meal</h3>
                        </div>
                    </Col>
                    <Col md={4} lg={4}>
                        <div className='explanation-item'>
                            <div className='explanation-image'>
                                <div className='explanation-img-hold'>
                                    <img className='img-fluid' src={process.env.PUBLIC_URL + '/assets/images/works/w-img2.jpg'} alt=''/>
                                </div>
                            </div>
                            <h3>Delivered To Your Door</h3>
                        </div>
                    </Col>
                    <Col md={4} lg={4}>
                        <div className='explanation-item'>
                            <div className='explanation-image'>
                                <div className='explanation-img-hold'>
                                    <img className='img-fluid' src={process.env.PUBLIC_URL + '/assets/images/works/w-img3.jpg'} alt=''/>
                                </div>
                            </div>
                            <h3>Prepare & Enjoy</h3>
                        </div>
                    </Col>
                </Row>            
            </div>
        </div>
    </div>
  )
}

export default Explanation;