import Sidebar from "../../components/Sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className="flex h-full flex-row bg-sky-200">
      <div className="w-[36dvh]">
        <Sidebar />
      </div>
      <div className="w-full">This is the content</div>
    </div>
  );
};

export default HomePage;
