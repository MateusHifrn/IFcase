import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ClueProvider } from './context/ClueContext';
import Mystery from './components/Mystery';
import './App.css';

const App = () => {
  const handleObjectClick = (object) => {
    alert(`Você encontrou uma pista: ${object}!`);
  };

  // Imagens dos suspeitos
  const suspectImages = {
    Magago: require('./imagens/MagagoSUS.png'),
    Patu: require('./imagens/PatuSUS.png'),
    Gatu: require('./imagens/GatuSUS.png'),
    Lula: require('./imagens/LulaSUS.jpg'),
    Ratu: require('./imagens/RatuSUS.png')
  };

  return (
    <ClueProvider>
      <Router>
        <div className="app">
          <nav>
            {/* Navegação entre páginas */}
            <Link className="nav-button" to="/">Início</Link>
            <Link className="nav-button" to="/mystery">Mistério</Link>
          </nav>
          <h1>Detetive Virtual</h1> {/* Nome do jogo no topo */}
          <div className="suspects">
            {/* Lista de suspeitos */}
            <h2>Suspeitos</h2>
            <div className="suspect-list">
              {['Magago', 'Patu', 'Gatu', 'Lula', 'Ratu'].map((suspect) => (
                <div className="suspect" key={suspect}>
                  <div className="suspect-image">
                    <img src={suspectImages[suspect]} alt={suspect} />
                  </div>
                  <p>{suspect}</p>
                </div>
              ))}
            </div>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <div className="game">
                  {/* Objetos interativos com imagens e nomes */}
                  <div className="object-list">
                    {[ 
                      { name: 'Computador', image: require('./imagens/Computador.webp'), clue: 'code fragment' },
                      { name: 'Cofre', image: require('./imagens/Cofre.png'), clue: 'password' },
                      { name: 'Mesa', image: require('./imagens/Mesa.webp'), clue: 'key' },
                      { name: 'Lixeira', image: require('./imagens/Lixeira.jpg'), clue: 'note' },
                    ].map((object) => (
                      <div className="object" key={object.name} onClick={() => handleObjectClick(object.clue)}>
                        <div className="object-image">
                          <img src={object.image} alt={object.name} />
                        </div>
                        <p>{object.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />
            <Route path="/mystery" element={<Mystery />} />
          </Routes>

          {/* Rodapé */}
          <footer>
            <p>&copy; 2024 Detetive Virtual. Todos os direitos reservados.</p>
          </footer>
        </div>
      </Router>
    </ClueProvider>
  );
};

export default App;
