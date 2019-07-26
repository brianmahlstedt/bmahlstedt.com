import React from 'react';
import warriors from './warriors.svg';
import niners from './niners.svg';
import sharks from './sharks.svg';
import giants from './giants.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={warriors} className="Logo" alt="warriors-logo"/>
      <img src={giants} className="Logo" alt="giants-logo" />
      <img src={sharks} className="Logo" alt="sharks-logo" />
      <img src={niners} className="Logo" alt="niners-logo" />
    </div>
  ); 
}

export default App;
