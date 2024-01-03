import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = (props) => {
  /* Toggle Menu*/
  const [menuIsShown, setMenuIsShown] = useState(false);
  const [activeNav, setActiveNav] = useState('intro');

  const getNavStyling = navName => props.activeSection === navName ? 'navLink active-link' : 'navLink';

  return (
    <header className='header'>
      <nav className='nav container' ref={props.sectionRef}>

        <div className={menuIsShown ? 'navMenu show-menu' : 'navMenu'}>
          <ul className='navListGrid'>
            <li className='navItem'>
              <a href='#intro' 
              onClick={() => setActiveNav('intro')}
              className={getNavStyling('intro')} 
              spy smooth>
                <i className='uil uil-estate navIcon'></i> Home
              </a>
            </li>

            <li className='navItem'>
              <a href='#about' 
              onClick={() => setActiveNav('about')}
              className={getNavStyling('about')} 
              spy smooth>
                <i className='uil uil-user navIcon'></i> About
              </a>
            </li>

            <li className='navItem'>
              <a href='#experience' 
              onClick={() => setActiveNav('experience')}
              className={getNavStyling('experience')} 
              spy smooth>
                <i className='uil uil-briefcase-alt navIcon'></i> Experience
              </a>
            </li>

            <li className='navItem'>
              <a href='#coursework' 
              onClick={() => setActiveNav('coursework')}
              className={getNavStyling('coursework')} 
              spy smooth>
                <i className='uil uil-briefcase-alt navIcon'></i> Courseworks
              </a>
            </li>

            <i className='uil uil-times navClose' onClick={() => setMenuIsShown(false)}></i>
          </ul>
        </div>

        <div className='navToggle' onClick={() => setMenuIsShown(true)}>
          <i className='uil uil-apps'></i>
        </div>

        <button className='contactMeButton'>
          <Link to='contact' className='contactMeButtonLink'>
            <span>Contact Me</span>
          </Link>
        </button>

      </nav>
    </header>
  )
}

export default Navbar