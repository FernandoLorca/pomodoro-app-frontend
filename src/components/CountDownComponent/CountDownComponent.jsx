import GlobalTimersProvider from '../../context/GlobalTimersProvider';
import CountDownTimer from '../CountDownTimer/CountDownTimer';

const CountDownComponent = () => {
  return (
    <GlobalTimersProvider>
      <CountDownTimer />
    </GlobalTimersProvider>
  );
};

export default CountDownComponent;
