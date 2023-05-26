import PropTypes from 'prop-types';
const ButtonStart = ({ startTimer }) => {
  return (
    <button
      className="bg-blue-500 buttonTimer text-white px-16 py-4 rounded-2xl"
      onClick={startTimer}
    >
      Start
    </button>
  );
};

ButtonStart.propTypes = {
  startTimer: PropTypes.func.isRequired,
};

export default ButtonStart;
