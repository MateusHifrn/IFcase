

import React from 'react';
import './Object.css';

const DetectiveObject = ({ name, image, clue, style, onClick }) => {
  return (
    <div className="object" style={style} onClick={onClick}>
      <img src={image} alt={name} />
    </div>
  );
};

export default DetectiveObject;
