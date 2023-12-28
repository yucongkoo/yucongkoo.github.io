import React from 'react';
import './Navbar.css';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="desktopMenu">
      <Link className='desktopMenuListItem' to='intro' spy smooth>Home</Link>
      <Link className='desktopMenuListItem' to='about' spy smooth>About</Link>
      <Link className='desktopMenuListItem'>Experience</Link>
      <Link className='desktopMenuListItem'>Courseworks</Link>
      </div>
      
      <button class="contactMeBtn">
        <img src={contactImg} alt="contactImg" className='contactMeImg'/>
        Contact Me
      </button>
    </nav>
  )
}

export default Navbar