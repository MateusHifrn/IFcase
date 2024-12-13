import React from 'react';
import './Object.css';

const Object = ({ name, image, clue, style, onClick }) => {
  return (
    <div className="object" style={style} onClick={onClick}>
      <img src={image} alt={name} />
    </div>
  );
};

export default Object;
