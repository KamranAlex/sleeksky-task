import React from 'react';
import img from './SleekSky_logo_lightbg.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='logo-content'>
      <img src={img} alt='' />
    </div>
  );
};

export default Logo;
