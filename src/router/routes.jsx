import App from "../App";
import FetchPosts from "../api/FetchPosts";
import FetchSinglePost from "../api/FetchSinglePost";
import FetchPostsByCategory from "../api/FetchPostsByCategory";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <FetchPosts /> },
      { path: "/posts/:id", element: <FetchSinglePost /> },
      { path: "/posts/:id/category", element: <FetchPostsByCategory /> },
    ],
  },
];

export default routes;
