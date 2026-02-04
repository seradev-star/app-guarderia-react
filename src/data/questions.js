// src/data/questions.js

/* SISTEMA DE PUNTAJE DE RIESGO (riskValue):
- 0 puntos: Respuesta ideal. Padre colaborador, respetuoso y alineado con la filosofía.
- 5 puntos: Respuesta aceptable. Pequeñas diferencias culturales o de estilo, manejables.
- 10 puntos: Alerta Amarilla. Indica rigidez, sobreprotección o ligera falta de respeto a las normas.
- 20 puntos: BANDERA ROJA. Indica agresividad, manipulación, negligencia grave o rechazo a la seguridad.
*/

export const questions = [
    // --- BLOQUE 1: REACCIÓN ANTE NORMAS Y LÍMITES (El filtro más importante) ---
  
    {
      id: 1,
      questionText: "Las normas de convivencia ayudan a que todo funcione. Si usted considera que una regla del centro es 'exagerada' o innecesaria para su hijo, ¿qué suele hacer?",
      options: [
        { text: "La sigo de todos modos, entiendo que las reglas son para el grupo y no solo para mí.", riskValue: 0 },
        { text: "Suelo ignorarla si siento que no tiene sentido común o afecta la comodidad de mi hijo.", riskValue: 20 },
        { text: "Pido una reunión para explicar por qué mi caso es diferente y solicito una excepción.", riskValue: 10 }, // Manipulación sutil
         // Red Flag: Desacato
      ],
    },
    {
      id: 2,
      questionText: "Imagine que se establece una hora de entrada límite (ej: 8:30 am) para no interrumpir las actividades. Si usted llega a las 8:45 am y se le indica que ya no puede ingresar, ¿cómo reacciona?",
      options: [

        { text: "Insisto un poco, explicando que fue el tráfico, esperando que 'por esta vez' me dejen pasar.", riskValue: 10 },
        { text: "Me da pena, pero entiendo que es mi responsabilidad y me retiro sin discutir.", riskValue: 0 },
        { text: "Me molesto mucho. Yo pago por un servicio y no me pueden cerrar la puerta.", riskValue: 20 }, // Red Flag: Sentido de derecho/Entitlemen

      ],
    },
    {
      id: 3,
      questionText: "Si el centro aplica una penalidad económica automática por retrasos recurrentes en la hora de salida, ¿cuál es su pensamiento?",
      options: [

        { text: "Depende. Si es una emergencia real no deberían cobrar, hablaría para que me lo perdonen.", riskValue: 5 },
        { text: "Me parece un abuso y una forma de sacar dinero extra. Un retraso lo tiene cualquiera.", riskValue: 20 },
        { text: "Es justo. El tiempo del personal vale y esto me motiva a organizarme mejor.", riskValue: 0 },
        
         // Red Flag: No valora tu tiempo
      ],
    },
  
    // --- BLOQUE 2: SEGURIDAD Y DISCRECIÓN (Vital para tu contexto en SJL) ---
  
    {
      id: 4,
      questionText: "Por seguridad estricta, nuestro protocolo exige 'perfil bajo': cero fotos del local en redes sociales y discreción sobre la ubicación. ¿Cómo se siente con esto?",
      options: [
        { text: "Creo que se esta exagerando, yo puedo tomar no afectara en nada .", riskValue: 20 }, // Red Flag TOTAL: Peligro de seguridad
        { text: "Totalmente de acuerdo y agradecido. La seguridad y privacidad es lo primero hoy en día.", riskValue: 0 },
        { text: "Lo acepto si es obligatorio, aunque me gusta compartir los logros de mi hijo en mis redes.", riskValue: 5 },
        
      ],
    },
    {
      id: 5,
      questionText: "Para evitar riesgos externos, no manejamos dinero en efectivo en el local bajo ninguna circunstancia. ¿Esto representa un problema para usted?",
      options: [
        { text: "No, me manejo bien con transferencias o billeteras digitales (Yape/Plin).", riskValue: 0 },
        { text: "Sí es un problema. Yo solo manejo efectivo y no uso bancos.", riskValue: 20 }, // Red Flag: Riesgo operativo
        { text: "A veces me es difícil, preferiría poder pagar en efectivo si estoy apurado.", riskValue: 10 }, // Alerta: Posible informalidad problemática
        
      ],
    },
  
    // --- BLOQUE 3: ESTILO DE CRIANZA Y MANEJO DE CONDUCTA (Detectar agresividad/permisividad) ---
  
    {
      id: 6,
      questionText: "En un grupo, los niños a veces pelean por juguetes. Si le informamos que su hijo empujó a un compañero para quitarle algo, ¿qué piensa primero?",
      options: [

        { text: "Quiero saber exactamente qué hizo el otro niño primero. Mi hijo no ataca de la nada.", riskValue: 20 }, // Red Flag: Defensivo/Culpa a otros
        { text: "Me preocupa. Hablaré con él en casa para reforzar que eso no se hace.", riskValue: 0 }, // Asume responsabilidad
        { text: "Es normal a esta edad. Seguro el otro niño tampoco quería compartir o lo provocó.", riskValue: 10 }, // Minimiza/Justifica
        ],
    },
    {
      id: 7,
      questionText: "Cuando su hijo hace un berrinche fuerte en un lugar público porque quiere algo, ¿cuál es su reacción más habitual?",
      options: [

        { text: "Intento negociar con él o distraerlo con otra cosa para que se calme rápido y no pasar vergüenza.", riskValue: 5 }, // Crianza evitativa
        { text: "A veces termino dándole lo que quiere para que se calle, o me altero y le grito.", riskValue: 15 }, 
        { text: "Mantengo la calma, lo aparto si es necesario, pero no cedo a lo que pide llorando.", riskValue: 0 }, // Límites sanos
        // Alerta: Falta de herramientas/Inconsistencia
      ],
    },
    {
      id: 8,
      questionText: "¿Qué opina sobre que su hijo se ensucie la ropa jugando con pintura, tierra o comiendo solo?",
      options: [
        { text: "Es parte esencial de aprender y jugar. Para eso está la ropa de cambio.", riskValue: 0 },
        { text: "Me incomodo. Si lo mando limpio, espero recogerlo limpio.", riskValue: 20 }, // Red Flag: No entiende el juego infantil
        { text: "No me gusta mucho, prefiero que las profesoras estén atentas para que se mantenga limpio.", riskValue: 10 }, // Alerta: Expectativa poco realista
        
      ],
    },
    {
      id: 9,
      questionText: "Si su hijo llega a casa diciendo que 'la profesora es mala porque no le dejó hacer algo', ¿cómo procede?",
      options: [

        { text: "Le creo a mi hijo y me preocupo. Si se repite, iré a reclamar por qué lo tratan mal.", riskValue: 20 }, // Red Flag: Desautoriza al docente
        { text: "Escucho a mi hijo, pero le explico que las profesoras ponen reglas para cuidarlos.", riskValue: 0 },
        { text: "Le digo 'pobrecito' y al día siguiente le pregunto a la profesora qué pasó exactamente.", riskValue: 5 },
        
      ],
    },
  
    // --- BLOQUE 4: COMUNICACIÓN Y CONFLICTO CON ADULTOS (Detectar padres problemáticos) ---
  
    {
      id: 10,
      questionText: "¿Cuál fue la principal razón para salir de su anterior centro de cuidado o nido? (Si es la primera vez, elija la última opción).",
      options: [
        { text: "Temas logísticos (mudanza, horarios) o buscábamos un enfoque diferente.", riskValue: 0 },
        { text: "Sentía que no le daban la atención especial que mi hijo necesita.", riskValue: 10 }, // Alerta: Expectativa de trato VIP
        { text: "Tuve diferencias irreconciliables o discusiones con el personal/dirección.", riskValue: 20 }, // Red Flag: Historial conflictivo
        { text: "Es nuestra primera experiencia.", riskValue: 0 },
      ],
    },
    {
      id: 11,
      questionText: "Si usted tiene una preocupación seria sobre algo que pasó en el día, ¿cómo prefiere manejarlo?",
      options: [

        { text: "Lo hablo directamente en la puerta a la hora de salida, delante de quien esté, para resolverlo .", riskValue: 20 }, // Red Flag: Imprudente/Confrontacional
        { text: "Solicito una breve reunión o llamada en un horario adecuado para conversarlo con calma.", riskValue: 0 },
        { text: "Envío un mensaje de texto detallado explicando mi molestia en ese momento.", riskValue: 5 },
        
      ],
    },
    {
      id: 12,
      questionText: "¿Qué espera principalmente del rol de las personas que cuidan a su hijo?",
      options: [
        
        { text: "Que lo mantengan feliz, seguro y bien atendido en sus necesidades básicas mientras yo no estoy.", riskValue: 5 },
        { text: "Que sigan mis instrucciones precisas sobre cómo debe ser tratado mi hijo, ya que yo lo conozco mejor.", riskValue: 15 }, // Alerta: No permite autonomía profesional
        { text: "Que lo mantengan feliz, seguro y bien atendido en sus necesidades básicas mientras yo no estoy.", riskValue: 5 },
        { text: "Que sean colaboradores en la crianza, ofreciendo un entorno seguro, afectuoso y con límites claros.", riskValue: 0 },
        
      ],
    },
  
    // --- BLOQUE 5: HÁBITOS Y RUTINAS (Logística y Salud) ---
  
    {
      id: 13,
      questionText: "En cuanto a la alimentación, si su hijo se niega a comer el menú saludable del día, ¿qué espera que hagamos?",
      options: [
        { text: "Que por favor le den algo que sí le guste para asegurar que no se quede con hambre.", riskValue: 15 }, // Alerta: Fomenta malos hábitos
        { text: "Que lo animen a probar sin obligarlo, pero que no le ofrezcan alternativas 'fáciles' (galletas, etc.).", riskValue: 0 },
        { text: "Que le guarden la comida para intentarlo más tarde.", riskValue: 5 },
        
      ],
    },
    {
      id: 14,
      questionText: "Si su hijo amanece con un poco de fiebre (37.8°C) o malestar, pero usted tiene que trabajar sí o sí, ¿qué hace?",
      options: [
        { text: "Busco mi plan B (familiar o permiso). Sé que no puede asistir enfermo por el bien del grupo.", riskValue: 0 },
        { text: "Le doy un medicamento para bajar la fiebre y lo llevo, esperando que no se den cuenta o que aguante.", riskValue: 20 }, // Red Flag: Pone en riesgo al grupo
        { text: "Lo llevo y aviso que está 'un poquito delicado' para que lo vigilen más.", riskValue: 15 },
      ],
    },
    {
      id: 15,
      questionText: "¿Qué tan importante considera que su hijo aprenda a hacer cosas por sí mismo (ponerse zapatos, guardar juguetes), aunque le tome tiempo?",
      options: [

        { text: "Muy importante. Prefiero que se demore intentándolo a que se lo hagan todo.", riskValue: 0 },
        { text: "Es muy pequeño todavía. Prefiero que lo ayuden para que no se frustre o se sienta mal.", riskValue: 15 }, // Alerta: Fomenta dependencia.
        { text: "Importante, pero en casa a veces lo ayudamos para ganar tiempo.", riskValue: 5 },
        
      ],
    },
  
    // --- BLOQUE 6: PREGUNTAS "PARARRAYOS" (Diseñadas para que el padre problemático se delate) ---
  
    {
      id: 16,
      questionText: "A veces pedimos materiales reciclados de casa (conos de papel, cajas) para actividades. ¿Cuál es su postura?",
      options: [

        { text: "Sinceramente, prefiero pagar una cuota extra y que ustedes se encarguen de conseguir todo.", riskValue: 15 }, // Alerta: Poca implicación
        { text: "Me parece excelente y colaboraré en lo que pueda.", riskValue: 0 },
        { text: "Trataré de acordarme, aunque a veces soy despistado con esas cosas.", riskValue: 5 },
  
      ],
    },
    {
      id: 17,
      questionText: "Si organizamos un taller para padres sobre temas de crianza (ej: manejo de berrinches) un sábado por la mañana, ¿asistiría?",
      options: [

        { text: "Sí, me interesa mucho aprender herramientas nuevas.", riskValue: 0 },
        { text: "Probablemente no. Yo ya tengo mi estilo de crianza definido y mis fines de semana son ocupados.", riskValue: 15 }, // Alerta: Cerrado a aprende
        { text: "Depende de mi horario, pero intentaría ir si el tema es útil.", riskValue: 5 },
        
      ],
    },
    {
      id: 18,
      questionText: "¿Cómo describe el nivel de energía habitual de su hijo en comparación con otros niños de su edad?",
      options: [
        { text: "Es muy intenso, un 'terremoto'. Le cuesta mucho quedarse quieto un minuto.", riskValue: 10 }, // Alerta: Requiere más personal/atención
        { text: "Promedio. Tiene momentos de energía y momentos de calma.", riskValue: 0 },
        { text: "Es bastante tranquilo, prefiere actividades sedentarias.", riskValue: 0 },
        
      ],
    },
    {
      id: 19,
      questionText: "¿Su hijo tiene alguna dificultad conocida para seguir instrucciones de adultos que no sean sus padres?",
      options: [
        { text: "Sí, es muy voluntarioso y suele retar a quien intenta mandarlo si no soy yo.", riskValue: 20 }, // Red Flag: Problemas de conducta inminentes
        { text: "No, por lo general responde bien a la autoridad de otros adultos.", riskValue: 0 },
        { text: "A veces le cuesta al principio hasta que entra en confianza, es tímido.", riskValue: 5 },
        
      ],
    },
    {
      id: 20,
      questionText: "¿Qué opina de la frase 'El cliente siempre tiene la razón' aplicada a un centro educativo/de cuidado?",
      options: [

        { text: "No aplica igual. Aquí se trata del bienestar del niño, que debe estar por encima de los deseos del padre.", riskValue: 0 },
        { text: "Totalmente de acuerdo. Si yo pago, el servicio debe ajustarse a mis requerimientos.", riskValue: 25 }, // Red Flag TOTAL: Padre tiran0
        { text: "En parte sí, porque uno paga por un servicio y debe ser escuchado.", riskValue: 10 },
        
      
      ],
    },
  
    // --- BLOQUE 7: SITUACIONES HIPOTÉTICAS FINALES (Test de estrés) ---
  
    {
      id: 21,
      questionText: "Un día su hijo sale con un rasguño pequeño en el brazo producto de un juego. Se le informa al respecto. ¿Cuál es su pensamiento interno?",
      options: [

        { text: "Me molesta que no lo hayan cuidado bien. Espero que no se repita.", riskValue: 15 }, // Alerta: Expectativa irreal de "riesgo cero"
        { text: "Son cosas que pasan cuando juegan niños juntos. Mientras me avisen, todo bien.", riskValue: 0 },
        { text: "Exijo saber quién fue el otro niño para hablar con sus padres.", riskValue: 20 }, // Red Flag: Confrontacional
      ],
    },
    {
      id: 22,
      questionText: "Se acerca el día de la madre/padre y pedimos una foto familiar para una manualidad sorpresa. Usted olvida enviarla. Su hijo es el único sin foto ese día. ¿Qué piensa?",
      options: [
        { text: "Me parece el colmo que excluyan a mi hijo por una foto. Deben darle una solución.", riskValue: 20 }, // Red Flag: Culpa al centro de su negligencia
        { text: "Me siento fatal, fue mi responsabilidad y asumo la culpa.", riskValue: 0 },
        { text: "Pienso que las profesoras debieron recordármelo más veces o buscar una solución.", riskValue: 15 }, // Alerta: No asume culpa
        
      ],
    },
    {
      id: 23,
      questionText: "¿Qué espera que haga la guardería cuando su hijo llora?",
      options: [
        { text: "Me llame de inmediato o cambie la dinámica", riskValue: 20 },
        { text: "Lo acompañe emocionalmente y le enseñe a calmarse.", riskValue: 0 },
        { text: "Me informe si el llanto es frecuente.", riskValue: 0 }, // Alerta: No respeta el descanso del niño
      ],
    },
    {
      id: 24,
      questionText: "¿Quiénes toman las decisiones importantes sobre la crianza y educación del niño en el día a día?",
      options: [
        { text: "Papá y/o mamá principalmente.", riskValue: 0 },
        { text: "Es compartido con los abuelos, ellos tienen mucha opinión.", riskValue: 10 }, // Alerta: Posible conflicto de autoridad con terceros
        { text: "Varía mucho dependiendo de con quién esté el niño ese día.", riskValue: 15 }, // Alerta: Inconsistencia en la crianza
      ],
    },
    {
      id: 25,
      questionText: "Si implementamos una nueva herramienta tecnológica (ej: una app para reportes diarios) que requiere que usted aprenda a usarla, ¿cuál es su actitud?",
      options: [
        { text: "No tengo tiempo para aprender cosas nuevas, prefiero el cuaderno de control de siempre.", riskValue: 15 },
        { text: "Me adapto, si es para mejorar la comunicación me parece bien.", riskValue: 0 },
        { text: "Me cuesta la tecnología, preferiría que me sigan mandando WhatsApp.", riskValue: 5 },
         // Alerta: Resistencia al cambio
      ],
    },
    {
      id: 26,
      questionText: "Finalmente, ¿qué frase describe mejor su visión sobre la relación entre la familia y la guardería?",
      options: [
        { text: "La guardería está para apoyarme a mí y adaptarse a las necesidades de mi familia.", riskValue: 20 }, // Visión egocéntrica
        { text: "Es un trabajo en equipo basado en la confianza y el respeto mutuo.", riskValue: 0 },
        { text: "Es un servicio que contrato para que cuiden a mi hijo mientras trabajo.", riskValue: 10 }, // Visión transaccional
        
      ],
    },
    {
      id: 27,
      questionText: "Hay padres que, por ansiedad, necesitan escribir muchas veces al día para saber cómo está su hijo. ¿Se identifica con esto?",
      options: [
        { text: "No, si sé que está en un lugar seguro, confío y me enfoco en mi trabajo.", riskValue: 0 },
        { text: "Sí, yo necesito saber casi hora a hora que mi hijo está bien para estar tranquila/o.", riskValue: 20 },
        { text: "Al principio sí me costará y seguro escribiré un par de veces hasta adaptarme.", riskValue: 5 },
        // Red Flag: Padre altamente ansioso/demandante
      ],
    }
  ];