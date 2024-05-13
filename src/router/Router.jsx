import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import FetchPosts from "../api/FetchPosts";
import FetchSinglePost from "../api/FetchSinglePost";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <FetchPosts /> },
        { path: "/posts/:id", element: <FetchSinglePost /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
