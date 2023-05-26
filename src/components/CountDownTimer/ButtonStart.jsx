import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const ButtonStart = ({ startTimer, text, isRunning }) => {
  return (
    <button
      className={`buttonTimer flex items-center rounded-2xl bg-blue-500 px-16 py-4 text-white transition-transform hover:-translate-y-2 active:translate-y-0 ${
        isRunning && 'translate-y-0 hover:translate-y-0'
      }`}
      onClick={startTimer}
    >
      <BsFillPlayFill className={`mr-1 ${isRunning ? 'hidden' : 'block'}`} />
      <BsFillPauseFill className={`mr-1 ${!isRunning ? 'hidden' : 'block'}`} />
      {text}
    </button>
  );
};

ButtonStart.propTypes = {
  startTimer: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isRunning: PropTypes.bool.isRequired,
};

export default ButtonStart;
