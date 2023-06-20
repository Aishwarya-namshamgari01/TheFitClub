import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';


const Footer = () => {
    return (
        <div className='footer_container'>
            <hr />
            <div className='footer'>
                <div className='social_links'>
                    <img src={Github} alt='Github' />
                    <img src={Instagram} alt='Instagram' />
                    <img src={LinkedIn} alt='LinkedIn' />
                </div>
                <div className='logo_f'>
                    <img src={Logo} alt={Logo} />
                </div>

            </div>
        </div>
    )
}

export default Footer