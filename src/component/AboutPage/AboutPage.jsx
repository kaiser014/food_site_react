import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SectionHeading from '../SectionHeding/SectionHeading'
import './aboutpage.css';

const AboutPage = () => {
  return (
    <div className='aboutpage-section'>
        <div className='container'>
            <Row className='align-items-center'>
                <Col sm={12} md={6} className='text-center'>
                    <SectionHeading title="Who We Are" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam possimus doloribus omnis voluptatum! Quisquam molestias consequatur accusantium beatae officiis laborum quas explicabo assumenda sunt, autem minus, obcaecati, rem quos. Voluptates?"/>
                </Col>
                <Col sm={12} md={6}>
                    <div className='about-page-image'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/about-page-image.jpg'} alt='about-page'/>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default AboutPage