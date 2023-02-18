import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ items }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsExpanded(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onMouseEnter={() => setIsExpanded(true)}>
        Select {selectedItem || 'an option'}
        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
      </button>
      {isExpanded && (
        <ul className="dropdown-list">
          {items.map((item) => (
            <li key={item} className="dropdown-item" onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
