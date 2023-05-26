import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const ButtonStart = ({ startTimer, text, isRunning }) => {
  return (
    <button
      className="flex items-center bg-blue-500 buttonTimer text-white px-16 py-4 rounded-2xl"
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
