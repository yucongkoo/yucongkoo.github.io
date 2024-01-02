import React from 'react';
import './Coursework.css';

const Coursework = () => {

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
                                        {' '}({e.courseGrade}) {' '}
                                    </span>
                                    
                                    {
                                        e.courseGradeLink 
                                        ? (<a href={e.courseGradeLink} target='_blank' rel='noreferrer'>
                                                <i className='uil uil-external-link-alt'></i>
                                            </a>) 
                                        : ''
                                    }
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

  return (
    <section className='coursework section' id='coursework'>
        <h2 className='sectionTitle'>Courseworks</h2>
        <span className='sectionSubtitle'>Relevant courses I took in university</span>

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
                courseGrade: 'TopStudent',
                courseGradeLink: 'https://credentials.nus.edu.sg/5f0929c4-1e09-433f-887b-bdab2ef923ff'
            },
            {
                course: 'MA2001 Linear Algebra I',
                courseLink: 'https://nusmods.com/courses/MA2001/linear-algebra-i',
                courseGrade: 'A+'
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
                courseGrade: 'A+'
            },
            {
                course: 'CS2105 Introduction to Computer Networks',
                courseLink: 'https://nusmods.com/courses/CS2105/introduction-to-computer-networks',
                courseGrade: 'A+'
            },
            {
                course: 'CS2106 Introduction to Operating Systems',
                courseLink: 'https://nusmods.com/courses/CS2106/introduction-to-operating-systems',
                courseGrade: 'Grading In Progress'
            },
        ]
    },
    {
        header: 'AY23/24 Semester 2',
        data: [
            {
                course: 'CS2109S Introduction to AI and Machine Learning',
                courseLink: 'https://nusmods.com/courses/CS2109S/introduction-to-ai-and-machine-learning',
                courseGrade: 'Ongoing'
            },
            {
                course: 'ST2334 Probability and Statistics',
                courseLink: 'https://nusmods.com/courses/ST2334/probability-and-statistics',
                courseGrade: 'Ongoing'
            },
        ]
    },
];

export default Coursework