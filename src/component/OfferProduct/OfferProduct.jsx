import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import './offerproduct.css';

const OfferProduct = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='offer-section'>
        <div className='offer-section-overlay'></div>
        <div className='offer-section-allcontent'>
            <div className='container'>
                <Slider {...settings}>
                    <div>
                        <Row className='align-items-center'>
                            <Col md={6} lg={6}>
                                <div className='slider-image-content'>
                                    <div className='slider-image'>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/offer-product/op-img1.png'} alt='' />
                                    </div>
                                    <div className='discount-offer'>
                                        <div className='discount-amount'>
                                            <h3>15%</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={6}>
                                <div className='slider-content'>
                                    <h3>Limited Discount</h3>
                                    <div className='discount-code'>
                                        <h4>Use code: Happy50</h4>
                                    </div>
                                    <h5>Free Shipping/ Online Offer</h5>
                                    <div className='offer-button'>
                                        <Button className='main-btn offer-order-btn'>Order Now</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='align-items-center'>
                            <Col md={6} lg={6}>
                                <div className='slider-image-content'>
                                    <div className='slider-image'>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/offer-product/op-img2.png'} alt='' />
                                    </div>
                                    <div className='discount-offer'>
                                        <div className='discount-amount'>
                                            <h3>35%</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={6}>
                                <div className='slider-content'>
                                    <h3>Limited Discount</h3>
                                    <div className='discount-code'>
                                        <h4>Use code: Happy35</h4>
                                    </div>
                                    <h5>Free Shipping/ Online Offer</h5>
                                    <div className='offer-button'>
                                        <Button className='main-btn offer-order-btn'>Order Now</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='align-items-center'>
                            <Col md={6} lg={6}>
                                <div className='slider-image-content'>
                                    <div className='slider-image'>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/offer-product/op-img3.png'} alt='' />
                                    </div>
                                    <div className='discount-offer'>
                                        <div className='discount-amount'>
                                            <h3>20%</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={6}>
                                <div className='slider-content'>
                                    <h3>Limited Discount</h3>
                                    <div className='discount-code'>
                                        <h4>Use code: Happy20</h4>
                                    </div>
                                    <h5>Free Shipping/ Online Offer</h5>
                                    <div className='offer-button'>
                                        <Button className='main-btn offer-order-btn'>Order Now</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default OfferProduct;