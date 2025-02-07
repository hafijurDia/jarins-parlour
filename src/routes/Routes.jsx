
import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";


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
            path: "/portfolio",
            element: <Portfolio></Portfolio>,
          },
      ],
    },
  ]);
