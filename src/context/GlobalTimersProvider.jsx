import PropTypes from 'prop-types';
import { useState, useEffect, createContext } from 'react';

export const GlobalTimersContext = createContext();

const GlobalTimersProvider = ({ children }) => {
  const [timers, setTimers] = useState({
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
    isRunning: false,
    button: 'Start',
  });
  const [pathname, setPathname] = useState('/');

  const startTimer = () =>
    setTimers({ ...timers, isRunning: !timers.isRunning });

  useEffect(() => {
    if (timers.pomodoro === 0) return;

    let intervalId;

    if (timers.isRunning) {
      setTimers(prevTimers => ({
        ...prevTimers,
        button: 'Pause',
      }));

      intervalId = setInterval(() => {
        switch (pathname) {
          case '/short-break':
            setTimers(prevTimers => ({
              ...prevTimers,
              pomodoro: prevTimers.shortBreak - 1,
            }));
            break;
          case '/long-break':
            setTimers(prevTimers => ({
              ...prevTimers,
              pomodoro: prevTimers.longBreak - 1,
            }));
            break;
          default:
            setTimers(prevTimers => ({
              ...prevTimers,
              pomodoro: prevTimers.pomodoro - 1,
            }));
            break;
        }
      }, 1000);
    } else {
      setTimers(prevTimers => ({
        ...prevTimers,
        button: 'Start',
      }));
    }

    return () => clearInterval(intervalId);
  }, [timers.pomodoro, timers.isRunning, pathname]);

  const resetTimer = () =>
    !timers.isRunning &&
    setTimers({
      ...timers,
      pomodoro: 25 * 60,
    });

  return (
    <GlobalTimersContext.Provider
      value={{
        timers,
        setTimers,
        startTimer,
        resetTimer,
        setPathname,
      }}
    >
      {children}
    </GlobalTimersContext.Provider>
  );
};

GlobalTimersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalTimersProvider;
