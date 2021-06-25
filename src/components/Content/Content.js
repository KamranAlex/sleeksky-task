import React from 'react';
import Footer from '../Footer/Footer';
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
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Content;
