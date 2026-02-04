// src/App.jsx
// 1. IMPORTAMOS useState Y useEffect
import { useState, useEffect } from 'react';
import './App.css';

// IMPORTAMOS LAS PIEZAS (El Cerebro y los Cuerpos)
import { questions } from './data/questions';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import ResultScreen from './components/ResultScreen';

function App() {
  // --- ESTADOS DEL DIRECTOR (El cerebro de la App) ---
  const [gameState, setGameState] = useState('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalRiskScore, setTotalRiskScore] = useState(0);

  // =================================================================
  // --- NUEVO BLOQUE: EL ASCENSOR AUTOMÁTICO (useEffect) ---
  // =================================================================
  // Este código le dice al navegador: "Cada vez que cambie la pantalla ('gameState')
  // O cambie el número de pregunta ('currentQuestionIndex'), lleva el scroll arriba de todo."
  useEffect(() => {
    // (x: 0, y: 0) son las coordenadas de la esquina superior izquierda
    window.scrollTo(0, 0);
  }, [gameState, currentQuestionIndex]); // <-- Esta lista define cuándo se activa el ascensor
  // =================================================================


  // --- FUNCIONES DE LÓGICA (Lo que sucede cuando el usuario hace algo) ---

  // Función 1: Cuando hacen clic en "INICIAR EVALUACIÓN"
  const handleStartGame = () => {
    setGameState('playing');
  };

  // Función 2: Cuando hacen clic en una opción de respuesta en la QuestionCard
  const handleOptionSelect = (riskValueDeLaOpcionElegida) => {
    setTotalRiskScore(totalRiskScore + riskValueDeLaOpcionElegida);
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setGameState('finished');
    }
  };

  // --- EL RENDERIZADO (Qué mostramos en pantalla según el estado) ---
  return (
    <div className="app-container">
      {/* ESCENA 1: PANTALLA DE BIENVENIDA */}
      {gameState === 'welcome' && (
        <WelcomeScreen onStartClick={handleStartGame} />
      )}

      {/* ESCENA 2: TARJETA DE PREGUNTA (El juego) */}
      {gameState === 'playing' && (
        <QuestionCard
           question={questions[currentQuestionIndex]}
           totalQuestions={questions.length}
           // AQUÍ ESTÁ LA CORRECCIÓN DEL CONTADOR (+1)
           currentNumber={currentQuestionIndex + 1}
           onOptionSelect={handleOptionSelect}
        />
      )}

      {/* ESCENA 3: PANTALLA DE RESULTADO FINAL */}
      {gameState === 'finished' && (
        <ResultScreen totalRiskScore={totalRiskScore} />
      )}
    </div>
  );
}

export default App;