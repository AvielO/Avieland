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
import NavItem from "../../components/NavItem/NavItem";

const routeToTitleMap = {
  home: "בית",
  leaderboard: "טבלת המובילים",
  hire: "העסקה",
  store: "חנות",
  reports: "דוחות",
  bank: "בנק",
  messages: "הודעות",
  signin: "התנתק",
};
const routeToIconMap = {
  home: <MdHome />,
  leaderboard: <FaMedal />,
  hire: <BsPersonWorkspace />,
  store: <BiSolidStore />,
  reports: <TbReportSearch />,
  bank: <BsBank2 />,
  messages: <TiMessages />,
  signin: <MdLogout />,
};

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
          {Object.entries(routeToTitleMap).map(([route, title]) => (
            <NavItem
              route={route}
              title={title}
              onClick={route === "signin" ? handleLogout : false}
              key={route}
            >
              {routeToIconMap[route]}
            </NavItem>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
