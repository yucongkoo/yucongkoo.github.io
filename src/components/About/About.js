import React from 'react';
import './About.css';
import Heading from '../Heading/Heading';
import profileImage from '../../assets/proflie-img.jpeg';
import Socials from '../../components/Socials/Socials';

const About = () => {
  return (
    <section id='about'>
        <div className='aboutContainer'>
            <div className='aboutTextContainer'>
                <div className='aboutText'>
                    <Heading headingText='About Me' />
        
                    <p>
                        I am presently enrolled in the Computer Science program at the National University of Singapore (NUS) 
                        with an anticipated graduation date of May 2026. I have currently maintained a perfect Cumulative Average 
                        Point(CAP): 5.0/5.0, and have also received multiple top student awards in programming-related modules.
                    </p>
                    <br/>
                    <p>
                        I find profound satisfaction in continuously honing my skills and deploying my problem-solving expertise 
                        in tangible, real-world contexts. As such, I am eagerly exploring opportunities to contribute to software 
                        projects with the potential to genuinely impact and improve people's lives.    
                    </p>
                    <br/>
                    <p>
                        Beyond course studies and internships, I have a keen interest in sports, actively participating in sports 
                        activities to foster connections with friends and colleagues.
                    </p>
                </div>
            </div>

            <div className='aboutImgContainer'>
                <img src={profileImage} alt="Profile Picture" className='profileImg' />
                <Socials />
            </div>
        </div>
    </section>
  )
}

export default About;
