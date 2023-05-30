import propTypes from 'prop-types';

const Timer = ({ pomodoro }) => {
  const minutes = Math.floor(pomodoro / 60);
  const seconds = pomodoro % 60;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <p className="timer font-bold">
      {minutes}:{displaySeconds}
    </p>
  );
};

Timer.propTypes = {
  pomodoro: propTypes.number.isRequired,
};

export default Timer;
