
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
import AllUser from "../pages/Admin/AllUser/AllUser";
import MakeAdmin from "../pages/Admin/MakeAdmin/MakeAdmin";


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
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path:"/all-users",
          element: <AllUser></AllUser>
        },
        {
          path: "/make-admin",
          element: <MakeAdmin></MakeAdmin>
        }
        
        
      ],
    },
  ]);
