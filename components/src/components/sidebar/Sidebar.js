import React from 'react';
import './Sidebar.css';

function Sidebar ({ visible }) {
  return (
    <div className={`sidebar ${visible ? 'on' : 'off'}`}>
      
    </div>
  )
}

export default Sidebar;