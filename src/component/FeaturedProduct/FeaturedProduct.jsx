import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import SectionHeading from '../SectionHeding/SectionHeading';
import './featuredproduct.css';
import FeaturedList from '../../data/FeaturedList';
import FeaturedItem from './FeaturedItem/FeaturedItem';

const FeaturedProduct = () => {
  return (
    <div className='featured-product-section'>
        <div className='container'>
            <Row>
                <Col lg={8} className='m-auto text-center'>
                    <div className='featured-section-heading'>
                        <SectionHeading title="Featured Products" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iusto veniam. Vitae ex eligendi aut doloremque saepe facilis nulla voluptate veritatis ipsam! Sequi, enim ad. Cumque odit veniam totam voluptates."/>
                    </div>
                </Col>
            </Row>
            <Row className='align-items-center mt-4'>
                {
                    FeaturedList.map((item, index)=> {
                        const {fp_Image, fp_Name, fp_price} = item;
                        return(
                            <Col xs={12} sm={6} md={6} lg={4}>
                                <FeaturedItem feature_p_image={fp_Image} feature_p_name={fp_Name} feature_p_price={fp_price}/>
                            </Col>
                        )
                    })
                }
                <Col lg={4} className='m-auto text-center mt-3'>
                    <Button className='main-btn feature-load-btn'>Load More</Button>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default FeaturedProduct