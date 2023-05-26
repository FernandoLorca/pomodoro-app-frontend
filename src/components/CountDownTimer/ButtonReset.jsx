import PropTypes from 'prop-types';

const ButtonReset = ({ resetTimer, isRunning }) => {
  return (
    <button
      className={`mt-5 cursor-pointer text-blue-500 hover:opacity-75 ${
        isRunning && 'hidden'
      }`}
      onClick={resetTimer}
    >
      Reset
    </button>
  );
};

ButtonReset.propTypes = {
  resetTimer: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
};

export default ButtonReset;
