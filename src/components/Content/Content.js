import React, { useContext, useState } from 'react';
import { CounterContext } from '../../App';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './Content.css';

const Content = () => {
  const [counter, setCounter] = useContext(CounterContext);
  const [newTime, setNewTime] = useState([]);

  const updateCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    const newDate = new Date();
    setNewTime([...newTime, newDate]);
  };

  console.log(newTime);
  return (
    <div className='content'>
      <div className='sidebar'>
        <Sidebar updateCounter={() => updateCounter()}></Sidebar>
      </div>
      <div className='main-content'>
        <div className='message'>
          {newTime
            .slice(0)
            .reverse()
            .map((time, index) => (
              <p key={index}>
                You Clicked at <span>{time.toLocaleTimeString()}</span>
              </p>
            ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Content;
