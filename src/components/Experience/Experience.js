import React from 'react';
import TabList from './TabList/TabList';
import './Experience.css';

const Experience = (props) => {
  return (
    <section className='experience section' id='experience' ref={props.sectionRef}>
        <h2 className='sectionTitle'>Experiences</h2>
        <span className='sectionSubtitle'>Companies I worked at</span>

        <div className='tabListContainer'>
            <TabList data={experiencesData} />
        </div>
    </section>
  )
}

const experiencesData = [
    {
        company : 'GIC',
        companyFullName: 'GIC Private Limited',
        companyLink: 'https://www.gic.com.sg',
        title: 'Full Stack Developer Intern',
        date: 'Jan 2024 - Present',
        body: [
            "Worked in the Securities Financing Technology team, co-located with portfolio managers at the front office, to implement a full stack software solution",
            "To be updated..."
        ]
    },
    {
        company : 'NUS',
        companyFullName: 'National University of Singapore',
        companyLink: 'https://www.nus.edu.sg',
        title: 'Teaching Assistant',
        date: 'Aug 2023 - Dec 2023',
        body: [
            "Taught the Programming Methodology (CS1101S) course, leading a class of 8 year1 undergraduates to learn fundamental knowledge in programming and entry level data structures and algorithms",
            "Cooperated closely with 4 lead professors and fellow teaching assistants in team meetings to discuss student progress, instructional strategies, and curriculum planning",
            "Fostered a positive and inclusive classroom atmosphere to encourage student participation",
        ]
    },
    {
        company : 'Tencent',
        companyFullName: 'Tencent Holdings Ltd.',
        companyLink: 'https://www.tencent.com/en-us/',
        title: 'Front End Developer Intern',
        date: 'May 2023 - Aug 2023',
        body: [
            "Collaborated intensively with a team of 20, consisting front end engineers, back end engineers, product managers and designers to develop an AI Generative Content tool",
            "Studied source code of up to 10 different flutter libraries, contributed to more than 5000 lines of code in production, and learned about the Model,View,Controller(MVC) architecture thoroughly",
            "Implemented an interactive text field for a text-to-sound(TTS) feature using the Flutter framework, allowing users to adjust specific settings of a text including volume, pitch, speed, pronunciation etc",
            "Demonstrated incredible problem solving and debugging skills, highly praised by mentor and manager"
        ]
    }
]

export default Experience