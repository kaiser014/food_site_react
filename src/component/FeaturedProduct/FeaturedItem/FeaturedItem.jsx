import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './featureditem.css';


const FeaturedItem = (props) => {
    const { feature_p_image, feature_p_name, feature_p_price} = props;
  return (
    <div className='featured-item-content'>
        <div className='featured-item-image'>
            <img className='img-fluid' src={feature_p_image} alt='featured-product'/>
        </div>
        <div className='item-content-hold'>
            <div className='item-content'>
                <h5>{feature_p_name}</h5>
                <div className='feature-rating-star'>
                    <span className='starratingActive'><FontAwesomeIcon icon={faStar}/></span>
                    <span className='starratingActive'><FontAwesomeIcon icon={faStar}/></span>
                    <span className='starratingActive'><FontAwesomeIcon icon={faStar}/></span>
                    <span><FontAwesomeIcon icon={faStar}/></span>
                    <span><FontAwesomeIcon icon={faStar}/></span>
                    <span className='rating-review-count'>(2 Reviews)</span>
                </div>
                <p>${feature_p_price}</p>
            </div>
            <div className='featured-item-button'>
                <Button className='main-btn featured-item-btn'>Add to cart</Button>
            </div>
        </div>
    </div>
  )
}

export default FeaturedItem;