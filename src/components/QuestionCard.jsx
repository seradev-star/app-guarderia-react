// src/components/QuestionCard.jsx
import React from 'react';

const QuestionCard = ({ 
  question,           // Objeto con los datos de la pregunta actual
  totalQuestions,     // Número total de preguntas (28)
  currentNumber,      // Número de la pregunta actual (ej: 1, 5, 28)
  onOptionSelect      // Función para avisar cuál opción se eligió
}) => {
  return (
    <div className="question-card glass-panel slide-in">
      <div className="progress-indicator">
        <span className="question-number">PREGUNTA {currentNumber} / {totalQuestions}</span>
        {/* Aquí podríamos poner una barra de progreso visual más adelante */}
      </div>

      <h3 className="question-text">{question.questionText}</h3>

      <div className="options-list">
        {/* Usamos .map() para convertir la lista de opciones en botones */}
        {question.options.map((option, index) => (
          <button 
            key={index} 
            className="cyber-button option-button"
            // Al hacer clic, avisamos al padre el puntaje de riesgo de esta opción
            onClick={() => onOptionSelect(option.riskValue)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;