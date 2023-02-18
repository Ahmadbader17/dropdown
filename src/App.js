import React from 'react';
import Dropdown from './Dropdown';
import './App.css';

const App = () => {
  const items = ['Artificial Intelligence', 'Machine Learning', 'Metaverse', 'Quantum Computing'];

  return (
    <div className="App">
      <h1>Career Fields to Choose
      </h1>
      <Dropdown items={items} />
    </div>
  );
};

export default App;
