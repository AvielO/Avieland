import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import UserResources from "../../components/UserResources/UserResources";

const HomePage = () => {
  return (
    <div className="flex h-full flex-row bg-sky-200">
      <div className="w-[40dvh] bg-sky-50">
        <Sidebar />
      </div>
      <div className="w-full m-10">
        <Header />
        <UserResources />
      </div>
    </div>
  );
};

export default HomePage;
