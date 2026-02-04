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
        { text: "Pido una reunión para explicar por qué mi caso es diferente y solicito una excepción.", riskValue: 10 }, // Manipulación sutil
        { text: "Suelo ignorarla si siento que no tiene sentido común o afecta la comodidad de mi hijo.", riskValue: 20 }, // Red Flag: Desacato
      ],
    },
    {
      id: 2,
      questionText: "Imagine que se establece una hora de entrada límite (ej: 8:30 am) para no interrumpir las actividades. Si usted llega a las 8:45 am y se le indica que ya no puede ingresar, ¿cómo reacciona?",
      options: [
        { text: "Me da pena, pero entiendo que es mi responsabilidad y me retiro sin discutir.", riskValue: 0 },
        { text: "Insisto un poco, explicando que fue el tráfico, esperando que 'por esta vez' me dejen pasar.", riskValue: 10 }, // Intento de romper la regla
        { text: "Me molesto mucho. Yo pago por un servicio y no me pueden cerrar la puerta.", riskValue: 20 }, // Red Flag: Sentido de derecho/Entitlement
      ],
    },
    {
      id: 3,
      questionText: "Si el centro aplica una penalidad económica automática por retrasos recurrentes en la hora de salida, ¿cuál es su pensamiento?",
      options: [
        { text: "Es justo. El tiempo del personal vale y esto me motiva a organizarme mejor.", riskValue: 0 },
        { text: "Depende. Si es una emergencia real no deberían cobrar, hablaría para que me lo perdonen.", riskValue: 5 },
        { text: "Me parece un abuso y una forma de sacar dinero extra. Un retraso lo tiene cualquiera.", riskValue: 20 }, // Red Flag: No valora tu tiempo
      ],
    },
  
    // --- BLOQUE 2: SEGURIDAD Y DISCRECIÓN (Vital para tu contexto en SJL) ---
  
    {
      id: 4,
      questionText: "Por seguridad estricta, nuestro protocolo exige 'perfil bajo': cero fotos del local en redes sociales y discreción sobre la ubicación. ¿Cómo se siente con esto?",
      options: [
        { text: "Totalmente de acuerdo y agradecido. La seguridad y privacidad es lo primero hoy en día.", riskValue: 0 },
        { text: "Lo acepto si es obligatorio, aunque me gusta compartir los logros de mi hijo en mis redes.", riskValue: 5 },
        { text: "Me parece paranoico. Yo tengo libertad de publicar dónde está mi hijo si quiero.", riskValue: 20 }, // Red Flag TOTAL: Peligro de seguridad
      ],
    },
    {
      id: 5,
      questionText: "Para evitar riesgos externos, no manejamos dinero en efectivo en el local bajo ninguna circunstancia. ¿Esto representa un problema para usted?",
      options: [
        { text: "No, me manejo bien con transferencias o billeteras digitales (Yape/Plin).", riskValue: 0 },
        { text: "A veces me es difícil, preferiría poder pagar en efectivo si estoy apurado.", riskValue: 10 }, // Alerta: Posible informalidad problemática
        { text: "Sí es un problema. Yo solo manejo efectivo y no uso bancos.", riskValue: 20 }, // Red Flag: Riesgo operativo
      ],
    },
  
    // --- BLOQUE 3: ESTILO DE CRIANZA Y MANEJO DE CONDUCTA (Detectar agresividad/permisividad) ---
  
    {
      id: 6,
      questionText: "En un grupo, los niños a veces pelean por juguetes. Si le informamos que su hijo empujó a un compañero para quitarle algo, ¿qué piensa primero?",
      options: [
        { text: "Me preocupa. Hablaré con él en casa para reforzar que eso no se hace.", riskValue: 0 }, // Asume responsabilidad
        { text: "Es normal a esta edad. Seguro el otro niño tampoco quería compartir o lo provocó.", riskValue: 10 }, // Minimiza/Justifica
        { text: "Quiero saber exactamente qué hizo el otro niño primero. Mi hijo no ataca de la nada.", riskValue: 20 }, // Red Flag: Defensivo/Culpa a otros
      ],
    },
    {
      id: 7,
      questionText: "Cuando su hijo hace un berrinche fuerte en un lugar público porque quiere algo, ¿cuál es su reacción más habitual?",
      options: [
        { text: "Mantengo la calma, lo aparto si es necesario, pero no cedo a lo que pide llorando.", riskValue: 0 }, // Límites sanos
        { text: "Intento negociar con él o distraerlo con otra cosa para que se calme rápido y no pasar vergüenza.", riskValue: 5 }, // Crianza evitativa
        { text: "A veces termino dándole lo que quiere para que se calle, o me altero y le grito.", riskValue: 15 }, // Alerta: Falta de herramientas/Inconsistencia
      ],
    },
    {
      id: 8,
      questionText: "¿Qué opina sobre que su hijo se ensucie la ropa jugando con pintura, tierra o comiendo solo?",
      options: [
        { text: "Es parte esencial de aprender y jugar. Para eso está la ropa de cambio.", riskValue: 0 },
        { text: "No me gusta mucho, prefiero que las profesoras estén atentas para que se mantenga limpio.", riskValue: 10 }, // Alerta: Expectativa poco realista
        { text: "Me molesta. Si lo mando limpio, espero recogerlo igual de limpio.", riskValue: 20 }, // Red Flag: No entiende el juego infantil
      ],
    },
    {
      id: 9,
      questionText: "Si su hijo llega a casa diciendo que 'la profesora es mala porque no le dejó hacer algo', ¿cómo procede?",
      options: [
        { text: "Escucho a mi hijo, pero le explico que las profesoras ponen reglas para cuidarlos.", riskValue: 0 },
        { text: "Le digo 'pobrecito' y al día siguiente le pregunto a la profesora qué pasó exactamente.", riskValue: 5 },
        { text: "Le creo a mi hijo y me preocupo. Si se repite, iré a reclamar por qué lo tratan mal.", riskValue: 20 }, // Red Flag: Desautoriza al docente
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
        { text: "Solicito una breve reunión o llamada en un horario adecuado para conversarlo con calma.", riskValue: 0 },
        { text: "Envío un mensaje de texto detallado explicando mi molestia en ese momento.", riskValue: 5 },
        { text: "Lo hablo directamente en la puerta a la hora de salida, delante de quien esté, para resolverlo ya.", riskValue: 20 }, // Red Flag: Imprudente/Confrontacional
      ],
    },
    {
      id: 12,
      questionText: "¿Qué espera principalmente del rol de las personas que cuidan a su hijo?",
      options: [
        { text: "Que sean colaboradores en la crianza, ofreciendo un entorno seguro, afectuoso y con límites claros.", riskValue: 0 },
        { text: "Que lo mantengan feliz, seguro y bien atendido en sus necesidades básicas mientras yo no estoy.", riskValue: 5 },
        { text: "Que sigan mis instrucciones precisas sobre cómo debe ser tratado mi hijo, ya que yo lo conozco mejor.", riskValue: 15 }, // Alerta: No permite autonomía profesional
      ],
    },
  
    // --- BLOQUE 5: HÁBITOS Y RUTINAS (Logística y Salud) ---
  
    {
      id: 13,
      questionText: "En cuanto a la alimentación, si su hijo se niega a comer el menú saludable del día, ¿qué espera que hagamos?",
      options: [
        { text: "Que lo animen a probar sin obligarlo, pero que no le ofrezcan alternativas 'fáciles' (galletas, etc.).", riskValue: 0 },
        { text: "Que le guarden la comida para intentarlo más tarde.", riskValue: 5 },
        { text: "Que por favor le den algo que sí le guste para asegurar que no se quede con hambre.", riskValue: 15 }, // Alerta: Fomenta malos hábitos
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
        { text: "Importante, pero en casa a veces lo ayudamos para ganar tiempo.", riskValue: 5 },
        { text: "Es muy pequeño todavía. Prefiero que lo ayuden para que no se frustre o se sienta mal.", riskValue: 15 }, // Alerta: Fomenta dependencia
      ],
    },
  
    // --- BLOQUE 6: PREGUNTAS "PARARRAYOS" (Diseñadas para que el padre problemático se delate) ---
  
    {
      id: 16,
      questionText: "A veces pedimos materiales reciclados de casa (conos de papel, cajas) para actividades. ¿Cuál es su postura?",
      options: [
        { text: "Me parece excelente y colaboraré en lo que pueda.", riskValue: 0 },
        { text: "Trataré de acordarme, aunque a veces soy despistado con esas cosas.", riskValue: 5 },
        { text: "Sinceramente, prefiero pagar una cuota extra y que ustedes se encarguen de conseguir todo.", riskValue: 15 }, // Alerta: Poca implicación
      ],
    },
    {
      id: 17,
      questionText: "Si organizamos un taller para padres sobre temas de crianza (ej: manejo de berrinches) un sábado por la mañana, ¿asistiría?",
      options: [
        { text: "Sí, me interesa mucho aprender herramientas nuevas.", riskValue: 0 },
        { text: "Depende de mi horario, pero intentaría ir si el tema es útil.", riskValue: 5 },
        { text: "Probablemente no. Yo ya tengo mi estilo de crianza definido y mis fines de semana son ocupados.", riskValue: 15 }, // Alerta: Cerrado a aprender
      ],
    },
    {
      id: 18,
      questionText: "¿Cómo describe el nivel de energía habitual de su hijo en comparación con otros niños de su edad?",
      options: [
        { text: "Promedio. Tiene momentos de energía y momentos de calma.", riskValue: 0 },
        { text: "Es bastante tranquilo, prefiere actividades sedentarias.", riskValue: 0 },
        { text: "Es muy intenso, un 'terremoto'. Le cuesta mucho quedarse quieto un minuto.", riskValue: 10 }, // Alerta: Requiere más personal/atención
      ],
    },
    {
      id: 19,
      questionText: "¿Su hijo tiene alguna dificultad conocida para seguir instrucciones de adultos que no sean sus padres?",
      options: [
        { text: "No, por lo general responde bien a la autoridad de otros adultos.", riskValue: 0 },
        { text: "A veces le cuesta al principio hasta que entra en confianza, es tímido.", riskValue: 5 },
        { text: "Sí, es muy voluntarioso y suele retar a quien intenta mandarlo si no soy yo.", riskValue: 20 }, // Red Flag: Problemas de conducta inminentes
      ],
    },
    {
      id: 20,
      questionText: "¿Qué opina de la frase 'El cliente siempre tiene la razón' aplicada a un centro educativo/de cuidado?",
      options: [
        { text: "No aplica igual. Aquí se trata del bienestar del niño, que debe estar por encima de los deseos del padre.", riskValue: 0 },
        { text: "En parte sí, porque uno paga por un servicio y debe ser escuchado.", riskValue: 10 },
        { text: "Totalmente de acuerdo. Si yo pago, el servicio debe ajustarse a mis requerimientos.", riskValue: 25 }, // Red Flag TOTAL: Padre tirano
      ],
    },
  
    // --- BLOQUE 7: SITUACIONES HIPOTÉTICAS FINALES (Test de estrés) ---
  
    {
      id: 21,
      questionText: "Un día su hijo sale con un rasguño pequeño en el brazo producto de un juego. Se le informa al respecto. ¿Cuál es su pensamiento interno?",
      options: [
        { text: "Son cosas que pasan cuando juegan niños juntos. Mientras me avisen, todo bien.", riskValue: 0 },
        { text: "Me molesta que no lo hayan cuidado bien. Espero que no se repita.", riskValue: 15 }, // Alerta: Expectativa irreal de "riesgo cero"
        { text: "Exijo saber quién fue el otro niño para hablar con sus padres.", riskValue: 20 }, // Red Flag: Confrontacional
      ],
    },
    {
      id: 22,
      questionText: "Se acerca el día de la madre/padre y pedimos una foto familiar para una manualidad sorpresa. Usted olvida enviarla. Su hijo es el único sin foto ese día. ¿Qué piensa?",
      options: [
        { text: "Me siento fatal, fue mi responsabilidad y asumo la culpa.", riskValue: 0 },
        { text: "Pienso que las profesoras debieron recordármelo más veces o buscar una solución.", riskValue: 15 }, // Alerta: No asume culpa
        { text: "Me parece el colmo que excluyan a mi hijo por una foto. Debieron resolverlo.", riskValue: 20 }, // Red Flag: Culpa al centro de su negligencia
      ],
    },
    {
      id: 23,
      questionText: "(Para el horario de 6:00 am) Si usted necesita el servicio de madrugada, ¿entiende que el niño llegará a descansar y no a jugar hasta que inicie el horario regular?",
      options: [
        { text: "Sí, es perfecto porque así completa su sueño.", riskValue: 0 },
        { text: "No necesito ese horario.", riskValue: 0 },
        { text: "Preferiría que ya le vayan enseñando algo o estimulándolo desde que llega.", riskValue: 10 }, // Alerta: No respeta el descanso del niño
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
        { text: "Me adapto, si es para mejorar la comunicación me parece bien.", riskValue: 0 },
        { text: "Me cuesta la tecnología, preferiría que me sigan mandando WhatsApp.", riskValue: 5 },
        { text: "No tengo tiempo para aprender cosas nuevas, prefiero el cuaderno de control de siempre.", riskValue: 15 }, // Alerta: Resistencia al cambio
      ],
    },
    {
      id: 26,
      questionText: "Finalmente, ¿qué frase describe mejor su visión sobre la relación entre la familia y la guardería?",
      options: [
        { text: "Es un trabajo en equipo basado en la confianza y el respeto mutuo.", riskValue: 0 },
        { text: "Es un servicio que contrato para que cuiden a mi hijo mientras trabajo.", riskValue: 10 }, // Visión transaccional
        { text: "La guardería está para apoyarme a mí y adaptarse a las necesidades de mi familia.", riskValue: 20 }, // Visión egocéntrica
      ],
    },
    {
      id: 27,
      questionText: "Hay padres que, por ansiedad, necesitan escribir muchas veces al día para saber cómo está su hijo. ¿Se identifica con esto?",
      options: [
        { text: "No, si sé que está en un lugar seguro, confío y me enfoco en mi trabajo.", riskValue: 0 },
        { text: "Al principio sí me costará y seguro escribiré un par de veces hasta adaptarme.", riskValue: 5 },
        { text: "Sí, yo necesito saber casi hora a hora que mi hijo está bien para estar tranquila/o.", riskValue: 20 }, // Red Flag: Padre altamente ansioso/demandante
      ],
    }
  ];