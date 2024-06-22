import { NavLink } from "react-router-dom";
import { DiApple } from "react-icons/di";

const Sidebar = () => {
  return (
    <nav className="h-full w-full flex-col">
      <ul className="flex h-full flex-col gap-7">
        <div className="mt-6">
          <NavLink to="/home">
            <li>
              <img src="/logo.png" alt="logo Game" />
            </li>
          </NavLink>
        </div>
        <div className="flex h-full flex-col items-center gap-14">
          <li>
            <NavLink className="flex items-center text-4xl" to="/home">
              <DiApple />
              <span className="text-sky-600">בית</span>
            </NavLink>
          </li>
          <NavLink to="/leaderboard">
            <li className="flex items-center text-4xl">
              <DiApple />
              <span className="text-sky-600">טבלת המובילים</span>
            </li>
          </NavLink>
          <NavLink to="/workers-and-soliders">
            <li className="flex items-center text-4xl">
              <DiApple />
              <span className="text-sky-600">עובדים וחיילים</span>
            </li>
          </NavLink>
          <NavLink to="/store">
            <li className="flex items-center text-4xl">
              <DiApple />
              <span className="text-sky-600">חנות</span>
            </li>
          </NavLink>
          <NavLink to="/reports">
            <li className="flex items-center text-4xl">
              <DiApple />
              <span className="text-sky-600">דוחות</span>
            </li>
          </NavLink>
          <NavLink to="/bank">
            <li className="flex items-center text-4xl">
              <DiApple />
              <span className="text-sky-600">בנק</span>
            </li>
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
