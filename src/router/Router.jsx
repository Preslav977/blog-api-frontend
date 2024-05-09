import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import PostComponent from "../components/PostComponent";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [{ index: true, element: <PostComponent /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
