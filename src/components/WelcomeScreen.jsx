// src/components/WelcomeScreen.jsx
import React from 'react';

// Este componente recibe una "prop" llamada "onStartClick".
// Es como un cable que le pasamos para que avise cuando hacen clic en el botón.
const WelcomeScreen = ({ onStartClick }) => {
  return (
    <div className="welcome-container glass-panel">
      
      <img src="/nubecita_dulce.png" alt="Logo Guardería" className="app-logo main-logo-anim" />
      <h1 className="neon-title">Centro de Cuidado "Nubecita Dulce"</h1>
      
      <h2 className="subtitle">Test de Compatibilidad Familiar</h2>
      
      <div className="intro-text">
        <p>
          Bienvenido. La seguridad y el bienestar de nuestros niños son nuestra máxima prioridad.
        </p>
        <p>
          Esta evaluación de 5 minutos nos ayudará a determinar si nuestra filosofía y protocolos se alinean con las necesidades de su familia.
        </p>
        <p className="highlight-text">
          Por favor, responda con total honestidad. No hay respuestas correctas o incorrectas, solo buscamos la mejor compatibilidad.
        </p>
      </div>

      <button className="cyber-button start-button" onClick={onStartClick}>
        INICIAR EVALUACIÓN
        <span className="btn-glitch"></span>
      </button>
    </div>
  );
};

export default WelcomeScreen;