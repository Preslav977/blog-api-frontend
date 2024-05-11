import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import FetchPosts from "../api/FetchPosts";
import PostDetailComponent from "../components/PostDetailedComponent";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <FetchPosts /> },
        { path: "/posts/:id", element: <PostDetailComponent /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
