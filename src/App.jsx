import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import UserPage, { loader as userLoader } from "./pages/UserPage/UserPage";
import StorePage from "./pages/StorePage/StorePage";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/user/:username",
        element: <UserPage />,
        loader: userLoader,
      },
      {
        path: "/store",
        element: <StorePage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
