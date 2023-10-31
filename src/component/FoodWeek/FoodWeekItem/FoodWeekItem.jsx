import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import './foodweekitem.css';

const FoodWeekItem = (props) => {
    const {f_week_image, f_week_name, f_week_price} = props;
  return (
    <div className='food-week-item'>
        <div className='foodweek-item-image'>
            <div className='foodweek-image'>
                <img src={f_week_image} alt='food-week'/>
            </div>
        </div>
        <div className='foodweek-item-content'>
            <h4>{f_week_name}</h4>
            <div className='food-week-rating'>
                <span className='starratingActive'><FontAwesomeIcon icon={faStar}/></span>
                <span className='starratingActive'><FontAwesomeIcon icon={faStar}/></span>
                <span className='starratingActive'><FontAwesomeIcon icon={faStar}/></span>
                <span className='starratingInActive'><FontAwesomeIcon icon={faStar}/></span>
                <span className='starratingInActive'><FontAwesomeIcon icon={faStar}/></span>
                <span className='rating-review-count'>(2 Reviews)</span>
            </div>
            <div className='foodweek-item-bottom'>
                <h5>${f_week_price}</h5>
                <div className='foodweek-button'>
                    <Button className='main-btn food-week-btn'>Order Now</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FoodWeekItem;