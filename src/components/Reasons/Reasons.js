import React from 'react'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import tick from '../../assets/tick.png'
import nike from '../../assets/nike.png'
import adidas from '../../assets/adidas.png';
import nb from '../../assets/nb.png'
import './Reasons.css';

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className='left_r'>
        <img src={image1} alt='image1'/>
        <img src={image2} alt='image2'/>
        <img src={image3} alt='image3'/>
        <img src={image4} alt='imag4'/>
        </div>
        <div className='right_r'>
            <span>Some Reasons</span>
            <div>
                <span className='stroke_text'>why </span>
                <span>choose us ?</span>
            </div>
            <div className='details_r'>
            <div>
                <img src={tick} alt='tick' />
                <span>Over 140+ expert coahes</span>
            </div>
            <div>
                <img src={tick} alt='tick' />
                <span>Train smarter and faster than before</span>
            </div>
            <div>
                <img src={tick} alt='tick'/>
                <span>1 free program for new member</span>
            </div>
            <div>
                <img src={tick} alt='tick'/>
                <span>Reliable partners</span>
            </div>
            </div>
            <span style={{
                color: "var(--gray)",
                fontWeight: 'normal'
            }}>Our Partners</span>
            <div className='partners'>
                <img src={nb} alt='nb' />
                <img src={nike} alt='nike' />
                <img src={adidas} alt='adidas' />

            </div>
        </div>
    </div>
  )
}

export default Reasons