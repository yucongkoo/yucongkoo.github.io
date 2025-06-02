import React from 'react';
import './About.css';

const About = (props) => {
  return (
    <section className='about section' id='about' ref={props.sectionRef}>
        <h2 className='sectionTitle'>About Me</h2>
        <span className='sectionSubtitle'>My introduction</span>

        <div className='aboutContainer'>
            <div className='aboutTextContainer'>
                <div className='aboutText'>
                    <p>
                        I am presently enrolled in the Computer Science program at the National University of Singapore (NUS) 
                        with an anticipated graduation date of May 2026. I have currently maintained a perfect CGPA of 5.0/5.0,
                        with Dean's List awarded in all eligible semesters and received various top student awards in CS modules. 
                        With passion in high performing and scalable systems, I am working towards focus areas in Parallel Computing, 
                        Networking and Distributed Systems.
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
        </div>
    </section>
  )
}

export default About;
