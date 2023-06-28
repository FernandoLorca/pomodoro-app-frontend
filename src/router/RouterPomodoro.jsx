import CountDownComponent from '../components/CountDownComponent/CountDownComponent';
import Navbar from '../components/Navigation/Navbar';

const RouterPomodoro = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="CountDownWrapper h-fit w-10/12 rounded-lg py-8 md:w-6/12 lg:w-5/12">
        <Navbar />
        <CountDownComponent />
      </div>
    </div>
  );
};

export default RouterPomodoro;
