import CountDownComponent from '../components/CountDownComponent/CountDownComponent';
import Navbar from '../components/Navigation/Navbar';

const RouterPomodoro = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="CountDownWrapper h-fit rounded-lg py-8">
        <Navbar />
        <CountDownComponent />
      </div>
    </div>
  );
};

export default RouterPomodoro;
