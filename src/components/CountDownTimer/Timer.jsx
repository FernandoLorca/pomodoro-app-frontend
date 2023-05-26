import propTypes from 'prop-types';

const Timer = ({ minutes, displaySeconds }) => {
  return (
    <p className="timer font-bold">
      {minutes}:{displaySeconds}
    </p>
  );
};

Timer.propTypes = {
  minutes: propTypes.number.isRequired,
  displaySeconds: propTypes.oneOfType([
    propTypes.number.isRequired,
    propTypes.string.isRequired,
  ]),
};

export default Timer;
