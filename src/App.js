import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ClueProvider } from './context/ClueContext';
import Mystery from './components/Mystery';
import Object from './components/Object';
import './App.css';

// Importando as imagens diretamente
import fundodepreso from './imagens/FundoDePreso.jpg';
import ComputadorImage from './imagens/Computador.webp';
import CofreImage from './imagens/Cofre.png';
import MesaImage from './imagens/Mesa.webp';
import LixeiraImage from './imagens/Lixeira.jpg';
import CenaCrimeImage from './imagens/cenacrime.jpg';

const App = () => {
  const [sceneVisible, setSceneVisible] = useState(false);
  const [foundClues, setFoundClues] = useState([]);

  // Função que exibe a cena ao clicar em "Início"
  const handleStartClick = () => {
    setSceneVisible(true);
  };

  // Função que lida com o clique nos objetos
  const handleObjectClick = (clue) => {
    if (!foundClues.includes(clue)) {
      alert(`Você encontrou uma pista: ${clue}!`);
      setFoundClues([...foundClues, clue]);
    } else {
      alert('Você já encontrou essa pista!');
    }
  };

  // Função que reinicia o estado
  const handleRestartClick = () => {
    setSceneVisible(false);
    setFoundClues([]);
  };

  // Lista de imagens dos objetos
  const objectImages = {
    Computador: ComputadorImage,
    Cofre: CofreImage,
    Mesa: MesaImage,
    Lixeira: LixeiraImage,
  };

  // Imagens dos suspeitos
  const suspectImages = {
    Maria: fundodepreso,
    João: fundodepreso,
    Gustavo: fundodepreso,
    Luiza: fundodepreso,
    Carlos: fundodepreso,
  };

  // Posicionamento dos objetos no cenário
  const objectPositions = [
    { name: 'Computador', image: objectImages.Computador, clue: 'code fragment', top: '20%', left: '15%' },
    { name: 'Cofre', image: objectImages.Cofre, clue: 'password', top: '40%', left: '50%' },
    { name: 'Mesa', image: objectImages.Mesa, clue: 'key', top: '60%', left: '30%' },
    { name: 'Lixeira', image: objectImages.Lixeira, clue: 'note', top: '57%', left: '80%' },
  ];

  return (
    <ClueProvider>
      <Router>
        <div className="app">
          <header>
            <h1>DETETIVE VIRTUAL</h1>
          </header>

          <nav>
            <Link className="nav-button" to="/" onClick={handleStartClick}>
              Início
            </Link>
            <Link className="nav-button" to="/mystery">
              Mistério
            </Link>
            <button className="restart-button" onClick={handleRestartClick}>
              Reiniciar
            </button>
          </nav>

          <div className="suspects">
            <h2>Suspeitos</h2>
            <div className="suspect-list">
              {['Maria', 'João', 'Gustavo', 'Luiza', 'Carlos'].map((suspect) => (
                <div className="suspect" key={suspect}>
                  <div className="suspect-image">
                    <img src={suspectImages[suspect]} alt={suspect} />
                  </div>
                  <p>{suspect}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cena do crime */}
          {sceneVisible && (
            <div
              className="crime-scene"
              style={{ backgroundImage: `url(${CenaCrimeImage})` }}
            >
              {objectPositions.map((object) => (
                <Object
                  key={object.name}
                  name={object.name}
                  image={object.image}
                  clue={object.clue}
                  style={{ top: object.top, left: object.left }}
                  onClick={() => handleObjectClick(object.clue)}
                />
              ))}
            </div>
          )}

          <Routes>
            <Route path="/mystery" element={<Mystery />} />
          </Routes>

          <footer>
            <p>© 2024 Detetive Virtual - Todos os direitos reservados</p>
          </footer>
        </div>
      </Router>
    </ClueProvider>
  );
};

export default App;
