// Componente que verifica se todas as pistas foram encontradas e exibe o resultado do mistério
import React from 'react';
import { useClueContext } from '../context/ClueContext';

const Mystery = () => {
  const { clues } = useClueContext();  // Pegando as pistas do contexto

  const solveMystery = () => {
    return clues.includes('password') && clues.includes('code fragment')
      ? 'Parabéns! Você resolveu o mistério! O código foi roubado por João!'
      : 'Continue procurando as pistas.';
  };

  return (
    <div className="mystery">
      <h2>Resultado do Mistério</h2>
      <p>{solveMystery()}</p>
    </div>
  );
};

export default Mystery;
