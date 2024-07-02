import { NavLink } from "react-router-dom";

import { MdHome } from "react-icons/md";
import { FaMedal } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { BiSolidStore } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
import { BsBank2 } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";

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
          <NavLink to="/home">
            <li className="flex items-center text-4xl">
              <MdHome />
              <span className="h-11 text-sky-600">בית</span>
            </li>
          </NavLink>
          <NavLink to="/leaderboard">
            <li className="flex items-center gap-1 text-4xl">
              <FaMedal />
              <span className="h-11 text-sky-600">טבלת המובילים</span>
            </li>
          </NavLink>
          <NavLink to="/hire">
            <li className="flex items-center gap-1 text-4xl">
              <BsPersonWorkspace />
              <span className="h-11 text-sky-600">עובדים וחיילים</span>
            </li>
          </NavLink>
          <NavLink to="/store">
            <li className="flex items-center gap-1 text-4xl">
              <BiSolidStore />
              <span className="h-11 text-sky-600">חנות</span>
            </li>
          </NavLink>
          <NavLink to="/reports">
            <li className="flex items-center gap-1 text-4xl">
              <TbReportSearch />
              <span className="h-11 text-sky-600">דוחות</span>
            </li>
          </NavLink>
          <NavLink to="/bank">
            <li className="flex items-center gap-1 text-4xl">
              <BsBank2 />
              <span className="h-11 text-sky-600">בנק</span>
            </li>
          </NavLink>
          <NavLink to="/messages">
            <li className="flex items-center gap-1 text-4xl">
              <TiMessages />
              <span className="h-11 text-sky-600">הודעות</span>
            </li>
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
