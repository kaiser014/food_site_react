import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ServiceItem from './ServiceItem/ServiceItem';
import './servicesection.css';

const ServiceSection = () => {
  return (
    <div className='service-section'>
        <div className='container'>
            <Row>
                <Col lg={3}>
                    <ServiceItem imgSrc={process.env.PUBLIC_URL + '/assets/images/service-icon/fast-delivery.svg'} title="Fast Delivery"/>
                </Col>
                <Col lg={3}>
                    <ServiceItem imgSrc={process.env.PUBLIC_URL + '/assets/images/service-icon/fresh-food.svg'} title="Fresh Food"/>
                </Col>
                <Col lg={3}>
                    <ServiceItem imgSrc={process.env.PUBLIC_URL + '/assets/images/service-icon/experience-chefs.svg'} title="Experienced Chefs"/>
                </Col>
                <Col lg={3}>
                    <ServiceItem imgSrc={process.env.PUBLIC_URL + '/assets/images/service-icon/dishes.svg'} title="A Variety of Dishes"/>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default ServiceSection