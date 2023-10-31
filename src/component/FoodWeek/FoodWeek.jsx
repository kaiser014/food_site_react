import React from 'react';
import SectionHeading from '../SectionHeding/SectionHeading';
import { Col, Row } from 'react-bootstrap';
import FeaturedList from '../../data/FeaturedList'
import FoodWeekItem from './FoodWeekItem/FoodWeekItem';
import './foodweek.css';

const FoodWeek = () => {
  return (
    <div className='food-week-section'>
        <div className='container'>
            <Row>
                <Col md={8} className='m-auto text-center'>
                    <div className='food-section-heading'>
                    <SectionHeading title="Food of the week" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    </div>
                </Col>
            </Row>
            <Row className='mt-3 align-item-center'>
                {
                    FeaturedList.map((item, index) => {
                        const {fp_Image, fp_Name, fp_price} = item;
                        return(
                            <Col xs={12} sm={6} md={4} lg={4}>
                                <FoodWeekItem f_week_image={fp_Image} f_week_name={fp_Name} f_week_price={fp_price} />
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    </div>
  )
}

export default FoodWeek;