import Button from './NavigationButton';

const ButtonsList = () => {
  return (
    <ul className="mb-5 flex justify-around px-5">
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
