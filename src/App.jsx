//! RECUERDA QUE ESTAS EN LA RAMA FIRST LAYOUT

import Button from './components/Button';

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-red-200 w-96 h-96 rounded-lg">
        <ul className="flex justify-between px-5 pt-2">
          <li>
            <Button text="Pomodoro" />
          </li>
          <li>
            <button>Short Break</button>
          </li>
          <li>
            <button>Long Break</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
