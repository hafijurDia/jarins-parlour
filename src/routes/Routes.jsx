
import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
            path: "/portfolio",
            element: <Portfolio></Portfolio>,
          },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout></DashboardLayout>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        },
        
        
      ],
    },
  ]);
