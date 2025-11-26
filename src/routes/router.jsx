import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Services from "../pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
