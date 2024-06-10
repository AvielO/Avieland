import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default AppLayout;
