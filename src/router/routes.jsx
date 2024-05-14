import App from "../App";
import FetchPosts from "../api/FetchPosts";
import FetchSinglePost from "../api/FetchSinglePost";
import FetchPostsByCategory from "../api/FetchPostsByCategory";
import FetchPostsByTags from "../api/FetchPostsByTags";

const routes = [
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
];

export default routes;
