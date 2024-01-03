import React from 'react';
import './Intro.css';
import bg from '../../assets/image.png';

const Intro = (props) => {
  return (
    <section className='section' id="intro" ref={props.sectionRef}>
        <div class="introContent">
            <span class="introTitle">
                Hi, I'm <span class="introName">Yu Cong</span>
            </span>
            <p class="introPara">
                I'm a full stack engineer and I thrive on addressing real-world challenges 
                <br />
                with software-driven solutions
            </p>

            <button className='findOutMoreBtn'>
              <a href='#about' className='findOutMoreBtnLink'>
                <span>Find out more</span>
              </a>
            </button>
        </div>

        <img src={bg} alt="Profile Picture" className='bg' />
    </section>
  )
}

export default Intro