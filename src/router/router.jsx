import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FetchPosts from "../api/FetchPosts";
import FetchSinglePost from "../api/FetchSinglePost";
import FetchPostsByCategory from "../api/FetchPostsByCategory";
import FetchPostsByTags from "../api/FetchPostsByTags";
import SignUpFormComponent from "../components/SignUpFormComponent";
import LogInFormComponent from "../components/LogInFormComponent";
import UserDashboardComponent from "../components/UserDashboardComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <FetchPosts /> },
      {
        path: "/posts/:id",
        element: <FetchSinglePost />,
      },
      { path: "/posts/category/:id", element: <FetchPostsByCategory /> },
      { path: "/posts/tag/:name", element: <FetchPostsByTags /> },
      { path: "/account/signup", element: <SignUpFormComponent /> },
      { path: "/account/login", element: <LogInFormComponent /> },
      { path: "/account", element: <UserDashboardComponent /> },
    ],
  },
]);

export default router;
