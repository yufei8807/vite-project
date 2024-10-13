import { createBrowserRouter, Navigate } from "react-router-dom";
import Error404 from "@/views/404";
import Error403 from "@/views/403";
import Login from "@/views/Login";
import Layout from "@/layout";
import Welcome from "@/views/Welcome";
import Dashboard from "@/views/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/welcome" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/403",
    element: <Error403 />,
  },
]);

export default routes;
