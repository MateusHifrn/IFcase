import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ClueProvider } from './context/ClueContext';
import Object from './components/Object';
import Clue from './components/Clue';
import Mystery from './components/Mistery';
import './App.css';

const App = () => {
  const handleObjectClick = (object) => {
    alert(`Você encontrou uma pista: ${object}!`);
  };

  return (
    <ClueProvider>
      <Router>
        <div className="app">
          <nav>
            <Link to="/">Início</Link>
            <Link to="/mystery">Mistério</Link>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <div className="game">
                  <h1>Detetive Virtual</h1>
                  <Object name="Computador" onClick={() => handleObjectClick('code fragment')} />
                  <Object name="Cofre" onClick={() => handleObjectClick('password')} />
                  <Clue text="Há algo no computador..." clueName="code fragment" />
                  <Clue text="O cofre contém uma senha..." clueName="password" />
                </div>
              }
            />
            <Route path="/mystery" element={<Mystery />} />
          </Routes>
        </div>
      </Router>
    </ClueProvider>
  );
};

export default App;