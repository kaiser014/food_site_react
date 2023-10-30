import React from 'react';
import './serviceitem.css';

const ServiceItem = (props) => {
    const { imgSrc, title } = props;
  return (
    <div className='service-item'>
        <div className='service-item-image'>
            <img src={imgSrc} alt='service-item' />
        </div>
        <div className='service-item-content'>
            <h5>{title}</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    </div>
  )
}

export default ServiceItem