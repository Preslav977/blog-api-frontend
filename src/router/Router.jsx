import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import FetchPosts from "../api/FetchPosts";
import FetchSinglePost from "../api/FetchSinglePost";
import FetchPostsByCategory from "../api/FetchPostsByCategory";
import FetchPostsByTags from "../api/FetchPostsByTags";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <FetchPosts /> },
        { path: "/posts/:id", element: <FetchSinglePost /> },
        { path: "/posts/category/:name", element: <FetchPostsByCategory /> },
        { path: "/posts/tag/:name", element: <FetchPostsByTags /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
