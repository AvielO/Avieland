const NavItem = () => {
  return (
    <NavLink onClick={() => handleLogout()} to="/signin">
      <li className="flex items-center gap-1">
        <MdLogout />
        <span className="h-11 text-sky-600">התנתק</span>
      </li>
    </NavLink>
  );
};

export default NavItem;
