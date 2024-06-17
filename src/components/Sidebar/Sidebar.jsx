import { NavLink } from "react-router-dom";
import { DiApple } from "react-icons/di";

const Sidebar = () => {
  return (
    <nav className="h-full w-full flex-col">
      <ul className="flex h-full flex-col">
        <div className="mt-6">
          <NavLink to="/home">
            <li>
              <img src="logo.png" alt="logo Game" />
            </li>
          </NavLink>
        </div>
        <div className="flex h-full flex-col">
          <NavLink className="flex" to="/home">
            <li className="mt-8 flex items-center p-4 text-2xl">
              <DiApple />
              <span className="text-sky-600">בית</span>
            </li>
          </NavLink>
          <NavLink to="/hall-of-fame">
            <li className="mt-8 flex items-center p-4 text-2xl">
              <DiApple />
              <span className="text-sky-600">טבלת המובילים</span>
            </li>
          </NavLink>
          <NavLink to="/workers-and-soliders">
            <li className="mt-8 flex items-center p-4 text-2xl">
              <DiApple />
              <span className="text-sky-600">עובדים וחיילים</span>
            </li>
          </NavLink>
          <NavLink to="/store">
            <li className="mt-8 flex items-center p-4 text-2xl">
              <DiApple />
              <span className="text-sky-600">חנות</span>
            </li>
          </NavLink>
          <NavLink to="/reports">
            <li className="mt-8 flex items-center p-4 text-2xl">
              <DiApple />
              <span className="text-sky-600">דוחות</span>
            </li>
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
