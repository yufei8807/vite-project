import { createBrowserRouter } from "react-router-dom";
import Error404 from "@/views/404";
import Error403 from "@/views/403";
import Login from "@/views/Login";
import Welcome from "@/views/Welcome";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
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
