import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => updateTime(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  const updateTime = () => {
    setDate(new Date());
  };

  const formatedDate = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });
  return (
    <div className='header'>
      <Logo></Logo>
      <p className='time'>
        Current Time is <span>{formatedDate}</span>{' '}
      </p>
    </div>
  );
};

export default Header;
