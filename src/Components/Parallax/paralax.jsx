import React from 'react';
import './parallax.css';

const parallax = ({ image, caption }) => {
  return (
    <div className="parallax-container">
      <div className="parallax" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="caption">{caption}</div>
    </div>
  );
};

export default parallax;