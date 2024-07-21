import { Link, NavLink } from "react-router-dom";

import { MdHome } from "react-icons/md";
import { FaMedal } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { BiSolidStore } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
import { BsBank2 } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";

import { userLogout } from "../../slices/userSlice";
import { fetchWrapper } from "../../utils/fetchWarpper";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await fetchWrapper(`${process.env.SERVER_URL}/auth/logout`);
    dispatch(userLogout());
  };

  return (
    <nav>
      <ul className="flex flex-col gap-7">
        <Link to="/home">
          <img src="/logo.png" alt="logo's game" />
        </Link>
        <div className="flex flex-col items-center gap-14 text-4xl">
          <NavLink to="/home">
            <li className="flex items-center gap-1">
              <MdHome />
              <span className="h-11 text-sky-600">בית</span>
            </li>
          </NavLink>
          <NavLink to="/leaderboard">
            <li className="flex items-center gap-1">
              <FaMedal />
              <span className="h-11 text-sky-600">טבלת המובילים</span>
            </li>
          </NavLink>
          <NavLink to="/hire">
            <li className="flex items-center gap-1">
              <BsPersonWorkspace />
              <span className="h-11 text-sky-600">העסקה</span>
            </li>
          </NavLink>
          <NavLink to="/store">
            <li className="flex items-center gap-1">
              <BiSolidStore />
              <span className="h-11 text-sky-600">חנות</span>
            </li>
          </NavLink>
          <NavLink to="/reports">
            <li className="flex items-center gap-1">
              <TbReportSearch />
              <span className="h-11 text-sky-600">דוחות</span>
            </li>
          </NavLink>
          <NavLink to="/bank">
            <li className="flex items-center gap-1">
              <BsBank2 />
              <span className="h-11 text-sky-600">בנק</span>
            </li>
          </NavLink>
          <NavLink to="/messages">
            <li className="flex items-center gap-1">
              <TiMessages />
              <span className="h-11 text-sky-600">הודעות</span>
            </li>
          </NavLink>
          <NavLink onClick={() => handleLogout()} to="/signin">
            <li className="flex items-center gap-1">
              <MdLogout />
              <span className="h-11 text-sky-600">התנתק</span>
            </li>
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
