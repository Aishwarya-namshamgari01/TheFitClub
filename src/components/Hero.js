import React from 'react'
import Header from './Header/Header'
import './Hero.css';
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png';
import NumberCounter from 'number-counter'


const Hero = () => {
    return (
        <div className='hero' id='home'>
            <div className='blur hero_blur'></div>
            <div className='left_h'>
                <Header />
                {/* Best ad */}
                <div className='best_ad'>
                    <div></div>
                    <span>The best fitness club in the town</span>
                </div>


                {/* Hero Text */}

                <div className='hero_text'>
                    <div>
                        <span className='stroke_text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal </span>
                        <span>body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape your ideal body and live up your life fullest</span>
                    </div>
                </div>

                {/* Figures */}
                <div className='figures'>
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' preFix='+' />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter end={978} start={800} delay='4' preFix='+' /></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={10} delay='4' preFix='+' /></span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* Hero buttons */}
                <div className='hero_buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className='right_h'>
                <button className='btn'>Join Now</button>
                <div className='heart'>
                    <img src={Heart} alt='heart' />
                    <span>Heart rate</span>
                    <span>116 bpm</span>
                </div>

                <img src={hero_image} alt='hero' className='hero_image' />
                <img src={hero_image_back} alt='hero' className='hero_image_back' />


                {/* Hero calories */}
                <div className='calories'>
                    <img src={Calories} alt='calories' />
                    <div>
                        <span>Calories Burned</span>
                        <span>224 cal</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero