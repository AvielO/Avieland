import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import UserPage, { loader as userLoader } from "./pages/UserPage/UserPage";
import StorePage, { loader as storeLoader } from "./pages/StorePage/StorePage";
import ReportPage, {
  loader as reportLoader,
} from "./pages/ReportPage/ReportPage";
import HirePage from "./pages/HirePage/HirePage";
import ReportsPage from "./pages/ReportsPage/ReportsPage";
import BankPage from "./pages/BankPage/BankPage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { ToastContainer } from "react-toastify";

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
        element: (
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/leaderboard",
        element: (
          <PrivateRoute>
            <Leaderboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/:username",
        element: (
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        ),
        loader: userLoader,
      },
      {
        path: "/store",
        element: (
          <PrivateRoute>
            <StorePage />
          </PrivateRoute>
        ),
        loader: storeLoader,
      },
      {
        path: "/reports",
        element: (
          <PrivateRoute>
            <ReportsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/reports/:id",
        element: (
          <PrivateRoute>
            <ReportPage />
          </PrivateRoute>
        ),
        loader: reportLoader,
      },
      {
        path: "/hire",
        element: (
          <PrivateRoute>
            <HirePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/bank",
        element: (
          <PrivateRoute>
            <BankPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/messages",
        element: (
          <PrivateRoute>
            <MessagesPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/messages/:chatUsername",
        element: (
          <PrivateRoute>
            <MessagesPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} position="bottom-left" />
    </>
  );
};

export default App;
