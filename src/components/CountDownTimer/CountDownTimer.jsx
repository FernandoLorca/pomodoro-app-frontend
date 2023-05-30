import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useGlobalTimersContext } from '../../context/useGlobalTimersContext';

import Timer from './Timer';
import ButtonStart from './ButtonStart';
import ButtonReset from './ButtonReset';
import './CountDownTimer.css';

const CountDownTimer = () => {
  const { pathname } = useLocation();
  const { timers, startTimer, resetTimer, setPathname } =
    useGlobalTimersContext();
  const [defineTimer, setDefineTimer] = useState(timers.pomodoro);

  useEffect(() => setPathname(pathname), [pathname, setPathname]);

  useEffect(() => {
    switch (pathname) {
      case '/short-break':
        setDefineTimer(timers.shortBreak);
        break;
      case '/long-break':
        setDefineTimer(timers.longBreak);
        break;
      default:
        setDefineTimer(timers.pomodoro);
        break;
    }
  }, [pathname, timers.shortBreak, timers.longBreak, timers.pomodoro]);

  return (
    <div className="flex flex-col items-center">
      <Timer timers={defineTimer} />
      <ButtonStart
        startTimer={startTimer}
        text={timers.button}
        isRunning={timers.isRunning}
      />
      <ButtonReset resetTimer={resetTimer} isRunning={timers.isRunning} />
    </div>
  );
};

export default CountDownTimer;
