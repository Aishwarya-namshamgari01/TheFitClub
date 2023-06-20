import React from 'react'
import Logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt='logo' className='logo' />
        <ul className='header_menu'>
            <li>Home</li>
            <li>programs</li>
            <li>why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header