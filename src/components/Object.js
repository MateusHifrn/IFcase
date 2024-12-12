// Componente que representa um objeto clicável no site
import React from 'react';
import './Object.css';

const Object = ({ name, onClick }) => {
  return (
    <div className="object" onClick={onClick}>
      <p>{name}</p>
    </div>
  );
};

export default Object;