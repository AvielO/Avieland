import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import UserResources from "../UserResources/UserResources";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-sky-200">
      <div className="w-[42dvh] bg-sky-50 py-6">
        <Sidebar />
      </div>
      <div className="m-10 w-full">
        <Header />
        <UserResources />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
