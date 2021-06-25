import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Content.css';

const Content = () => {
  return (
    <div className='content'>
      <div className='sidebar'>
        <Sidebar></Sidebar>
      </div>
      <div className='main-content'>
        <div className='message'>
          <p>
            You Clicked at <span>00: 00 : 00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
