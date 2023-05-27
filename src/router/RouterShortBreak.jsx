import NavBar from '../components/Navigation/Navbar';
import CountDownComponent from '../components/CountDownComponent/CountDownComponent';
import '../components/CountDownComponent/CountDownComponent.css';

const RouterShortBreak = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="CountDownWrapper h-fit rounded-lg py-8">
        <NavBar />
        <CountDownComponent />
      </div>
    </div>
  );
};

export default RouterShortBreak;
