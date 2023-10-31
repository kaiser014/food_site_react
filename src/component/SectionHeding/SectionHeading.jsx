import React from 'react';
import './sectionheading.css';

const SectionHeading = (props) => {
    const {subTitle, title, description} = props;
  return (
    <div className='section-heading'>
        <h5>{subTitle}</h5>
        <h2 className='primary-color'>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default SectionHeading;