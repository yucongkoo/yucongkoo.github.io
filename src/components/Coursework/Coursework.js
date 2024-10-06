import React from 'react';
import './Coursework.css';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Coursework = (props) => {

    const leftColData = courseworkData.filter((e, idx) => idx <= courseworkData.length / 2 - 1);
    const rightColData = courseworkData.filter((e, idx) => idx > courseworkData.length / 2 - 1);


    const renderSection = (section) => {
        return (
            <div className='courseworkSectionContainer'>
                <div className='courseworkSectionHeader'>
                    {section.header}
                </div>
                <div className='courseworkSectionDatas'>
                    <ul>
                        {section.data.map((e, idx) => (
                            <li>
                                <div className='courseworkSectionData'>
                                    <a href={e.courseLink} target='_blank' rel='noreferrer'>
                                        {e.course}
                                    </a>
                                    <span className='courseGrade'>
                                        {' '}(

                                        {
                                            e.courseGradeLink
                                            ? (<span className='linkedCourseGrade'> 
                                                <a href={e.courseGradeLink} target='_blank' rel='noreferrer'>
                                                    {e.courseGrade}{' '}
                                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='courseGradeIcon' />
                                                    {' '}
                                                </a>
                                               </span>)
                                            : (<span> 
                                                {e.courseGrade}
                                               </span>)
                                        }
                                        )
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

  return (
    <section className='coursework section' id='coursework' ref={props.sectionRef}>
        <h2 className='sectionTitle'>Courseworks</h2>
        <span className='sectionSubtitle'>Relevant courses I've took</span>

        <div className='courseworksContainer'>
            <div className='courseworksLeftCol'>
                {leftColData.map((e, idx) => (
                    <>
                    {renderSection(e)}
                    </>
                ))}
            </div>

            <div className='courseworksRightCol'>
                {rightColData.map((e, idx) => (
                    <>
                    {renderSection(e)}
                    </>
                ))}
            </div>
        </div>
    </section>
  )
}

const courseworkData = [
    {
        header: 'AY22/23 Semester 1',
        data: [
            {
                course: 'CS1101S Programming Methodology',
                courseLink: 'https://nusmods.com/courses/CS1101S/programming-methodology',
                courseGrade: 'A+'
            },
            {
                course: 'CS1231S Discrete Structures',
                courseLink: 'https://nusmods.com/courses/CS1231S/discrete-structures',
                courseGrade: 'Top Student',
                courseGradeLink: 'https://credentials.nus.edu.sg/5f0929c4-1e09-433f-887b-bdab2ef923ff'
            },
            {
                course: 'MA2001 Linear Algebra I',
                courseLink: 'https://nusmods.com/courses/MA2001/linear-algebra-i',
                courseGrade: 'A+'
            },
            {
                course: "GEA1000 Quantitative Reasoning with Data",
                courseLink: "https://nusmods.com/courses/GEA1000/quantitative-reasoning-with-data",
                courseGrade: "A+"
            }
        ]
    },
    {
        header: 'AY22/23 Semester 2',
        data: [
            {
                course: 'CS2030S Programming Methodology II',
                courseLink: 'https://nusmods.com/courses/CS2030S/programming-methodology-ii',
                courseGrade: 'Top Student',
                courseGradeLink: 'https://credentials.nus.edu.sg/bc3db71a-e781-4805-91de-29ce1f3fe7d2'
            },
            {
                course: 'CS2040S Data Structures and Algorithms',
                courseLink: 'https://nusmods.com/courses/CS2040S/data-structures-and-algorithms',
                courseGrade: 'A'
            },
            {
                course: 'CS2100 Computer Organisation',
                courseLink: 'https://nusmods.com/courses/CS2100/computer-organisation',
                courseGrade: 'A+'
            },
            {
                course: 'MA1521 Calculus for Computing',
                courseLink: 'https://nusmods.com/courses/MA1521/calculus-for-computing',
                courseGrade: 'A+'
            }
        ]
    },
    {
        header: 'AY23/24 Semester 1',
        data: [
            {
                course: 'CS2103T Software Engineering',
                courseLink: 'https://nusmods.com/courses/CS2103T/software-engineering',
                courseGrade: 'Top Student',
                courseGradeLink: "https://credentials.nus.edu.sg/afb4f8d6-c74e-4bea-90cc-298d10ccce4a"
            },
            {
                course: 'CS2105 Introduction to Computer Networks',
                courseLink: 'https://nusmods.com/courses/CS2105/introduction-to-computer-networks',
                courseGrade: 'Top Student',
                courseGradeLink: "https://credentials.nus.edu.sg/d8767c35-5f41-4512-b0f3-ff1e45ce699c"
            },
            {
                course: 'CS2106 Introduction to Operating Systems',
                courseLink: 'https://nusmods.com/courses/CS2106/introduction-to-operating-systems',
                courseGrade: 'A+'
            },
            {
                course: 'CP2106 Independent Software Development Project',
                courseLink: 'https://nusmods.com/courses/CP2106/independent-software-development-project-orbital',
                courseGrade: 'CS'
            },
        ]
    },
    {
        header: 'AY23/24 Semester 2',
        data: [
            {
                course: 'CS2109S Introduction to AI and Machine Learning',
                courseLink: 'https://nusmods.com/courses/CS2109S/introduction-to-ai-and-machine-learning',
                courseGrade: 'A+'
            },
            {
                course: 'ST2334 Probability and Statistics',
                courseLink: 'https://nusmods.com/courses/ST2334/probability-and-statistics',
                courseGrade: 'A+'
            },
            {
                course: 'CP3880 Advanced Technology Attachment Programme',
                courseLink: 'https://nusmods.com/courses/CP3880/advanced-technology-attachment-programme',
                courseGrade: "CS"
            }
        ]
    },
    {
        header: 'AY24/25 Semester 1',
        data: [
            {
                course: 'CS3230 Design and Analysis of Algorithms',
                courseLink: 'https://nusmods.com/courses/CS3230/design-and-analysis-of-algorithms',
                courseGrade: 'Ongoing'
            },
            {
                course: 'CS3210 Parallel Computing',
                courseLink: 'https://nusmods.com/courses/CS3210/parallel-computing',
                courseGrade: 'Ongoing'
            },
            {
                course: 'CS2102 Database Systems',
                courseLink: 'https://nusmods.com/courses/CS2102/database-systems',
                courseGrade: "Ongoing"
            },
            {
                course: 'QF1100 Introduction to Quantitative Finance',
                courseLink: 'https://nusmods.com/courses/QF1100/introduction-to-quantitative-finance',
                courseGrade: 'Ongoing'
            }
        ]
    },
];

export default Coursework