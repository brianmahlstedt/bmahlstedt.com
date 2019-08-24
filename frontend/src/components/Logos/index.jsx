import React from 'react';

import warriors from './images/warriors.svg';
import niners from './images/niners.svg';
import sharks from './images/sharks.svg';
import giants from './images/giants.svg';

import './Logos.css';

function Logos() {
  return (
    <div className="Logos">
      <img src={warriors} className="Logo" alt="warriors-logo"/>
      <img src={giants} className="Logo" alt="giants-logo" />
      <img src={sharks} className="Logo" alt="sharks-logo" />
      <img src={niners} className="Logo" alt="niners-logo" />
    </div>
  ); 
}

export default Logos;
