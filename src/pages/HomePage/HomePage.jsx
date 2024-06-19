import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
    <div className="flex h-full flex-row bg-sky-200">
      <div className="w-[40dvh] bg-sky-50">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
};

export default HomePage;
