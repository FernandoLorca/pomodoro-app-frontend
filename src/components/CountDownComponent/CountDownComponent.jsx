//! RECUERDA QUE ESTAS EN LA RAMA FIRST LAYOUT

import ButtonsList from '../CountDownButtons/ButtonsList';
import CountDownTimer from '../CountDownTimer/CountDownTimer';
import './CountDownComponent.css';

const CountDownComponent = () => {
  return (
    <div className="CountDownWrapper rounded-lg h-fit py-8">
      <ButtonsList />
      <CountDownTimer />
    </div>
  );
};

export default CountDownComponent;
