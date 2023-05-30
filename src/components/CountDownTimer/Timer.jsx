import propTypes from 'prop-types';

const Timer = ({ timers }) => {
  const minutes = Math.floor(timers / 60);
  const seconds = timers % 60;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <p className="timer font-bold">
      {minutes}:{displaySeconds}
    </p>
  );
};

Timer.propTypes = {
  timers: propTypes.number.isRequired,
};

export default Timer;
