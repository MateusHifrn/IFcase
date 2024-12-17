import React, { useState } from 'react';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import { ClueProvider } from './context/ClueContext';
import './App.css';

import salgadinho from './imagens/salgadinho.png';
import cofre from './imagens/Cofre.png';
import CenaCrimeImage from './imagens/Cenadecrime2.png';
import BarbaraImage from './imagens/Barbara.jpg';
import CarinaImage from './imagens/Carina.jpg';
import CassianoImage from './imagens/Cassiano.jpg';
import NiloImage from './imagens/Nilo.jpg';
import TiagoImage from './imagens/Tiago.jpg';
import DetetiveSiteImage from './imagens/Detetivesite.png';
import maçodecigarro from './imagens/maçodecigarro.png';
import peçadexadrez from './imagens/peçadexadrez.png';
import tecidoverde from './imagens/tecidoverde.png';
import desenho from './imagens/desenhomacabro.png';
import pendrive from './imagens/pendrive.png';
import bottom from './imagens/bottom.png';
import chaves from './imagens/chaves da moto.png'; 
import vitima from './imagens/vitima.png'; 

const App = () => {
  const [sceneVisible, setSceneVisible] = useState(false);
  const [hoveredSuspect, setHoveredSuspect] = useState(null);
  const [selectedSuspect, setSelectedSuspect] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameOver2, setGameOver2] = useState(false);
  const [message, setMessage] = useState("");
  const [crimeDetails, setCrimeDetails] = useState("");
  const [visible, setVisible] = useState(false);
  const [activeContent, setActiveContent] = useState(null);
  const [hoveredVictim, setHoveredVictim] = useState(false);

  const handleStartClick = () => {
    setSceneVisible(true);
  };

  const handleRestartClick = () => {
    setSceneVisible(false);
    setSelectedSuspect(null);
    setGameOver(false);
    setMessage("");
  };

  const handleSuspectSelection = (suspect) => {
    setSelectedSuspect(suspect);
    const culprit = "Cassiano Menta";
    if (suspect === culprit) {
      setMessage(`Parabéns! ${suspect} é o culpado! Você solucionou o caso!`); 
      setCrimeDetails(`
        MOTIVAÇÃO DO CRIME - Cassiano e Beatrice
        
        Antes da festa, Cassiano e Beatrice haviam descoberto sobre o cofre da mansão e planejaram juntos abri-lo. Porém, durante a festa, Cassiano percebeu que Beatrice queria ficar com tudo sozinha. Isso o deixou furioso. Ele já havia fantasiado a morte dela em seus desenhos macabros, imaginando o pior cenário. Durante uma discussão no andar superior, próximo ao corrimão, a raiva tomou conta e, em um momento de impulso, Cassiano a empurrou, concretizando o que antes era apenas um desenho.
        
        Além disso:
        
        O pendrive deixado nos destroços indica que ele pode ter deixado cair rapidamente durante a briga junto ao desenho.
      `);
      setGameOver(true);
    } else {
      setMessage(`Não foi ${suspect}. Continue investigando!`);
      setGameOver2(true);
      simularCrash(); 
    }  
  };

  const pistas = [
    { id: 1, imagem: maçodecigarro, descricao: "Um maço de cigarro próximo à escadas" },
    { id: 2, imagem: chaves, descricao: "Uma chave de moto caída perto dos degraus." },
    { id: 4, imagem: salgadinho, descricao: "Um pacote de salgadinhos amassado, caído no sofá." },
    { id: 5, imagem: desenho, descricao: "Desenho macabro, caído próximo à escada, com um lado quebrado." },
    { id: 6, imagem: pendrive, descricao: "Um pendrive com playlists de músicas, encontrado perto dos destroços." },
    { id: 7, imagem: tecidoverde, descricao: "Um lenço de tecido verde preso no corrimão quebrado." },
    { id: 8, imagem: peçadexadrez, descricao: "Uma peça de xadrez perto de onde era o corpo." },
    { id: 9, imagem: bottom, descricao: "Um broche colecionável no chão." },
  ];

  const simularCrash = () => {
    
    if (window.confirm("Você errou! O site está fechando...")) {
      window.close(); 
    }
   
    window.location.href = '/error'; 
  };

  const toggleContent = (contentId) => {
    setActiveContent(activeContent === contentId ? null : contentId);
  };

  const victimImage = vitima; 
  const victimDescription = 'Idade: 24 anos. Personalidade: Típica popular, carismática e cheia de energia. No entanto, por trás de seu charme e simpatia, havia uma forte dose de arrogância e extremamente manipuladora quando queria.'; 

  const suspectImages = {
    "Barbara Lima": BarbaraImage,
    "Carina Leone": CarinaImage,
    "Cassiano Menta": CassianoImage,
    "Milo Castelo": NiloImage,
    "Tiago Fritz": TiagoImage,
  };

  const suspectDescriptions = {
    "Barbara Lima": "Idade: 20 anos. Peso: 50 Kg. Personalidade: Calma e amante da natureza. Veio apenas porque seus amigos insistiram.",
    "Carina Leone": "Idade: 22 anos. Peso: 58 Kg. Personalidade: Cérebro do grupo, gosta de enigmas e objetos colecionáveis. Ela foi porque adora explorar lugares antigos.",
    "Cassiano Menta": "Idade: 21 anos. Peso: 67 Kg. Personalidade: Introvertido, amante de música pesada e de artes sombrias. Ele trouxe a música para a festa.",
    "Milo Castelo": "Idade: 23 anos. Peso: 96 Kg. Personalidade: Nerd, apaixonado por tecnologia e jogos de tabuleiro. Ele foi convidado porque trouxe snacks e música.",
    "Tiago Fritz": "Idade: 25 anos. Peso: 72 Kg. Personalidade: Rebelde, aventureiro e desafiador. Ele sugeriu a festa na mansão abandonada.",
  
  };

  return (
    <ClueProvider>
      <Router>
        <div className="app">
          <header>
            <h1>IF CASE</h1>
          </header>

          <div className="story-container">
            <img
              src={DetetiveSiteImage}
              alt="Detetive Site"
              className="story-image"
            />
          </div>
          <div className="story">
            <p>
              A festa na mansão abandonada estava animada, mas algo deu
              terrivelmente errado. No meio da noite, um grito ecoou pelo
              corredor: Beatrice Portinari foi empurrada do corrimão quebrado
              do andar superior, caindo no chão com um estrondo mortal. O caos
              tomou conta, e todos fugiram do local, deixando para trás uma
              série de pistas que podem levar à verdade. Agora, é sua missão
              investigar a cena do crime!
            </p>
          </div>

          <div className="hint-text">
            <p>
              ★ Analise o depoimento de cada suspeito e objetos dispersos pela sala para conectar as informações e descobrir quem foi o responsável pela morte de Beatrice. O que aconteceu naquela noite? A resposta está nas pistas que ela deixou para trás.
            </p>
          </div>

          <nav>
            <Link className="nav-button" to="/" onClick={handleStartClick}>
              Início
            </Link>
            <button className="restart-button" onClick={handleRestartClick}>
              Reiniciar
            </button>
          </nav>

          <div className="victim">
      <h2>A vítima: </h2>
      <div className="victim-item">
        <div
          className="victim-image"
          onMouseEnter={() => setHoveredVictim(true)}
          onMouseLeave={() => setHoveredVictim(false)}
        >
          <img src={victimImage} alt="Vítima" />
          {hoveredVictim && (
            <div className="victim-description">
              <p>{victimDescription}</p>
            </div>
          )}
        </div>
        <p>Beatrice Portinari </p>
      </div>
    </div>

          <div className="suspects">

            <h2>Suspeitos</h2>
            <div className="suspect-list">
              {Object.keys(suspectImages).map((suspect) => (
                <div
                  className="suspect"
                  key={suspect}
                  onMouseEnter={() => setHoveredSuspect(suspect)}
                  onMouseLeave={() => setHoveredSuspect(null)}
                >
                  <div className="suspect-image">
                    <img src={suspectImages[suspect]} alt={suspect} />
                    {hoveredSuspect === suspect && (
                      <div className="suspect-description">
                        <p>{suspectDescriptions[suspect]}</p>
                      </div>
                    )}
                  </div>
                  <p>{suspect}</p>
                </div>
              ))}
            </div>
          </div>

          {sceneVisible && (
            <div className="alegacoes">
              <div className="crime-scene-container">
                <div className="collapse-buttons">
                  <button className="collapse-button" onClick={() => toggleContent(1)}>
                    Depoimento 1
                  </button>
                  <button className="collapse-button" onClick={() => toggleContent(2)}>
                  Depoimento 2
                  </button>
                  <button className="collapse-button" onClick={() => toggleContent(3)}>
                  Depoimento 3
                  </button>
                  <button className="collapse-button" onClick={() => toggleContent(4)}>
                  Depoimento 4
                  </button>
                  <button className="collapse-button" onClick={() => toggleContent(5)}>
                  Depoimento 5
                  </button>
                </div>

                {activeContent === 1 && (
                  <div className="collapse-content">Barbara Lima: "Eu estava na
                  sala procurando
                  meu broche, que
                  caiu perto da
                  escada. Ouvi a Carina Leone falar algo
                  sobre um mapa
                  que ela esqueceu
                  na mesa. Parecia
                  que alguém
                  estava brigando
                  perto do corrimão
                  quebrado,mas
                  não vi quem."</div>
                )}
                {activeContent === 2 && (
                  <div className="collapse-content"> Carina Leone: "Eu subi para explorar e deixei meu mapa na mesa. Vi o Thiago perto da escada, procurando algo A última vez que vi a vítima foi quando ela desceu com pressa... Ah, acho que o Milo tava no sofá, ele viu mais coisa que eu."</div>
                )}
                {activeContent === 3 && (
                  <div className="collapse-content"> Cassiano: "Eu fiquei sentado no canto ouvindo música no meu celular. Não vi nada demais, só Milo largado no sofá. Quando ouvi o barulho do corrimão, já estava todo mundo confuso. Acho que alguém fez isso pra pegar algo importante da vítima."</div>
                )}
                {activeContent === 4 && (
                  <div className="collapse-content"> Milo: "Fiquei sentado comendo salgadinhos. Vi o Cassiano mexendo no celular perto da escada e logo depois ouvi O barulho do corrimão. Ele disse que ficou no canto ouvindo música, mas ele tava andando também, não tava parado, não!"</div>
                )}
                {activeContent === 5 && (
                  <div className="collapse-content">Thiago Fritz: "Perdi minha chave de moto. Eu estava no andar de baixo quando ouvi um grito e vi o corrimão caído Só lembro da Carina saindo com pressa e o Cassiano tentando esconder alguma coisa perto do cofre. Foi estranho, mas fiquei na minha."</div>
                )}

                <div className="crime-scene" style={{ backgroundImage: `url('crime-scene.jpg')` }}></div>
              </div>
            </div>
          )}

          {sceneVisible && (
            <div className="crime-scene" style={{ backgroundImage: `url(${CenaCrimeImage})` }}>
            </div>
          )}

          {sceneVisible && (
           
              <div className="pistas-container">
      {pistas.map((pista) => (
        <div className="pista-item" key={pista.id}>
          <img
            src={pista.imagem}
            alt={`Pista ${pista.id}`}
            className="pista-imagem"
          />
          <div><p className="pista-descricao">{pista.descricao}</p></div>
          
        </div>
      ))}
    </div>
            
          )}

          {sceneVisible && (
            <div className="suspect-buttons">
              <h3>Escolha o culpado:</h3>
              {Object.keys(suspectImages).map((suspect) => (
                <button
                  key={suspect}
                  className="suspect-button"
                  onClick={() => handleSuspectSelection(suspect)}
                >
                  {suspect}
                </button>
              ))}
            </div>
          )}

          {gameOver && (
            <div className="game-over-message">
              <p>{message}</p>
              <p className='crimedetailss'>{crimeDetails}</p>
              {typeof message === 'string' && message.includes("Continue investigando") && (
                <button className="restart-button" onClick={handleRestartClick}>
                  Tente Novamente!
                </button>
              )}
            </div>
          )}

         {gameOver2 && (
            <div className="game-over-message">
              {message && <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>}
            
             
            </div>
          )}

          <footer>
            <p>© 2024 Detetive Virtual - Todos os direitos reservados</p>
          </footer>
        </div>
      </Router>
    </ClueProvider>
  );
};

export default App;
