import React, { useState } from 'react';
import './wordhunt.css';

function Wordhunt({ progressToNextLevel }) {
  const [entradaUsuario, setEntradaUsuario] = useState('');
  const [foiBemSucedido, setFoiBemSucedido] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');
  const mensagemOriginal = "The Real Slim Shady";
  const mensagemCriptografada = mensagemOriginal.split('').map(char => 
    char === ' ' ? ' ' : 
    char === '.' ? '.' : 
    String.fromCharCode(char.charCodeAt(0) + 3)
  ).join('');

  const lidarComConclusao = () => {
    if (entradaUsuario.trim() === mensagemOriginal) {
      setFoiBemSucedido(true);
      setTimeout(progressToNextLevel, 1500);
    } else {
      setMensagemErro('Resposta Incorreta. Tente Novamente!');
      setTimeout(() => {
        setMensagemErro('');
      }, 3000);
    }
  };

  return (
    <div className="container">
      <h2>Adivinhe o nome encriptografado!</h2>
      <p><strong>May I have your attention, please?</strong> Will the *** **** **** ***** please stand up?</p>
      <p className="Cripto">{mensagemCriptografada}</p>
      <textarea
        className="textarea"
        value={entradaUsuario}
        onChange={e => setEntradaUsuario(e.target.value)}
        placeholder="Decifre a mensagem aqui"
        rows="3"
      />
      <br />
      {!foiBemSucedido && !mensagemErro && <button className="button" onClick={lidarComConclusao}>Descriptografar e Enviar</button>}
      {foiBemSucedido && <div>Correto! Você descriptografou a mensagem.</div>}
      {mensagemErro && <div className="error-message">{mensagemErro}</div>}
    </div>
  );

}

export default Wordhunt;
