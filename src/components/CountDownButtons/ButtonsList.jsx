import Button from './Button';

const ButtonsList = () => {
  return (
    <ul className="flex justify-around px-5 py-2">
      <li>
        <Button text="Pomodoro" />
      </li>
      <li>
        <Button text="Short break" />
      </li>
      <li>
        <Button text="Long break" />
      </li>
    </ul>
  );
};

export default ButtonsList;
