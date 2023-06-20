import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <div className='join'>
        <div className='left_j'>
            <hr />
        <div>
            <span className='stroke_text'>Ready to </span>
            <span>level up</span>
        </div>
        <div>
            <span>your body </span>
            <span className='stroke_text'>with us?</span>
        </div>
        </div>
        <div className='right_j'>
            <form action='' className='email_form' >
                <input type='email' name='email' placeholder='Enter your email to join' />
                <button className='btn btn_join'>Join now</button>
            </form>
        </div>
    </div>
  )
}

export default Join