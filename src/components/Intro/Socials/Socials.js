import React from 'react';
import './Socials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Socials = () => {
  return (
    <div className='socialsContainer'>
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <ul>
            <li>
                <a href="https://github.com/yucongkoo" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/yucongkoo/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>

            <li>
                <a href="mailto:yucongkoo0214@gmail.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Socials