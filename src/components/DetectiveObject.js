import React from 'react';
import './Object.css';

const DetectiveObject = ({ name, clue, style, onClick }) => {
  return (
    <div className="object" style={style} onClick={() => onClick(clue)}>
      <div className="object-box">
        <p className="object-name">{name}</p>
      </div>
    </div>
  );
};

export default DetectiveObject;
