// src/App.jsx
import { useState } from 'react';
// Importamos los estilos (los crearemos en la Fase 5, pero dejemos la conexión lista)
import './App.css';

// IMPORTAMOS LAS PIEZAS (El Cerebro y los Cuerpos)
import { questions } from './data/questions';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import ResultScreen from './components/ResultScreen';

function App() {
  // --- ESTADOS DEL DIRECTOR (El cerebro de la App) ---

  // 1. ¿En qué pantalla estamos? ('welcome', 'playing', o 'finished')
  const [gameState, setGameState] = useState('welcome');

  // 2. ¿En qué número de pregunta vamos? (Empieza en la 0, que es la primera del array)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // 3. ¿Cuánto puntaje de riesgo lleva acumulado? (Empieza en 0)
  const [totalRiskScore, setTotalRiskScore] = useState(0);


  // --- FUNCIONES DE LÓGICA (Lo que sucede cuando el usuario hace algo) ---

  // Función 1: Cuando hacen clic en "INICIAR EVALUACIÓN"
  const handleStartGame = () => {
    // Cambiamos el estado para mostrar la pantalla de juego
    setGameState('playing');
  };

  // Función 2: Cuando hacen clic en una opción de respuesta en la QuestionCard
  const handleOptionSelect = (riskValueDeLaOpcionElegida) => {
    // A) Sumamos el puntaje de esa opción al total acumulado
    setTotalRiskScore(totalRiskScore + riskValueDeLaOpcionElegida);

    // B) Calculamos cuál es la siguiente pregunta
    const nextQuestionIndex = currentQuestionIndex + 1;

    // C) Verificamos: ¿Quedan más preguntas en la lista?
    if (nextQuestionIndex < questions.length) {
      // SI quedan: Avanzamos el índice a la siguiente pregunta
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // NO quedan: El juego terminó. Cambiamos el estado a 'finished'
      setGameState('finished');
    }
  };

  // --- EL RENDERIZADO (Qué mostramos en pantalla según el estado) ---
  return (
    <div className="app-container">
      {/* Usamos "Renderizado Condicional" (&&).
          Si la condición de la izquierda es verdadera, muestra el componente de la derecha. */}

      {/* ESCENA 1: PANTALLA DE BIENVENIDA */}
      {gameState === 'welcome' && (
        // Le pasamos la función handleStartGame al cable "onStartClick"
        <WelcomeScreen onStartClick={handleStartGame} />
      )}

      {/* ESCENA 2: TARJETA DE PREGUNTA (El juego) */}
      {gameState === 'playing' && (
        <QuestionCard
           // Le pasamos los datos de la pregunta ACTUAL según el índice
           question={questions[currentQuestionIndex]}
           // Le pasamos el total de preguntas para que sepa cuántas son
           totalQuestions={questions.length}
           // Le pasamos el número actual (+1 porque el índice empieza en 0 pero contamos desde 1)
           currentNumber={currentQuestionIndex + 1}
           // Le pasamos la función que debe ejecutar cuando elijan una opción
           onOptionSelect={handleOptionSelect}
        />
      )}

      {/* ESCENA 3: PANTALLA DE RESULTADO FINAL */}
      {gameState === 'finished' && (
        // Solo necesitamos pasarle el puntaje total final
        <ResultScreen totalRiskScore={totalRiskScore} />
      )}
    </div>
  );
}

export default App;