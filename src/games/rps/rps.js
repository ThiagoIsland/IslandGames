import React, { useState } from 'react';
import './rps.css';
 
function RPS({progressToNextLevel}) {
  const [escolhaUser, setEscolhaUser] = useState('');
  const [escolhaComputer, setEscolhaComputer] = useState('');
  const [result, setResult] = useState('');

  const escolhas = ['pedra', 'papel', 'tesoura'];

  const Click = (escolha) => {
    setEscolhaUser(escolha);
    gerarEscolhaComputer();
    getResult();
  };

  const gerarEscolhaComputer = () => {
    const escolhaAleat = escolhas[Math.floor(Math.random() * escolhas.length)];
    setEscolhaComputer(escolhaAleat);
  };

  const getResult = () => {
    switch (escolhaUser + escolhaComputer) {
      case 'tesourapapel':
      case 'pedratesoura':
      case 'papelpedra':
        setResult("VOCÊ VENCEUUUU");
        break;
      case 'papeltesoura':
      case 'tesourapedra':
      case 'pedrapapel':
        setResult("Você perdeu...");
        break;
      case 'papelpapel':
      case 'tesouratesoura':
      case 'pedrapedra':
        setResult("EMPATEEE");
        break;
      default:
        setResult('');
    }
  };

  return (
    <div id="jogo">
      <h1>Jogador: {escolhaUser}</h1>
      <h1>BOT: {escolhaComputer}</h1>
      <h1>{result}</h1>
      {escolhas.map((escolha) => (
        <button key={escolha} onClick={() => Click(escolha)}>
          {escolha}
        </button>
      ))}
    </div>
  );
}

export default RPS;
