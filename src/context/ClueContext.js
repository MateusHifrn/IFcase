//Contexto para gerenciar pistas no site
import React, { createContext, useState, useContext } from 'react';

const ClueContext = createContext();

export const ClueProvider = ({ children }) => {
  // Estado que armazena as pistas encontradas
  const [clues, setClues] = useState([]);

  // Função para adicionar uma pista
  const addClue = (clue) => {
    if (!clues.includes(clue)) {
      setClues((prevClues) => [...prevClues, clue]);
    }
  };

  return (
    <ClueContext.Provider value={{ clues, addClue }}>
      {children}
    </ClueContext.Provider>
  );
};

export const useClueContext = () => useContext(ClueContext);