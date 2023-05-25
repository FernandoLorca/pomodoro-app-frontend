import { useState, useEffect } from 'react';

const Timer = () => {
  // Cree el estado inicial del tiempo en 25 minutos
  const [time, setTime] = useState(25 * 60);
  // Cree una constante que convierte los segundos a minutos
  // Math.floor redondea el número hacia abajo
  const minutes = Math.floor(time / 60);
  // Cree una constante que devuelve el restante a los minutos
  // El operador % devuelve el restante de la división
  // por default: 1500 segundos con residuo de 0 me da 25 minutos
  const seconds = time % 60;
  // Cree una constante que muestra los segundos con dos dígitos
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    if (time === 0) return;

    const startTimer = () => {
      const id = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(id);
    };
  }, [time]);

  return (
    <p className="timer font-bold">
      {minutes}:{displaySeconds}
    </p>
  );
};

export default Timer;
