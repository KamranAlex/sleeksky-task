import React, { useContext, useState } from 'react';
import { CounterContext } from '../../App';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './Content.css';

const Content = () => {
  const [counter, setCounter] = useContext(CounterContext);

  const updateCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };
  return (
    <div className='content'>
      <div className='sidebar'>
        <Sidebar updateCounter={() => updateCounter()}></Sidebar>
      </div>
      <div className='main-content'>
        <div className='message'>
          <p>
            You Clicked at <span>00: 00 : 00</span>
          </p>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Content;
