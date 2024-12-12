import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ClueProvider } from './context/ClueContext';
import Mystery from './components/Mystery';
import Object from './components/Object';
import './App.css';

// Importando as imagens diretamente
import MagagoImage from './imagens/MagagoSUS.png';
import PatuImage from './imagens/PatuSUS.png';
import GatuImage from './imagens/GatuSUS.png';
import LulaImage from './imagens/LulaSUS.jpg';
import RatuImage from './imagens/RatuSUS.png';
import ComputadorImage from './imagens/Computador.webp';
import CofreImage from './imagens/Cofre.png';
import MesaImage from './imagens/Mesa.webp';
import LixeiraImage from './imagens/Lixeira.jpg';

const App = () => {
  // Função que lida com o clique nos objetos
  const handleObjectClick = (clue) => {
    alert(`Você encontrou uma pista: ${clue}!`);
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
    Magago: MagagoImage,
    Patu: PatuImage,
    Gatu: GatuImage,
    Lula: LulaImage,
    Ratu: RatuImage,
  };

  return (
    <ClueProvider>
      <Router>
        <div className="app">
          <header>
            <h1>Detetive Virtual</h1> {/* Nome do jogo no topo */}
          </header>

          <nav>
            <Link className="nav-button" to="/">Início</Link>
            <Link className="nav-button" to="/mystery">Mistério</Link>
          </nav>

          <div className="suspects">
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

          <div className="game">
            <div className="object-list">
              {[ 
                { name: 'Computador', image: objectImages.Computador, clue: 'code fragment' },
                { name: 'Cofre', image: objectImages.Cofre, clue: 'password' },
                { name: 'Mesa', image: objectImages.Mesa, clue: 'key' },
                { name: 'Lixeira', image: objectImages.Lixeira, clue: 'note' },
              ].map((object) => (
                <Object
                  key={object.name}
                  name={object.name}
                  image={object.image}
                  clue={object.clue}
                  onClick={() => handleObjectClick(object.clue)}
                />
              ))}
            </div>
          </div>

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
