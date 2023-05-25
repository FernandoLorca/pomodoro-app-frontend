import Timer from './Timer';
import './CountDownTimer.css';

const CountDownTimer = () => {
  return (
    <div className="flex flex-col items-center">
      <Timer />
      <button className="bg-blue-500 buttonTimer text-white px-16 py-4 rounded-2xl">
        Start
      </button>
    </div>
  );
};

export default CountDownTimer;
