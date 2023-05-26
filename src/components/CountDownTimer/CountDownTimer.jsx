import { useState, useEffect } from 'react';

import Timer from './Timer';
import ButtonStart from './ButtonStart';
import './CountDownTimer.css';

const CountDownTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [button, setButton] = useState('Start');

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  const startTimer = () => setIsRunning(!isRunning);

  useEffect(() => {
    if (time === 0) return;
    if (isRunning) {
      setButton('Pause');
      const id = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(id);
    } else {
      setButton('Start');
    }
  }, [time, isRunning]);

  return (
    <div className="flex flex-col items-center">
      <Timer minutes={minutes} displaySeconds={displaySeconds} />
      <ButtonStart
        startTimer={startTimer}
        text={button}
        isRunning={isRunning}
      />
    </div>
  );
};

export default CountDownTimer;
