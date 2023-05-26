import PropTypes from 'prop-types';

const ButtonReset = ({ resetTimer }) => {
  return (
    <button
      className="mt-5 cursor-pointer text-blue-500 hover:opacity-75"
      onClick={resetTimer}
    >
      Reset
    </button>
  );
};

ButtonReset.propTypes = {
  resetTimer: PropTypes.func.isRequired,
};

export default ButtonReset;
