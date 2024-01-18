import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faBookSkull, faScroll } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './App.css';

import Wordhunt from './games/wordhunt/wordhunt';
import Question from './games/question/question';
import RPS from './games/rps/rps';

function App() {
  const [jogoSelecionado, setJogoSelecionado] = useState(null);
  const [isJogoRodando, setJogoRodando] = useState(false);

  const Click = (game) => {
    setJogoSelecionado(game);
    setJogoRodando(true);
  };

  const handleMiniGameFinish = () => {
    setJogoRodando(false);
    setJogoSelecionado(null);
  };

  const renderSelectedGame = () => {
    switch (jogoSelecionado) {
      case 'wordhunt':
        return <Wordhunt progressToNextLevel={() => handleMiniGameFinish()} />;
      case 'rps':
        return <RPS progressToNextLevel={() => handleMiniGameFinish()} />;
      case 'question':
        return <Question progressToNextLevel={() => handleMiniGameFinish()} />;
      default:
        return null;
    }
  };

  return (
    <body>
      <div className="container">
        <h1 className='title'>Island's Games</h1>
        {!isJogoRodando && (
          <>
            <div className="square" onClick={() => Click('wordhunt')}>
              <FontAwesomeIcon icon={faKeyboard} size="3x" />
            </div>
            <div className="square" onClick={() => Click('rps')}>
              <FontAwesomeIcon icon={faBookSkull} size="3x" />
            </div>
            <div className="square" onClick={() => Click('question')}>
              <FontAwesomeIcon icon={faScroll} size="3x" />
            </div>
          </>
        )}
      </div>
      <div className="game-content">
        {jogoSelecionado && renderSelectedGame()}
      </div>
      <footer>
        <p>Made by Thiago Alessandro</p>
      </footer>
    </body>
  );
}

export default App;
