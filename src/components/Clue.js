// Componente que exibe uma pista que pode ser clicada
import React, { useRef, useEffect } from 'react';
import { useClueContext } from '../context/ClueContext';

const Clue = ({ text, clueName }) => {
  const { addClue } = useClueContext();
  const clueRef = useRef(null);

  useEffect(() => {
    if (clueRef.current) {
      clueRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [clueName]);

  const handleClueClick = () => {
    addClue(clueName);
  };

  return (
    <div ref={clueRef} className="clue" onClick={handleClueClick}>
      <p>{text}</p>
    </div>
  );
};

export default Clue;