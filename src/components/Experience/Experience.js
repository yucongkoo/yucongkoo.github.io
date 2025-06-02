import React from 'react';
import TabList from './TabList/TabList';
import './Experience.css';

const Experience = (props) => {
  return (
    <section className='experience section' id='experience' ref={props.sectionRef}>
        <h2 className='sectionTitle'>Experience</h2>
        <span className='sectionSubtitle'>Where I've worked</span>

        <div className='tabListContainer'>
            <TabList data={experiencesData} />
        </div>
    </section>
  )
}

const experiencesData = [
    {
        company : 'NUS SOC',
        companyFullName: 'NUS School of Computing',
        companyLink: 'https://www.comp.nus.edu.sg',
        title: 'OSS Developer and Maintainer',
        date: 'Jan 2025 - Present',
        body: [
            "Developer and maintainer of CATcher, a NUS open-source software application to be used for Crowd-sourced Anonymous Testing of software, optimized for educational purposes.",
            "Led the implementation of new feature Bug Trimming Phase, from gathering requirements and implementation to testing and documentation.",
            "Improved collaborative development by introducing structured deployment workflows and standardized feature branching, leading to smoother integration and more efficient team coordination.",
            "Technical Skills: Angular, Typescript, Project Management"

        ]
    },
    {
        company : 'GIC',
        companyFullName: 'GIC - Front Office',
        companyLink: 'https://www.gic.com.sg',
        title: 'Software Engineer Intern',
        date: 'Jan 2024 - Aug 2024',
        body: [
            "Developed a full stack software solution, for portfolio managers in Securities Financing team, enhancing scalability and reliability of multiple workflows by more than 50%.",
            "Implemented firmwide Internal Securities Borrowing and Lending feature, envisioned to reliably increase utilization of internal securities through a robust cross-portfolio lending framework with recall management.",
            "Engineered a Python automation script to streamline preparation of development data environments, saving up to 30 minutes daily.",
            "Migrated deployment pipelines from Jenkins and CloudBees to Github CI/CD workflows, reducing deployment time by 80% and boosting team productivity by enabling faster and more reliable deployments.",
            "Led database migration from KDB+ to Postgres, saving up to USD100,000 per annum of license cost and increasing maintainability of database systems.",
            "Technical skills: C#, Python, React, Typescript, KDB+, Postgres, Agile Methodologies (Scrum), Project Management."
        ]
    },
    {
        company : 'Tencent',
        companyFullName: 'Tencent - Lightspeed Studios',
        companyLink: 'https://www.tencent.com/en-us/',
        title: 'Front End Engineer Intern',
        date: 'May 2023 - Aug 2023',
        body: [
            "Collaborated intensively with a team of 20, consisting front end engineers, back end engineers, product managers and designers to develop an AI Generative Content tool",
            "Studied source code of up to 10 different flutter libraries, contributed to more than 5000 lines of code in production, and learned about the Model,View,Controller(MVC) architecture thoroughly",
            "Implemented an interactive text field for a text-to-sound feature, allowing users to indicate specific settings (volume, pitch, speed, pronunciation etc.) for selected text with high flexibility",
            "Technical skills: Flutter, MVC Architecture, Agile Methodologies (Scrum)"
        ]
    }
]

export default Experience