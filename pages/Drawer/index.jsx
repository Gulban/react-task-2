import React, { useState } from 'react';
import './Drawer.css';  

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
    
      <button className="drawer-toggle" onClick={toggleDrawer}>
        {isOpen ? 'Close Drawer' : 'Open Drawer'}
      </button>

      
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-content">
          <h2>Drawer Content</h2>
          <p>This is the content inside the drawer.</p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

