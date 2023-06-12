import { NavLink } from 'react-router-dom';
import NavigationButton from './NavigationButton';

const Navbar = () => {
  return (
    <ul className="flex justify-around px-5">
      <li>
        {/* <NavLink to="/"> */}
        <NavigationButton text="Pomodoro" />
        {/* </NavLink> */}
      </li>
      {/* <li>
        <NavLink to="/short-break">
          <NavigationButton text="Short break" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/long-break">
          <NavigationButton text="Long break" />
        </NavLink>
      </li> */}
    </ul>
  );
};

export default Navbar;
