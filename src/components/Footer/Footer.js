import React, { useContext } from 'react';
import { CounterContext } from '../../App';
import './Footer.css';

const Footer = () => {
  const [counter, setCounter] = useContext(CounterContext);
  return (
    <div className='footer'>
      <p>
        You clicked <span>{counter}</span> Times
      </p>
    </div>
  );
};

export default Footer;
