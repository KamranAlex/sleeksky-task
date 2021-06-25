import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <div className='click-button'>
      <button onClick={props.updateCounter}>Click Me</button>
    </div>
  );
};

export default Sidebar;
