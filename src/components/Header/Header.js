import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <Logo></Logo>
      <p className='time'>
        Current Time is <span> 00: 00 : 00</span>{' '}
      </p>
    </div>
  );
};

export default Header;
