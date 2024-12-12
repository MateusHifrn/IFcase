import React, { createContext, useState, useContext } from 'react';

const ClueContext = createContext();

export const ClueProvider = ({ children }) => {
  const [clues, setClues] = useState([]);
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