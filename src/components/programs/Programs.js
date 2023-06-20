import React from 'react';
import './programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        <div className='programs_header'>
            <span className='stroke_text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke_text'>to shape you</span>
        </div>

        <div className='program_categories'>
            {programsData.map((program) => (
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join_now'><span>Join Now</span><img src={RightArrow} alt='right arrow'/></div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Programs