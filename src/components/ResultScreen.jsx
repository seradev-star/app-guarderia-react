// src/components/ResultScreen.jsx
import React from 'react';

const ResultScreen = ({ totalRiskScore }) => {
  // LÓGICA DE NEGOCIO SIMPLE DENTRO DE LA VISTA:
  // Definimos el umbral. Si el padre tiene más del 25% del puntaje total posible en riesgo, es "ALTO RIESGO".
  // Con 28 preguntas y el peor caso de 20 o 25 pts, el máximo es aprox 600 pts.
  // Un umbral seguro sería que no pase de 100-120 puntos de riesgo total.
  
  const RISK_THRESHOLD = 120; // Umbral de riesgo (ajustable)
  const isHighRisk = totalRiskScore > RISK_THRESHOLD;

  const handleWhatsappClick = () => {
    // Reemplaza con tu número real de WhatsApp en formato internacional (sin el +)
    // Ejemplo Perú: 51999888777
    const phoneNumber = "948781834"; 
    const message = encodeURIComponent("Hola, he completado el test de compatibilidad y me gustaría agendar una entrevista.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="result-container glass-panel fade-in">
      <h2 className="neon-title">Evaluación Completada</h2>
      
      <div className="result-content">
        {!isHighRisk ? (
          // --- CASO DE ÉXITO (BAJO RIESGO) ---
          <div className="success-message">

            <img src="/nubecita_dulce.png" alt="Logo Guardería" className="app-logo main-logo-anim" />
            <div className="icon-box success-icon">✅</div>
            <h3>¡Perfil Compatible!</h3>
            <p>
              Sus respuestas indican una alta alineación con nuestra filosofía de seguridad y cuidado.
            </p>
            <p className="call-to-action">
              El siguiente paso es una breve entrevista virtual. Por favor, haga clic abajo para contactarnos por WhatsApp.
            </p>
            <button className="cyber-button whatsapp-button" onClick={handleWhatsappClick}>
              CONTACTAR POR WHATSAPP
            </button>
          </div>
        ) : (
          // --- CASO DE RECHAZO DIPLOMÁTICO (ALTO RIESGO) ---
          <div className="waiting-list-message">
            <div className="icon-box waiting-icon">📋</div>
            <h3>Gracias por su interés</h3>
            <p>
              Hemos analizado su perfil. En este momento, los cupos disponibles no se ajustan a la compatibilidad de horarios y protocolos reflejados en su evaluación.
            </p>
            <p>
              Mantendremos sus datos en nuestra <strong>lista de espera</strong> y lo contactaremos si se abre una vacante que se ajuste mejor a sus necesidades.
            </p>
            <p className="final-note">
              Agradecemos su tiempo y honestidad.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultScreen;