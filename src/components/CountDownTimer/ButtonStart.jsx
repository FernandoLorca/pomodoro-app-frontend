import PropTypes from 'prop-types';
const ButtonStart = ({ startTimer, text }) => {
  return (
    <button
      className="bg-blue-500 buttonTimer text-white px-16 py-4 rounded-2xl"
      onClick={startTimer}
    >
      {text}
    </button>
  );
};

ButtonStart.propTypes = {
  startTimer: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonStart;
