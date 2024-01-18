import React, { useState } from 'react';
import './question.css';

function Question({ progressToNextLevel }) {
  const [atualPergunta, setAtualPergunta] = useState(0);
  const [RespSelecionada, setRespSelecionada] = useState(null);
  const [estaCerto, setEstaCerto] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const perguntas = [
    {
      question: 'Qual a franquia mais RENTAVEL do mundo?',
      options: ['Pokemon', 'Mickey Mouse', 'Super Mario', 'Bob Espoja'],
      correctAnswer: 0
    },
    {
      question: 'Qual dessas não é uma música do cantor Eminem?',
      options: ['Whithout Me', 'Patiently Waiting', 'The Real Slim Shady', 'Marshall Matthers'],
      correctAnswer: 1
    },
    {
      question: 'Qual é o mangá mais vendido da história?',
      options: ['Dragon Ball', 'Kimetsu no Yaiba', 'Naruto', 'One Piece'],
      correctAnswer: 3
    },
    {
    question: 'Qual dessas franquias não pertecen a Rockstar?',
    options: ['Red Dead Redemption', 'GTA', 'Forza', 'Bully'],
    correctAnswer: 2
    }   
  ];

  const handleAnswer = () => {
    const correct = RespSelecionada === perguntas[atualPergunta].correctAnswer;
    setEstaCerto(correct);
    setShowFeedback(true);
  
    setTimeout(() => {
      if (correct) {
        if (atualPergunta + 1 < perguntas.length) {
          setAtualPergunta((prev) => prev + 1);
          setRespSelecionada(null);
          setShowFeedback(false);
        } else {
          progressToNextLevel();
        }
      } else {
        setShowFeedback(false);
      }
    }, 1500);
  };  

  return (
    <div className="container" style={{ paddingBottom: '160px' }}>
      <h2>Questionario</h2>
      <p className="trivia-question">{perguntas[atualPergunta].question}</p>
      {perguntas[atualPergunta].options.map((option, index) => (
        <div 
          key={index}
          className={`option-box ${RespSelecionada === index ? "selected" : ""}`}
          onClick={() => setRespSelecionada(index)}
        >
          <input 
            className="option-input"
            type="radio" 
            value={index} 
            checked={RespSelecionada === index}
            onChange={() => {}}
            readOnly
          />
          {option}
        </div>
      ))}
      {!showFeedback && <button className="button" onClick={handleAnswer}>Confirme sua resposta</button>}
      {showFeedback && (
        <div style={{ color: estaCerto ? 'white' : 'red' }}>
          {estaCerto ? "Muito bem, você acertou!" : "Que pena, tente novamente!"}
        </div>
      )}
    </div>
  );
}

export default Question;
