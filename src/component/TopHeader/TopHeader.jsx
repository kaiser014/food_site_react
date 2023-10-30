import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './topheader.css';
import SocialIcon from '../SocialIcon/SocialIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


const TopHeader = () => {
  return (
    <div className='top-header'>
        <div className='container'>
            <Row>
                <Col sm={4} md={6} lg={6}>
                  <SocialIcon />
                </Col>
                <Col sm={8} md={6} lg={6}>
                  <ul className='top-header-contactinfo'>
                    <li><FontAwesomeIcon icon={faEnvelope} /> info@email.com</li>
                    <li><FontAwesomeIcon icon={faPhone} /> +880 1234 567890</li>
                  </ul>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default TopHeader;