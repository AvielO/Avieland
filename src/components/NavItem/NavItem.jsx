import { NavLink } from "react-router-dom";

const NavItem = ({ route, title, children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <NavLink onClick={handleClick} to={`/${route}`}>
      <li className="flex items-center gap-1">
        {children}
        <span className="h-11 text-sky-600">{title}</span>
      </li>
    </NavLink>
  );
};

export default NavItem;
