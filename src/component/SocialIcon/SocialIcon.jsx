import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './socialicon.css';

const SocialIcon = () => {
  return (
    <div>
        <ul className='social-icon-hold'>
            <li>
              <FontAwesomeIcon className='social-icon' icon={faFacebookF}/>
            </li>
            <li>
                <FontAwesomeIcon className='social-icon' icon={faTwitter}/>
            </li>
            <li>
              <FontAwesomeIcon className='social-icon' icon={faInstagram}/>
            </li>
            <li>
              <FontAwesomeIcon className='social-icon' icon={faLinkedinIn}/>
            </li>
        </ul>
    </div>
  )
}

export default SocialIcon