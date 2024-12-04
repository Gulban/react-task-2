import  { useState } from 'react';
import './Collapse.css'; 

function Collapse ({ title , children })  {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      <div
        className={`collapse-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: isOpen ? '200px' : '0px' }} 
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
